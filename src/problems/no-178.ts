import { hash } from "crypto";

// 実装する関数
export function main(intList1:number[], intList2:number[]): number[] {
  // list1, list2で重複しているものを単純に検索する
  const hash1: {[key:number]: number} = {}
  for(let i=0; i<intList1.length; i++){
    if(hash1[intList1[i]] === undefined) hash1[intList1[i]] = 1;
    else {
      hash1[intList1[i]] +=1;
    }
  }

  // FIXIME: ここ、hash1のvalue側をデクリメントすればよかったのか
  /**
   * hash1は
   * {"8": 1, "2": 3}
   * のように、出現回数を入れているので、↓のループの中で出現するたびに減算していけばオーバすることはない
   */
  const result: number[] = [];
  for(let i=0; i<intList2.length; i++){
    if(hash1[intList2[i]] !== undefined && result.filter((item)=>item === intList2[i]).length < hash1[intList2[i]]){
      result.push(intList2[i])
    }
  }
  
  return result.sort((a,b)=>a-b)
}

// 入力データ（問題ごとに修正）
const data =   [
    { intList1: [3, 2, 1], intList2: [3, 2, 1] },
    { intList1: [1, 1, 1], intList2: [1, 2, 3, 2, 1] },
    { intList1: [3, 2, 2, 2, 1, 10, 10], intList2: [3, 2, 10, 10, 10] },
    { intList1: [2, 19, 11, 2, 6, 8], intList2: [10, 23, 5, 8, 19] },
    { intList1: [4, 22, 100, 88, 6, 8], intList2: [1, 2, 3] },
    { intList1: [-1, -2, -1, -1], intList2: [-1, -1, -2, -2] },
    { intList1: [1, 2, 2, 1], intList2: [2, 2, 2, 1] },
    { intList1: [4, 9, 5], intList2: [9, 4, 9, 8, 4] }
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  const {intList1, intList2} = data[i]
  console.log(`${data[i]}:`, main(intList1, intList2));
}


