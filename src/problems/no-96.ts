// 実装する関数
export function main(message: string): string[] {
  const noSpaceMessage = message.replace(/ /g, "")

  const hashMap: {[key: string]: number} = {}
  for(let i=0; i<noSpaceMessage.length; i++) {
    if(hashMap[noSpaceMessage[i]] === undefined) hashMap[noSpaceMessage[i]] = 1;
    else hashMap[noSpaceMessage[i]] += 1
  }

  const sortedKeys = Object.keys(hashMap).sort()
  const sortedHashMap: {[key: string]: number} = {}
  // これしなくてもよかったな
  // 先に文字列変換して、"z : 4", "b : 2" ... にしたら、それをsortできた
  sortedKeys.forEach(key=>{
    sortedHashMap[key] = hashMap[key]
  })

  const result: string[]= []
  Object.entries(sortedHashMap).forEach(([key, value])=>{
    result.push(`${key}:${value}`)
  })

  return result 
}

// a~zの順番で並べる, それぞれの出現回数を返す

// 入力データ（問題ごとに修正）
const data = [
  "sssss",
  "i love you",
  "the future belongs to those who believe in the beauty of their dreams",
  "it is during our darkest moments that we must focus to see the light",
  "do not go where the path may lead go instead where there is no path and leave a trail",
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}


