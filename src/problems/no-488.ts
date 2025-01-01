// 実装する関数
export function main(nums:number[]): number {
    let hashmap: {[key: number]: number} = {};
    let minIndex = -1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (hashmap[nums[i]] !== undefined) minIndex = i;
        else hashmap[nums[i]] = 1;
    }

    if (minIndex !== -1) return nums[minIndex];
    else return minIndex;
}
// export function main(nums:number[]): number {
//   // hashMap
//   const hashMap: {[key:number]: number} = {}

//   // これで重複した値をカウント表に変換
//   for(let i=0; i<nums.length; i++) {
//     if(hashMap[nums[i]] === undefined) {
//       hashMap[nums[i]] = 1;
//     } else {
//       hashMap[nums[i]] = hashMap[nums[i]] + 1;
//     }
//   }

//   let keys = Object.keys(hashMap);
//   // console.log(hashMap)
//   let result = -Infinity;
//   for(let i=0; i<keys.length; i++){
//     if(hashMap[Number(keys[i])] > 1) {
//       result = Number(keys[i])
//       break; 
//     }
//   }
//   console.log(result === -Infinity ? -1 : result)
//   return result === -Infinity ? -1 : result;

// }

// 複数回出現する要素の中からインデックス最小となる要素を返す
// 1. 複数回出現する要素の配列
// 2. 1.から[0]の値を返す

// 入力データ（問題ごとに修正）
const data = [
  // [2, 12, 5, 10, 9, 8] ,
  // [1, 5, 3, 4, 3, 1, 6] ,
  [11, 45, 32, 75, 88, 15, 15],
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}


