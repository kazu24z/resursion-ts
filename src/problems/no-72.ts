// 実装する関数
export function main(n:number): number {
  // 素数の求め方
  // 入力値nの√nまでのチェックでOK
  // √n * √n = n これが最大なので
  // やることは素数の倍数を非素数として省いていく作業
  // 2からスタートして2 * i(2*i<nの間)
  // √nまでそれをチェックする

  // 18なら, 2, 3, 5, 7, 11, 13, 17
  // √18 →3√2→4まで繰り返せばOK
  // 2→ 4, 6, 8, 10, 12, 14, 16
  // 3→ 6, 9, 12, 15,
  // 4→スキップ
  
  // 0からnまでの数を持った配列を作成する
  const arr = Array(n).fill(true)
  arr[0] = false;
  arr[1] = false;

  for(let i=2; i<Math.ceil(Math.sqrt(n)); i++) {
    // その回の数で、nを超えるまで繰り返す。
    // →その値は対象外
    if(arr[i]) { // arr[2] = 2 = true
      for(let j = i * i /** 2 * 2の4から */; j <n; j += i /** i=2ずつ増える */) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((item)=>{
    return item === true;
  }).length
}


// n未満に素数が何個あるかを求める

// 入力データ（問題ごとに修正）
// const data=[18]
const data = [2, 3, 5, 13, 18, 89, 97, 100, 367, 673, 1000, 3406, 20034]

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}


