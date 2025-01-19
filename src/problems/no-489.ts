// 実装する関数
export function main(arr: number[]): number[] {
  // 選択ソートの実装
  const length = arr.length;
  for(let i=0; i<length; i++) {
    let minIndex = i;
    for(let j=i+1; j<length; j++) {
      if(arr[j] < arr[minIndex]) {
        // 最小の値を持つindexをどんどん入れ替えていく
        minIndex = j;
      }
    }
    let temp = arr[i] // その回の値を保存
    arr[i] = arr[minIndex] // 最小の値をその回のindexに入れる
    arr[minIndex] = temp // その回のもともとの値を最小値が出たindexの値に入れる
  }

  return arr
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

