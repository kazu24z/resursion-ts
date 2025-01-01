// 実装する関数
export function main(numList:number[], value:number): number {
  // hashMap作成
  const hashMap: {[key:number]: number} = {}
  for(let i=0; i<numList.length; i++){
    hashMap[numList[i]] = i
  }
  // hashMapの中にvalueをkeyとする要素があればindexを泣ければ-1を
  return hashMap[value] !== undefined ? hashMap[value] : -1
}

// 入力データ（問題ごとに修正）
const data = [
  { list: [3, 10, 23, 3, 4, 50, 2, 3, 4, 18, 6, 1, -2], target: 23 },
  { list: [3, 10, 23, 3, 4, 50, 2, 3, 4, 18, 6, 1, -2], target: -2 },
  { list: [3, 10, 23, 3, 4, 50, 2, 3, 4, 18, 6, 1, -2], target: 100 }
]

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  const {list, target} = data[i]
  console.log(`${data[i]}:`, main(list, target));
}


