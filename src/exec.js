import { readdirSync } from "fs";
import { join, resolve } from "path";
import { execSync } from "child_process";

const args = process.argv.slice(2); // 引数取得
const fileName = args[0]; // 実行するファイル名
const commandLineArgs = JSON.stringify(args.slice(1)); // 残りの引数

// src/problems 以下を再帰的に探索してファイルを見つける関数
const findFiles = (baseDir, fileName) => {
  const result = [];
  const entries = readdirSync(baseDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(baseDir, entry.name);

    if (entry.isDirectory()) {
      // サブディレクトリを再帰的に探索
      result.push(...findFiles(fullPath, fileName));
    } else if (entry.isFile() && entry.name === fileName) {
      // ファイル名が一致すれば結果に追加
      result.push(fullPath);
    }
  }
  return result;
};

// サブフォルダを含む形式に対応
const findFileWithPath = (baseDir, inputPath) => {
  const pathFromRoot = baseDir + inputPath; // ex)src/problems/xxx/test.ts
  try {
    const absPath = resolve(pathFromRoot)
    console.log('file absolute path:', absPath)
    return absPath;
  } catch {
    return null;
  }
};

try {
  const baseDir = "src/problems";
  let filePath;

  if (fileName.includes("/")) {
    // フォルダを含むパスで指定された場合
    filePath = findFileWithPath(baseDir, fileName);
    if (!filePath) {
      throw new Error(`File "${fileName}" not found in "${baseDir}".`);
    }
  } else {
    // ファイル名だけで指定された場合
    const matchingFiles = findFiles(baseDir, fileName);

    if (matchingFiles.length === 0) {
      throw new Error(`File "${fileName}" not found in "${baseDir}".`);
    } else if (matchingFiles.length > 1) {
      // 重複エラー
      console.error(`Multiple files found with the name "${fileName}":`);
      matchingFiles.forEach((file, index) => console.error(`${index + 1}: ${file}`));
      console.error(
        `To avoid ambiguity, specify the file as "/parentFolder/${fileName}".`
      );
      process.exit(1);
    }

    filePath = matchingFiles[0]; // 1つだけの場合に選択
  }

  // コマンド実行
  execSync(`vite-node ${filePath} ${commandLineArgs}`, { stdio: "inherit" });
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
