// 実装する関数
export function main(inputChar:string, wordList:string): boolean {
  // まず初めに、inputCharの文字数とwordListの単語数が違っていたらその時点でfalse
  const wordArr = wordList.split(" ")
  if(inputChar.length !== wordArr.length){
    return false;
  }

  // これで以降は入力文字数と、wordList単語数が同じ前提で処理できる
  const inputPattern = createHashMap(inputChar)
  const wordPattern = createHashMap(wordArr)

  // 比較
  for(let i=0; i<inputPattern.length; i++) {
    if(inputPattern[i] !== wordPattern[i]) {
      return false
    }
  }

  return true
}

function createHashMap(input: string[] | string): number[] {
  const hashMap: {[key: string]: number} = {}
  const pattern: number[] = []
  let counter = 0;
  for(let i=0; i<input.length; i++){
    if(hashMap[input[i]] === undefined){ 
      hashMap[input[i]] = counter;
      counter++
    }
    pattern.push(hashMap[input[i]])
  }

  return pattern
}

// 入力データ（問題ごとに修正）
const data = [
  { inputChar: "abc", wordList: "hello world" },
  { inputChar: "tut", wordList: "hot mild cold" },
  { inputChar: "tut", wordList: "hot mild mild" },
  { inputChar: "aabac", wordList: "word word dictionary word word" },
  { inputChar: "aabac", wordList: "word word dictionary word string" },
  { inputChar: "abcabc", wordList: "soccer baseball tennis soccer baseball tennis" },
  { inputChar: "zabccabcz", wordList: "book comic phone music music comic phone music book" },
  { inputChar: "zzz", wordList: "math math math" }
]

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  const {inputChar, wordList} = data[i]
  console.log(`${data[i]}:`, main(inputChar, wordList));
}


