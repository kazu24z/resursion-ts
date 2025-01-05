// 実装する関数
export function main(teams:string): boolean{
  // 要は出現回数が全部同じならOK
  const hash: {[key: string]: number} = {};
  for(let i=0; i<teams.length; i++){
    if(hash[teams[i]]===undefined) {
      hash[teams[i]] = 1;
    } else {
      hash[teams[i]] += 1;
    }
  }
  
  if(Object.keys(hash).length === 1) return true;

  // 出現回数が違っていたらfalse, そうでないならtrue
  const arr = Object.values(hash)

  return arr.every(value=>value === arr[0]);
}

// 入力データ（問題ごとに修正）
const data = [
  "bacddc",
  "babcddc",
  "babacddc",
  "aaabbbcccddd",
  "aaabbccdd",
  "zadbchvwxbwhdxvcza",
  "zadbchvwxbwhdxvczb",
  "zab",
  "z"
];
// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}


