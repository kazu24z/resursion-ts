// 実装する関数
export function main(s:string): number{
  
  // 出現回数を持ったhashMap
  const hashMap: {[key: string]: number} ={};
  for(let i=0; i<s.length; i++){
    hashMap[s[i]] = (hashMap[s[i]]||0) + 1;
  }

  // key: valueでvalueが1の文字を抽出
  // {"a": 1, "b": 2}
  // [[key, value], [key, value]]
  const temp = Object.fromEntries(
    Object.entries(hashMap).filter(([key, value])=>{
      return value === 1
    })
  )

  const targetCandidates = Object.keys(temp) // ["c", "e", "g"]

  console.log(targetCandidates.length)
  if(targetCandidates.length === 0) return -1

  // sの中からtargetCandidatesのインデックスを取得する
  const targetIndex:number[] = [] // [1, 2, 4]
  for(let i=0; i<targetCandidates.length; i++){
    targetIndex.push(s.indexOf(targetCandidates[i]))
  }

  return Math.min(...targetIndex)
}

// 入力データ（問題ごとに修正）
const data =  [
  "aabbcdddeffg",
  "abcdabcdf",
  "abcddaebcdf",
  "aabbbccdd",
  "ddecdfgf",
  "abcdeeff",
  "zzcbdefghafhgbbcd"
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}


