// 実装する関数
export function main(arr:number[], shuffledArr:number[]): number[] {
  let indexMap: { [key: number]: number } = {};
  let indexArr: number[] = [];

  for(let i=0; i< shuffledArr.length; i++) {
    indexMap[shuffledArr[i]] = i;
  }
  console.log(indexMap)

  for(let i=0; i<shuffledArr.length; i++){
    indexArr.push(indexMap[arr[i]])
  }

  return indexArr
}



// 入力データ（問題ごとに修正）
const data = [
  { arr: [2, 32, 45], shuffledArr: [45, 32, 2] },
  { arr: [10, 11, 12, 13], shuffledArr: [12, 10, 13, 11] },
  { arr: [10, 11, 12, 13], shuffledArr: [10, 11, 12, 13] },
  { arr: [1350, 181, 1714, 375, 1331, 943, 735], shuffledArr: [1714, 1331, 735, 375, 1350, 181, 943] }
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  const {arr, shuffledArr} = data[i]
  console.log(`${data[i]}:`, main(arr, shuffledArr));
}
