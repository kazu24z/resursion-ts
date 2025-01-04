// 実装する関数
export function main(listA:number[], listB:number[]): number[] {
  // listBのhashテーブル
  const hashB: {[key:number]: number}= {}
  for(let i=0; i<listB.length; i++){
    if(hashB[listB[i]] === undefined) hashB[listB[i]] = listB[i]
  }

  // hashBに対してlistAで参照をかけてヒットしないものをresult配列に入れる
  const result: number[] = [];
  for(let i=0; i<listA.length; i++){
    if(hashB[listA[i]]!==listA[i]){
      result.push(listA[i])
    }
  }

  return result;
}

// 入力データ（問題ごとに修正）
const data = [
  { listA: [1, 2, 3, 4, 5, 6, 7, 8], listB: [1, 3, 5] },
  { listA: [1, 2, 3, 4, 5], listB: [1, 2] },
  { listA: [1, 1], listB: [2, 2] },
  { listA: [9, 8, 7, 6, 5], listB: [1, 2] },
  { listA: [1, 2], listB: [9, 8, 7, 6, 5] },
  { listA: [3, 4, 5, 1, 2], listB: [1, 2] },
  { listA: [8, 3, 45, 67, 23, 9, 3], listB: [5, 7] },
  { listA: [8, 3, 45, 67, 23, 9, 3], listB: [5, 45] },
  { listA: [8, 3, 45, 67, 23, 9, 3], listB: [3] },
  { listA: [8, 3, 45, 67, 23, 9, 3], listB: [] }
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  const {listA, listB} = data[i]
  console.log(`${data[i]}:`, main(listA, listB));
}


