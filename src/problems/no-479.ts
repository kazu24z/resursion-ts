// 実装する関数
export function main(n:number, k:number): void {
  console.log(`${n}: main()を実行しました。`)
}

/**
 * n = 4, k(0~n)
 * 
 * :  1
 * 2: 1 1
 * 
 */

// 入力データ（問題ごとに修正）
const data = [
  [1,1],
  [2,2],
  [4,2],
  [7,4],
]

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  const [x, y] = data[i]
  console.log(`${data[i]}:`, main(x, y));
}


