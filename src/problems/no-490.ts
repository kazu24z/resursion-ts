// 実装する関数
export function main(arr: number[]): number[] {
  // コードレビュー版
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1; // jはソート済み部分の最後のindex
    // ソート済み部分を逆順にたどり、挿入位置を見つける （ケツから辿ると、ずらし処理も合わせてできる）
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

// 入力データ（問題ごとに修正）
const data = [
  [2, 12, 5, 10, 9, 8],
  [1, 5, 3, 4, 3, 1, 6],
  [11, 45, 32, 75, 88, 15, 15]
]

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}

