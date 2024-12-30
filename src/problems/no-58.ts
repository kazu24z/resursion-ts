// 実装する関数
// TODO: 要復習
export function main(n: number): number {
  if (n < 2) return 0; // 2未満の場合、素数は存在しない

  // 配列をtrueで初期化
  const cache = Array(n + 1).fill(true);
  cache[0] = cache[1] = false; // 0と1は素数ではない

  // エラトステネスの篩を適用
  for (let currentPrime = 2; currentPrime <= Math.sqrt(n); currentPrime++) {
      if (cache[currentPrime]) {
          for (let ip = currentPrime * currentPrime; ip <= n; ip += currentPrime) {
              cache[ip] = false;
          }
      }
  }

  // 素数の合計を計算
  return cache.reduce((sum, isPrime, index) => isPrime ? sum + index : sum, 0);
}

// 入力データ（問題ごとに修正）
const data = [1, 2, 3, 100, 1000]

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}


// 素数を検出
// 検出した素数を足す

// 素数の検出
// 初期値2としてその倍数はfalseにする
// 同様に3, 4(は2でやった), 5, 6(は2でやった)...√nまで実施する
