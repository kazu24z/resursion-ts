// 実装する関数
export function main(s:string): number{
  
  // 出現回数を持ったhashMap
  const hashMap: {[key: string]: number} ={};
  for(let i=0; i<s.length; i++){
    hashMap[s[i]] = (hashMap[s[i]]||0) + 1;
  }

  for(let i=0; i<s.length; i++){
    if(hashMap[s[i]] === 1) {
      return i
    }
  }

  return -1
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


