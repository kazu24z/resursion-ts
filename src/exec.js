import { execSync } from "child_process";

// コマンドライン引数を取得
const args = process.argv.slice(2);

// 最初の引数（ファイル名）に `src/problems/` を付与
if (!args[0]) {
  console.error("Error: ファイル名を指定してください");
  process.exit(1);
}
const filePath = `src/problems/${args[0]}`;

// 残りの引数を可変で取得
const additionalArgs = args.slice(1).join(" ");

// コマンドを組み立てて実行
try {
  execSync(`vite-node ${filePath} ${additionalArgs}`, { stdio: "inherit" });
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
