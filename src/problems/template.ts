
//TODO: コマンド引数、配列や文字列を''で囲まないとエラーになる。オブジェクトとか渡せそうにない

import { z, ZodError } from "zod"

// 実装する関数
export function main(arr: [number, number], st1: string): void {
  console.log(`引数1:${arr[0]}, 引数2: ${arr[0]}, 引数3: ${st1}`)
}

// main関数の引数の型
// TODO: 定義するmain関数の引数型に合わせて修正してください。
// もしくは面倒ならzod部分を削除してください。
const mainSchema = z.tuple([
  z.tuple([z.number(), z.number()]),
  z.string(),
]);

const argString = process.argv.slice(2);
const parsedArgs = JSON.parse(argString[0])
const funcArgCount = main.length;

// 引数なし関数の場合はそのまま実行
if(funcArgCount > 0) {
  if (parsedArgs.length > 0) {
    try {
      const validated = mainSchema.parse(parsedArgs)
      main(...validated)
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("バリデーション失敗:", error.errors);
      } else {
        console.error("予期しないエラー:", error);
      }
    }
  } else {
    console.error("引数は必要です。");
    process.exit(1);
  }
} else {
  main();
}

