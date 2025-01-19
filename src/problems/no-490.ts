// 実装する関数
export function main(arr: number[]): number[] {
  // 挿入ソートの実装
  
  // 2番目以降のindexに対する処理（iは処理対象のindex）
  for(let i=1; i<arr.length; i++) {
    let sortIndex = i;
    // 整列済み部分に対する比較処理（jはソート済みのindex）
    for(let j=0; j<i; j++){
      if(arr[i] < arr[j]) {
        // もし処理対象がソート済み値より小さい場合、その時点のソート済み値を持つindexが挿入箇所になる
        sortIndex = j;
        // 見つかったら以降の処理は不要
        break;
      }
    }
    // その回の結果を受けてまとめ処理をする
    // ソート済みはi-1のindexまで
    // 今回処理対象の値
    const temp = arr[i];

    // sortIndex + 1から iまでの値を1つずつずらす
    for(let k=i; k>sortIndex; k--) {
      arr[k] = arr[k-1];
    }

    arr[sortIndex] = temp; // その回の値をsortIndexの場所に入れる
  }

  return arr;

}

// メモ
/**
 * 整列済みの配列のどのインデックス番号に入るのか
 * 
 * 整列済みの要素の中から、自分よりでかい値が出てきた時点で、そのindexが挿入先のindexになる
 * →そこに新しいのを入れて、以降を後ろにずらす処理が必要
 * これは、次回分に影響がない
 */

// 入力データ（問題ごとに修正）
const data = [
  [2, 12, 5, 10, 9, 8],
  [1, 5, 3, 4, 3, 1, 6],
  [11, 45, 32, 75, 88, 15, 15]
]

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}

