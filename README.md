# heroku-chatbot-counter-backend

## about

herokuを使ったクロスオリジンなSPAのデモ。

- フロントエンドのチャットボットUIからリクエストを送ると、現在のカウンターやセッション情報を返します。
- チャットボットのフロントエンドには [@riversun/chatux](https://github.com/riversun/chatux) を使用させてもらいました。
  - クロスサイト＋セッションに対応させるため、自前でビルドしたものを用意しています。
- バックエンドのデプロイはheroku buttonでかんたんに試せます。

## Usage

### 1. フロントエンドのホストを用意する

HTTPSなフロントエンドのホスティングをどこかに用意してください。おすすめはNetlifyです。サイトを作成したら、URLをメモしておきます。

### 2. Herokuにバックエンドのデプロイ

以下ボタンをクリックしてHerokuにバックエンドをデプロイします。当然ながら要Herokuアカウントです。ボタンをクリックしたあとに出てくるフォームに上記のURLを入力してください。

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

デプロイできたらHerokuのアプリURLをメモしておきます。
### 3. フロントエンドのコンテンツをアップロード

バックエンドができたら、フロントエンドのコンテンツをフロントエンドサイトにアップロードします。public以下にサンプルを用意しました。index.htmlだけ変更が必要です。

```
    endpoint: 'https://example.com/chat', // herokuアプリのURLに変更する
```

上記の```example.com```をHerokuアプリのURLに変更します。```/chat```の部分はそのままにしておいてください。

修正したらフロントエンドのホスティングサイトにimgフォルダと一緒にアップロードして、ブラウザでアクセスしてみてください。

## Thanks

- @riversun/chatux
- いらすとや
