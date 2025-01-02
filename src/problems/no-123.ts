export function main(levels: number[]): number[] {
  // 出現回数を持ったハッシュテーブルを作成する
  const hashMap: {[key: number]: number}= {};
  for(let i=0; i<levels.length; i++){
    if(hashMap[levels[i]] !== undefined) hashMap[levels[i]] += 1;
    else hashMap[levels[i]] = 1;
  }

  // 回数が一番大きいものを入れた配列を生成する
  // 1. 一番大きい値を特定する
  const maxValue = Object.values(hashMap).reduce((acc, currentValue)=>{
    return acc < currentValue ? currentValue : acc;
  }, -Infinity)
  // 2. 1.の値を他に持っているかチェックする

  const result = Object.entries(hashMap).filter(([key, value])=>{ // ["3": 5], ["5": 5]
    return value === maxValue
  }).map((item)=>Number(item[0]))

  return result
}

// 入力データ（問題ごとに修正）
const data = [
  [1, 1, 2, 2, 3, 3, 3, 4, 5, 6],
  [12, 10, 9, 8, 6, 3, 8, 9, 9, 10],
  [1, 1, 1, 3, 3, 3, 2, 2, 2, 5],
  [1, 2],
  [100],
  [1, 22, 48, 500, 3000, 10000, 30, 30, 30]
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}


