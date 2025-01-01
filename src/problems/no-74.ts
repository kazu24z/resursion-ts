// 実装する関数
export function main(arr:number[], shuffledArr:number[]): number {
    // ハッシュマップを作成します。
    let hashmap:{[index:number]:number}  = {};
    // shuffledArrの要素とインデックスをハッシュマップに保存します。
    for (let i = 0; i < shuffledArr.length; i++) {
        hashmap[shuffledArr[i]] = i;
    }

    let count = 0;
    // ハッシュマップの中からarr[i]を探し、その値と現在のインデックスiを比較します。
    for (let i = 0; i < arr.length; i++) {
        // 位置が変わっていたらcountに1足します。
        if (hashmap[arr[i]] != i) count++; 
    }

    // 変更した割合を％にして小数点以下は切り捨てます。
    return Math.floor(100 * count / arr.length);

}

// 入力データ（問題ごとに修正）
const data = [
  { arr: [2, 32, 45], shuffledArr: [45, 32, 2] },
  { arr: [2, 32, 45], shuffledArr: [45, 2, 32] },
  { arr: [2, 32, 45], shuffledArr: [2, 32, 45] },
  { arr: [2, 32, 45, 67], shuffledArr: [2, 32, 67, 45] },
  { arr: [2, 32, 45, 67, 89], shuffledArr: [2, 89, 67, 45, 32] },
  { 
      arr: [119, 726, 398, 187, 943, 486, 728, 305, 968, 754, 650, 536, 969, 305, 111, 225, 708, 806, 40, 969], 
      shuffledArr: [708, 969, 111, 398, 754, 726, 536, 943, 486, 305, 969, 40, 650, 806, 187, 225, 968, 119, 728, 305] 
  }
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  const {arr, shuffledArr} = data[i]
  console.log(`${data[i]}:`, main(arr, shuffledArr));
}


