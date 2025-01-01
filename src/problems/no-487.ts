// 実装する関数
export function main(targetList:number[], searchList:number[]): number[] {
  // 検索対象のハッシュマップ
  const hashMap: {[key:number]: number} = {}
  for(let i=0; i<searchList.length;i++){
    hashMap[searchList[i]] = searchList[i]
  }

  // targetListの各要素がhashMapに存在していたら配列に詰め込む
  let result: number[] = [];
  for(let i=0; i<targetList.length; i++) {
    hashMap[targetList[i]] !== undefined && !result.includes(targetList[i]) ? result.push(targetList[i]): ''
  }

  result.sort((a, b)=>{
    console.log(`Comparing ${a} and ${b}`)
    return a-b;
  })

  return result.sort((a, b)=>(a<b? -1: 1))
}

// 入力データ（問題ごとに修正）
const data = [
  { targetList: [1, 2, 3, 4, 5, 6], searchList: [1, 4, 4, 5, 8, 9, 10, 11] },
  { targetList: [3, 4, 5, 10, 2, 20, 4, 5], searchList: [4, 20, 22, 2, 2, 2, 10, 1, 4] },
  { targetList: [2, 3, 4, 54, 10, 5, 9, 11], searchList: [3, 10, 23, 10, 0, 5, 9, 2] }
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  const {targetList, searchList} = data[i]
  console.log(`${data[i]}:`, main(targetList, searchList));
}


