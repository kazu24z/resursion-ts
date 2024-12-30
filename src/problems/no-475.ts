// 実装する関数
export function main(arr1: number[], arr2: number[], x:number): string {
  let filtered = []  
  for(let i=0; i<arr1.length; i++){
      let buffer = -Infinity;
      for(let j=0; j<arr2.length; j++){
        const sum = arr1[i] + arr2[j];
        if( sum < x && buffer < sum) {
          buffer = sum
        }
      }
      if(buffer !== -Infinity) {
        filtered.push(buffer)
      }
    }

  if(filtered.length === 0) return 'no pair';

  const max = filtered.reduce((acc, currentValue)=>{
    if(acc < currentValue) {
      acc = currentValue;
    }
    return acc
  }, -Infinity)

  // filterdから一番大きな値を返す
  return String(max)

}


  // 
  
  // 入力データ（問題ごとに修正）
  const data = [
    { arr1: [2, 8, 7], arr2: [1, 5, 6], x: 10 },
    { arr1: [12, 8, 20], arr2: [11, 9, 22], x: 30 },
    { arr1: [-4, -2, -5], arr2: [-1, -6, -8], x: -3 },
    { arr1: [583, 114, 925, 669, 402, 7, 84, 747], arr2: [655, 797, 905, 843, 652, 841, 893], x: 260 }
  ];
  
  // 引数なし関数の場合はそのまま実行
  for(let i=0; i<data.length; i++) {
    const {arr1, arr2, x} = data[i]
    console.log(`${data[i]}:`, main(arr1, arr2, x));
  }
