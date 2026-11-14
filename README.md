# Rixu / りゅま Portfolio

React + Vite のポートフォリオサイトです。提供された `UI mockups for portfolio site/Portfolio.dc.html`（v2 / 幾何学コンポジション）を移植しています。

## 開発

```sh
npm install
npm run dev
```

```sh
npm run build
npm run lint
npm run preview
```

## 主なファイル

- `src/portfolio/PortfolioView.jsx`: Hero、作品ギャラリー、About、Contact、作品詳細モーダル。
- `src/portfolio/portfolio.css`: 参考デザインのスタイルとレスポンシブ・フォーカス表示。
- `src/portfolio/Portfolio.jsx`: 図形の物理アニメーション、スクロール連動、登場演出、モーダルの操作。
- `src/portfolio/projects.ts`: 作品の説明、担当範囲、使用技術、外部リンク。
- `src/portfolio/AdditionalContent.tsx`: 既存作品の追加一覧と支援中の配信者紹介。
- `public/portfolio/`: 参考デザインのプロフィール・作品画像。

参考のモック独自ランタイム（support.js / DCLogic）には依存しません。モーションのJavaScriptをReactのライフサイクルへ移植し、既存のTypeScriptコードと共存しています。追加のランタイム依存はありません。

## 操作

- Heroの背景をクリックすると、図形の構成が切り替わります。
- スクロールすると図形がWork見出しのPaletteBotへ変化します。
- 作品をクリック／タップすると詳細を表示します。
- 詳細は左右ボタンまたは矢印キーで切り替え、閉じるボタン／背景／Escapeで閉じます。
- モーダル内はTabキーで移動でき、閉じると元の作品にフォーカスが戻ります。
- モバイルでは作品を縦に配置します。OSの「動きを減らす」にも対応しています。

## 掲載内容の補完箇所

参考デザインにあった文言・リンクを引き継いでいます。PalentiaCraft、あらいぐま杯HP、こんぶHPの説明は参考の「説明は準備中」を維持しています。未指定の作品リンクはボタンを表示しません。XとTwitchは参考側のURLが `#` だったため未掲載です。Google Fontsを使用し、取得できない場合はシステムフォントへフォールバックします。

## 既存サイトとの互換性

- AquaBeatsと既存ポートフォリオ作品はMore worksから引き続き参照できます。
- 既存Aboutの配信者3名のTwitch / Xリンクと開発スキルを移植しています。
- `/about` は `/#about` に転送し、旧 `/#projects` はWorkに移動します。
- Vercel Analytics / Speed Insightsと既存のデプロイ設定を維持しています。

## 検証

`npm run build` と `npm run lint` で検証できます。実行環境のローカル接続制限とブラウザのfile URL制限により、今回の実画面検証は未実施です。PC / モバイル幅での最終目視確認には、開発サーバーを起動してアクセスしてください。
