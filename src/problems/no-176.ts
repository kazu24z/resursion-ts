const HonorCardRank: { [key: string]: string } = {
  "J": "11",
  "Q": "12",
  "K": "13",
  "A": "14",
}

export function main(player1:string[], player2:string[]): string{
  // 入力 ["♣4", "♥7", "♥7", "♠Q", "♣J"]
  // 下準備編
  // 柄は邪魔で、数字とその重複枚数の組み合わせが必要
  // 文字カード（J, Q, K, A）は初手で数値化しておく

  // 入力配列を1つずつ処理して絵柄を排除
  // 絵柄文字を数字化
  const player1Cards = convertToCardPower(player1) // [4, 4, 7, 7, 7]
  const player2Cards = convertToCardPower(player2) // [4, 4, 7, 7, 7]

  const player1CardPairMap = createCardPairMap(player1Cards)
  const player2CardPairMap = createCardPairMap(player2Cards) // {"4": 2, "7": 3, "14": 1}

  return comparePlayerCard(player1CardPairMap, player2CardPairMap)

  // 以下再帰処理
  // 1. 同じカード枚数を比較

  // 2. カード枚数が同じ場合、カードの強さを比較

  // 3. 1, 2で決着がつかない場合、次のカードを引いて再帰処理

  // 4. 3で決着がつかない場合、引き分け
}

function convertToCardPower(player: string[]) {
  const convertedArr:  string[] = []
  for(let i=0; i<player.length; i++) {
    convertedArr.push(player[i].slice(1))
    convertedArr[i] = HonorCardRank[convertedArr[i]] || convertedArr[i]
  }

  const result = convertedArr.map((item)=>{
    return Number(item)
  })

  return result
}

function createCardPairMap(playerCard: number[]): {[key: string]: number} {
  const hash: {[key: string]:number} = {}
  for(let i=0; i<playerCard.length; i++) {
    hash[playerCard[i]] = hash[playerCard[i]] ? hash[playerCard[i]] + 1 : 1
  }
  
  return hash
}

function comparePlayerCard(player1: {[key: string]: number}, player2: {[key: string]: number}): string {
  // ベースケース
  if(Object.keys(player1).length === 0) return 'draw'

  // 1. 重複枚数が一番多いペアを取得する
  const player1StrongestPair = getStrongestPair(player1) // player1: {"7": 3, "4": 2}
  const player2StrongestPair = getStrongestPair(player2) // {"key": 7, "value": 3} 

  // 2. 1.で取得したペアの枚数を比較する
  if(player1StrongestPair.value > player2StrongestPair.value) {
    return 'player1'
  } else if (player1StrongestPair.value < player2StrongestPair.value) {
    return 'player2'
  } else {
    // 3. 2で枚数が同じ場合、カードの強さを比較する
    if(player1StrongestPair.card > player2StrongestPair.card) {
      return 'player1'
    } else if (player1StrongestPair.card < player2StrongestPair.card) {
      return 'player2'
    } else {
      // 4. 3で決着がつかない場合、今回カードを削除して再帰処理
      // TODO: ここで使用したペアを削除する処理
      delete player1[player1StrongestPair.card]
      delete player2[player2StrongestPair.card]
    }

  return comparePlayerCard(player1, player2)
  }
}

/**
 * 手札の中で最も枚数の多いカードとその枚数を返す
 * @param cardPairMap 
 * @returns 
 */
function getStrongestPair(cardPairMap: {[key: string]: number}): {"card": number, "value": number} {
  // 最大の枚数を特定する
  const maxNum = Math.max(...Object.values(cardPairMap))
  
  // その中から最も強いカードを特定する
  // valueがmaxValueのkeyを取得する
  const maxKeys = Object.keys(cardPairMap).filter((key)=>{
    return cardPairMap[key] === maxNum
  }) // ["14", "7", "5"]

  // maxKeysの中で最も強いカードを特定する
  let maxkeyNum = -Infinity
  maxKeys.reduce((acc, cur)=>{
    if(Number(cur) > acc) {
      maxkeyNum = Number(cur)
    }
    return maxkeyNum
  }, -Infinity)

  return {"card": maxkeyNum, "value": maxNum}
}

// 勝利条件1: 同じカードを持っている枚数が多いほうが勝ち（ex: A：2を4枚 vs B：Kを3枚 → Aの勝ち）
// 勝利条件2: 同じ枚数ずつダブっていた場合、強いカードの方が勝ち（ex: A：2を4枚 vs B：10を4枚 → Bの勝ち）
// 勝利条件3: 同じ枚数かつ同じ強さだったとき、時点で多い枚数の、強いカード同士で勝負（ex: A, Bともに7を2枚→次にA: 4を1枚, B: 10を1枚→ Bの勝ち） これを繰り返す
// 引き分け : 上記でも決着がつかない場合
// カードの強さ 2が最弱、J < Q < K < A

// 入力データ（問題ごとに修正）
const data = [
  { player1: ["♣4", "♥7", "♥7", "♠Q", "♣J"], player2: ["♥10", "♥6", "♣K", "♠Q", "♦2"] },
  { player1: ["♣4", "♥7", "♥7", "♠Q", "♣J"], player2: ["♥7", "♥7", "♣K", "♠Q", "♦2"] },
  { player1: ["♣A", "♥2", "♥3", "♠4", "♣5"], player2: ["♥A", "♥2", "♣3", "♠4", "♦5"] },
  { player1: ["♣A", "♥A", "♥A", "♠4", "♣5"], player2: ["♥A", "♥A", "♣A", "♠4", "♦5"] },
  { player1: ["♣9", "♥8", "♥7", "♠4", "♣5"], player2: ["♥10", "♥8", "♣7", "♠4", "♦5"] },
  { player1: ["♣A", "♥A", "♥2", "♠3", "♣4"], player2: ["♥6", "♥6", "♣Q", "♠Q", "♦8"] },
  { player1: ["♣A", "♥A", "♥A", "♠3", "♣4"], player2: ["♥6", "♥6", "♣Q", "♠Q", "♦Q"] },
  { player1: ["♣K", "♥K", "♥K", "♠A", "♣A"], player2: ["♥6", "♥6", "♣Q", "♠Q", "♦Q"] },
  { player1: ["♣6", "♠3", "♠J", "♦2", "♥3"], player2: ["♠8", "♥2", "♦8", "♥9", "♦J"] },
  { player1: ["♥3", "♠9", "♦3", "♣Q", "♦A"], player2: ["♥4", "♥3", "♠10", "♦3", "♥4"] },
  { player1: ["♥3", "♠9", "♦3", "♣Q", "♦3"], player2: ["♥4", "♥A", "♠10", "♦A", "♥4"] },
  { player1: ["♣K", "♥8", "♥K", "♠K", "♣A"], player2: ["♥K", "♥4", "♣K", "♠4", "♦K"] },
  { player1: ["♥9", "♠8", "♦7", "♣6", "♦5"], player2: ["♥9", "♥8", "♠7", "♦6", "♥4"] },
  { player1: ["♥3", "♠4", "♦5", "♣6", "♦7"], player2: ["♥2", "♥3", "♠5", "♦6", "♥7"] },
  { player1: ["♥K", "♠4", "♦K", "♣6", "♦6"], player2: ["♥6", "♥K", "♠K", "♦6", "♥7"] },
  { player1: ["♥2", "♠2", "♦2", "♣2", "♦6"], player2: ["♥2", "♥2", "♠2", "♦2", "♥7"] },
  { player1: ["♥2", "♠2", "♦2", "♣2", "♦6", "♠3", "♦3", "♣4", "♦6"], player2: ["♥2", "♥2", "♠2", "♦3", "♥7", "♠2", "♦3", "♣6", "♦6"] },
  { player1: ["♥2", "♠2", "♦2", "♣2", "♦6", "♠3", "♦3", "♣4", "♦3"], player2: ["♥2", "♥2", "♠2", "♦3", "♥7", "♠2", "♦3", "♣6", "♦6"] },
  { player1: ["♥2", "♠2", "♦6"], player2: ["♥2", "♥2", "♥3"] },
  { player1: ["♥2", "♠A", "♦6"], player2: ["♥2", "♥2", "♥3"] }
]

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
    const {player1, player2} = data[i]
    console.log(`${data[i]}:`, main(player1, player2));
  }
