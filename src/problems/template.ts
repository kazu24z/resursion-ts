// 実装する関数
export function main(arr: number[]): void {
  console.log(`${arr[0]}: main()を実行しました。`)
}

// 入力データ（問題ごとに修正）
const data = [
  [0, 1 ,2 ,3],
  [10, 11, 12, 13]
]

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  main(data[i]);
}

