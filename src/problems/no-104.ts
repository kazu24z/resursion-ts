// 実装する関数
export function main(string: string): boolean {
  // アルファベットをutf-16に変換した配列
  let alphabet: number[] = []
  for(let i = 'a'.charCodeAt(0); i<='z'.charCodeAt(0); i++) {
    alphabet.push(i) // 97, 98 ....122
  }

  let cache: number[] = []

  const trimmedSpace = string.replace(/ /g, "").toLowerCase() // スペース除去
  for(let i=0; i<trimmedSpace.length; i++) {
    if(!cache.includes(trimmedSpace[i].charCodeAt(0))) {
      cache.push(trimmedSpace[i].charCodeAt(0)) // その文字の番号
    }
  }
  cache.sort((a,b)=>a -b)

  // alphabetとcacheの比較
  return JSON.stringify(alphabet) === JSON.stringify(cache) ? true : false;
}

// 1. アルファベットのリスト
// 2. Cache（入れ物）
// 3. 入力文字列に対してチェックを実行
  // 入力文字列を配列として、チェックした文字に該当するリストは存在trueにする

// 入力データ（問題ごとに修正）
const data = [
  "we promptly judged antique ivory buckles for the next prize",
  "We promptly judged Antique ivory buckles for the next prize",
  "a quick brown fox jumps over the lazy dog",
  "sphinx of black quartz judge my vow",
  "the five boxing wizards jump quickly",
  "sheep for a unique zebra when quick red vixens jump over the yacht",
  "the Japanese yen for commerce is still well-known",
  "dan took the deep dive down the rabbit hole"
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}


