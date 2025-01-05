// 実装する関数
export function main(user1:string, user2:string): boolean{
  // user1, user2それぞれの並び方を[0, 0, 1, 2, 2,]のようにする
  // 文字が変わったらパターン数字を+1していく

  const user1Pattern = createPattern(user1)
  const user2Pattern = createPattern(user2)

    // 長さが異なる場合は即座に false を返す
    if (user1Pattern.length !== user2Pattern.length) {
      return false;
    }
  
  for(let i=0; i<user1Pattern.length; i++){
    if(user1Pattern[i] !== user2Pattern[i]){
      return false;
    }
  }

  return true;
}

function createPattern(input: string): number[] {
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
  { user1: "aabb", user2: "yyza" },
  { user1: "aappl", user2: "bbtte" },
  { user1: "aappl", user2: "bbttb" },
  { user1: "aabb", user2: "abab" },
  { user1: "aappl", user2: "bktte" },
  { user1: "aaapppl", user2: "bbbttke" },
  { user1: "abcd", user2: "tso" },
  { user1: "abcd", user2: "jklm" },
  { user1: "aaabbccdddaa", user2: "jjjddkkpppjj" },
  { user1: "aaabbccdddaa", user2: "jjjddkkpppjd" }
]

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  const {user1, user2} = data[i]
  console.log(`${data[i]}:`, main(user1, user2));
}


