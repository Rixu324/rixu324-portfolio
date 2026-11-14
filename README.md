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

- `src/portfolio/PortfolioView.tsx`: ページ全体の組み立て。
- `src/portfolio/PageHeader.tsx` / `Hero.tsx` / `Works.tsx` / `About.tsx` / `Contact.tsx`: 各セクションの表示。
- `src/portfolio/ProjectDialog.tsx`: 作品詳細モーダル。
- `src/portfolio/PaletteBot.tsx`: 見出し・作品・モーダルで共用するSVG。
- `src/portfolio/portfolio.css`: 意味の分かるクラス名で管理するスタイルとレスポンシブ・フォーカス表示。
- `src/portfolio/Portfolio.jsx`: 図形の物理アニメーション、スクロール連動、登場演出、モーダルの操作と後片付け。
- `src/portfolio/shapeData.js`: 図形の定義、3種類の配置、PaletteBotへの変形先。
- `src/portfolio/projects.ts` / `projectDetails.ts`: 作品データとモーダル表示用データの生成。
- `src/portfolio/viewTypes.ts`: 表示コンポーネント間で共有する型。
- `public/portfolio/`: 参考デザインのプロフィール・作品画像。

参考のモック独自ランタイム（support.js / DCLogic）には依存しません。モーションはJavaScript、表示コンポーネントと作品データはTypeScriptです。旧ページ、MUI・Emotion・アイコンライブラリ、Tailwindと専用PostCSS設定は削除し、通常のCSSを使用しています。

## 操作

- Heroの背景をクリックすると、図形の構成が切り替わります。
- スクロールすると図形がWork見出しのPaletteBotへ変化します。
- 作品をクリック／タップすると詳細を表示します。
- 詳細は左右ボタンまたは矢印キーで切り替え、閉じるボタン／背景／Escapeで閉じます。
- モーダル内はTabキーで移動でき、閉じると元の作品にフォーカスが戻ります。
- モバイルでは作品を縦に配置します。OSの「動きを減らす」にも対応しています。
- 「動きを減らす」が有効な場合、図形用の継続的なアニメーションループは起動しません。

## 掲載内容の補完箇所

参考デザインにあった文言・リンクを引き継いでいます。PalentiaCraft、あらいぐま杯HP、こんぶHPの説明は参考の「説明は準備中」を維持しています。未指定の作品リンクはボタンを表示しません。XとTwitchは参考側のURLが `#` だったため未掲載です。Google Fontsを使用し、取得できない場合はシステムフォントへフォールバックします。

## 既存サイトとの互換性

- `/about` は `/#about` に転送し、旧 `/#projects` はWorkに移動します。
- Vercel Analytics / Speed Insightsと既存のデプロイ設定を維持しています。

## 検証

`npm run build` と `npm run lint` で検証できます。実行環境のローカル接続制限とブラウザのfile URL制限により、今回の実画面検証は未実施です。PC / モバイル幅での最終目視確認には、開発サーバーを起動してアクセスしてください。
