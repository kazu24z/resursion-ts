## 目的

recursionの問題を解くときに手元の環境で実行できるようにする。

### setup
前提：yarnを入れておく

```
yarn install
```

## コマンドライン実行


```
cd src/problems

yarn e <file_name.ts> arg1 arg2 ...argN
```

※ファイル名が重複した場合はエラーがでます。1つ上のディレクトリも含めると実行できます。
```
- src
  - problems
    - sub1
        test.ts
    test.ts
```

```
例1：/src/problems/sub1/test.tsを実行したい
→ yarn e /sub1/test.ts

例2：/src/problems/test.tsを実行したい
→ yarn e /test.ts  

いずれも頭に/を忘れないように
```

## デバッグ
コマンドライン実行時にブレークポイントを使って処理を確認できます。

※vscode前提です

### 手順
1. デバッグ用の実行コマンドを打つ
2. デバッガ実行のサイドバーから「Attach to Node」を選択して開始
3. 実行tsファイルの先頭行で止まるので自由にブレークポイントを設定してデバッグ

## 免責事項
- ファイル名重複についてテストしてません。重複させまくったらうまくいかないケースもあるかもです。
- vscode以外だとデバッグがうまくいかないかもです。
