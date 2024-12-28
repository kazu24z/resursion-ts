// 実装する関数（お題ごとに変更）
export function main(): void {
  console.log('引数なし関数を実行');
}

const args = process.argv.slice(2);
const argCount = main.length;


// 引数なし関数の場合はそのまま実行
if(argCount > 0) {
  if (args.length > 0) {
    const numArg = Number(args[0]);
    if (!isNaN(numArg)) {
      main();
    } else {
      console.error("引数が不正です。");
      process.exit(1);
    }
  } else {
    console.error("引数は必要です。");
    process.exit(1);
  }
} else {
  main();
}
