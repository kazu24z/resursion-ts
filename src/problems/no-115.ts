// 実装する関数
export function main(numbers:number[]): number[]{
  // 配列の中に同じ数字が出現 かつ、3つ以上出たら対象外

  // 数字の出現回数を記録したhashMap
  const hashMap: {[key:string]: number} = {}
  for(let i=0; i<numbers.length; i++){
    hashMap[numbers[i]] = (hashMap[numbers[i]]|| 0) + 1;
  }
  // Objectなのでこれを配列として扱うループで、出現回数が2以外は弾く
  const filtered: {[key:string]: number} = {};
  for(const key in hashMap){
    if(hashMap[key]=== 2){
      filtered[key] = hashMap[key]
    }
  }

  return Object.keys(filtered).map((item)=>Number(item)).sort((a, b)=>a-b)
}

// 入力データ（問題ごとに修正）
const data = [
  [10, 12, 13, 14, 15, 16, 16, 7, 7, 8],
  [1, 1],
  [1, 2],
  [1, 2, 3, 4, 5, 6, 6, 7, 7, 8],
  [1, 3, 6, 3, 1, 4, 6, 4],
  [3, 3, -1, -1, 1, 6, 6, 4, 4]
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}


