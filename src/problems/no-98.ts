// 実装する関数
export function main(height: number[]): boolean {
  if(height.length < 3) {
    return false;
  }

  let up = true;
  let down = false;

  let currentNum = 0;
  let counter = 0;
  // 上昇の表現
  for(let i=0; i<height.length; i++) {
    if(currentNum < height[i]) {
      currentNum = height[i];
      counter++;
    } else {
      up = false;
      down = true;
      break;
    }
  }

  // この時点でチェック
  // 上昇仕切った場合、一度も上昇しなかった場合、false
  if(counter === 1 || up===true && down===false){
    return false;
  }

  for(let i=counter; i<height.length; i++){
    if(currentNum > height[i]) {
      currentNum = height[i];
      counter++;
    }else {
      // この時点で最後まで突き抜けなかった場合はfalseをreturn
      return false;
    }
  }

  return true;
}

// 配列のサイズが 3 以上であること
// 高さは初めは上がり続け、一度下がったら下がり続けること（例：1,2,3,4,5,3,2,1）


// 入力データ（問題ごとに修正）
const data = [
  // [1, 2, 3, 2], 
  // [1, 2], 
  // [2, 1], 
  // [1, 2, 2, 2, 2], 
  // [1, 2, 3], 
  // [4, 3, 2, 1], 
  // [1, 2, 2, 2, 3, 2], 
  // [3, 2, 2, 2, 1, 1], 
  // [10, 20, 30, 400, 500, 10], 
  [100, 200, 100, 400, 500, 100], 
  [100, 200, 300, 200, 100, 300], 
  // [100, 50, 100, 200, 300, 400], 
  // [53, 158, 477, 994, 994, 867, 797, 755, 744, 621, 616]
];

// 引数なし関数の場合はそのまま実行
for(let i=0; i<data.length; i++) {
  console.log(`${data[i]}:`, main(data[i]));
}

