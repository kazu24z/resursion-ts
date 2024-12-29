// 実装する関数
export function main(records: number[]): boolean {
  let next = 0;
  let result = false;
  for(let i=0; i<records.length; i++){
      if(next <= records[i]) {
          next = records[i]
      } else{
          result =  true;
          break;
      }
  }
  return result;
}

// 入力データ（問題ごとに修正）
const data = [
  [0, 1 ,2 ,3],
  [4,3,2,1],
  [4,3,3,2,1],
  [150,130,130,82,51],
  [100,200,200,200,300,400],
  [80,80,80,80],
  [80,90,60,70,80],
  [150,140,58,67,1100],
  [1,28,48,85,3],
]

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  main(data[i]);
}

