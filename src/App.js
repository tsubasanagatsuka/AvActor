// React ライブラリ全体をインポート（JSX を使うために必要）
// JSXは <div>や<h1> などのHTMLのような構文を書くためのもの
// Reactの "useState" フック（Hook）だけを個別にインポート
// useState はコンポーネントの中で状態（state）を持ちたいときに使う
// 例：ボタンを押すたびにカウントを増やすような処理で使う
import React, { useState } from 'react';
import './App.css'; // 外部CSSを読み込み

// 作品データ（画像、タイトル、出演者、動画URL、リンクなど）

const products = [
  {
    id: 1,
    imageUrl: "https://pics.dmm.co.jp/digital/video/hmn00673/hmn00673pl.jpg",
    title: "ギリギリおち○こかすめる鼠径部マッサージと五感を刺激する囁き誘惑Gcupセラピストの秘密の裏オプ中出し爆ヌキ20発メンズエステ",
    name: "五日市芽依",
    videoUrl: "https://cc3001.dmm.co.jp/litevideo/freepv/h/hmn/hmn00673/hmn00673mhb.mp4",
    linkUrl: "https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=hmn00673/?i3_ref=list&i3_ord=1&i3_pst=1",
    number: "hmn00673"
  },
  {
    id: 2,
    imageUrl: "https://pics.dmm.co.jp/digital/video/mimk00159/mimk00159pl.jpg",
    title: "アタシがヌいてあげよっか？-実写版- 原作:暗中模索 即10，000部突破の快作！ ",
    name: "五日市芽依",
    videoUrl: "https://cc3001.dmm.co.jp/litevideo/freepv/m/mim/mimk00159/mimk00159mhb.mp4",
    linkUrl: "https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=mimk00159/",
    number: "mimk00159"
  },
  {
    id: 3,
    imageUrl: "https://pics.dmm.co.jp/digital/video/royd00174/royd00174pl.jpg",
    title: "王様ゲームで急接近した隠れ淫乱な地味巨乳と、一泊二日のラブラブ中出しセックス。",
    name: "五日市芽依",
    videoUrl: "https://cc3001.dmm.co.jp/litevideo/freepv/r/roy/royd00174/royd00174mhb.mp4",
    linkUrl: "https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=royd00174/?i3_ref=list&i3_ord=3&i3_pst=1",
    number: "royd00174"
  },
  {
    id: 4,
    imageUrl: "https://pics.dmm.co.jp/digital/video/hmn00656/hmn00656pl.jpg",
    title: "昔からの気軽に話せる女友達が会社では上司からも部下からも仕事ができる女だと思われていて、たまには弱さをみせたいのにと愚痴をこぼすので、 居酒屋とバッティングセンターデートに付き合ったら、なんか盛り上がっちゃって終電逃してラブホにお泊り 明日の朝… ",
    name: "五日市芽依",
    videoUrl: "https://cc3001.dmm.co.jp/litevideo/freepv/h/hmn/hmn00656/hmn00656mhb.mp4",
    linkUrl: "https://cc3001.dmm.co.jp/litevideo/freepv/h/hmn/hmn00656/hmn00656mhb.mp4",
    number: "hmn00656"
  },
  {
    id: 5,
    imageUrl: "https://pics.dmm.co.jp/digital/video/dass00604/dass00604pl.jpg",
    title: "ハメタイ時に即ヤる女！毎分毎秒むム～んと欲情！ジュっぽし鬼スケベぇ接客。ぶりゅるザー汁を何度も何度も生ナカで絞り出す高級枕営業スナック",
    name: "五日市芽依",
    videoUrl: "https://cc3001.dmm.co.jp/litevideo/freepv/d/das/dass00604/dass00604mhb.mp4",
    linkUrl: "https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=dass00604/?i3_ref=list&i3_ord=5&i3_pst=1",
    number: "dass00604"
  },
  {
    id: 6,
    imageUrl: "https://pics.dmm.co.jp/digital/video/mimk00159/mimk00159pl.jpg",
    title: "鬼畜デカマラ親父の媚薬キメセクにアクメ漬けにされてしまった美人家庭教師 絶叫！痙攣！汗だく失禁！ボクが勉強している隣室で親父に何度も何度もイカされ中出しされ続け壊れてしまった大好きな先生",
    name: "五日市芽依",
    videoUrl: "https://cc3001.dmm.co.jp/litevideo/freepv/m/mvs/mvsd00578/mvsd00578mhb.mp4",
    linkUrl: "https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=mvsd00578/?i3_ref=list&i3_ord=6&i3_pst=1",
    number: "mvsd00578"
  },
  {
    id: 7,
    imageUrl: "https://pics.dmm.co.jp/digital/video/hmn00712/hmn00712pl.jpg",
    title: "秘密捜査官VS媚薬ストップマン 止まった時の中で媚薬性感開発、時間停止解除で訪れる感度300倍の蓄積快楽・23発中出しに堕ちるメイ",
    name: "五日市芽依",
    videoUrl: "https://cc3001.dmm.co.jp/litevideo/freepv/h/hmn/hmn00712/hmn00712mhb.mp4",
    linkUrl: "https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=hmn00712/?i3_ref=list&i3_ord=12&i3_pst=1",
    number: "hmn00712"
  },
  {
    id: 8,
    imageUrl: "https://pics.dmm.co.jp/digital/video/madv00556/madv00556pl.jpg",
    title: "【4K】兄の巨根を溺愛！無防備が過ぎる妹の過激誘惑！全裸よりSKBな透明バニー痴女のベロキス杭打ち騎乗位 ",
    name: "五日市芽依",
    videoUrl: "https://cc3001.dmm.co.jp/litevideo/freepv/m/mad/madv556/madv556mhb.mp4",
    linkUrl: "https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=madv00556/?i3_ref=list&i3_ord=16&i3_pst=1",
    number: "madv00556"
  },
  {
    id: 9,
    imageUrl: "https://pics.dmm.co.jp/digital/video/ekdv00734/ekdv00734pl.jpg",
    title: "【4K】単身赴任先は田舎町… 隣に住む性欲過多なバツイチ美女の極上ボディに惑わされボクは何度も中出ししまくった…",
    name: "五日市芽依",
    videoUrl: "https://cc3001.dmm.co.jp/litevideo/freepv/e/ekd/ekdv00734/ekdv00734mhb.mp4",
    linkUrl: "https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=ekdv00734/?i3_ref=list&i3_ord=17&i3_pst=1",
    number: "ekdv00734"
  },
  {
    id: 10,
    imageUrl: "https://pics.dmm.co.jp/digital/video/royd00181/royd00181pl.jpg",
    title: "毎日泊まりに来る彼氏持ちの女友達から無自覚に誘惑され、勇気を出せず生殺し状態になった僕 ",
    name: "五日市芽依",
    videoUrl: "https://cc3001.dmm.co.jp/litevideo/freepv/r/roy/royd00181/royd00181mhb.mp4",
    linkUrl: "https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=royd00181/?i3_ref=list&i3_ord=38&i3_pst=1",
    number: "royd00181"
  },
  // 他の商品も同様に
];

// Reactコンポーネントの定義
export default function App() {
  // 動画の再生状態を保持するState（各作品のidに対応）
  const [playingVideos, setPlayingVideos] = useState({});

  // マウスが画像に乗った時に動画を再生する（trueにする）
  const handleMouseEnter = (id) => {
    setPlayingVideos(prev => ({ ...prev, [id]: true }));
  };

  // マウスが離れた時に動画を停止（falseにする）
  const handleMouseLeave = (id) => {
    setPlayingVideos(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div className="product-container"> {/* 全体を囲むコンテナ */}
      {/* ヘッダー開始 */}
      <header className="header">
        <img src="/title_logo.png" alt="AVpedia ロゴ" className="logo" />
      </header>
      <nav className="nav-bar">
        <a className="nav-link" href="/">動画トップ</a>
        <a className="nav-link" href="#genre">ジャンル</a>
        <a className="nav-link" href="#actress">女優</a>
        <a className="nav-link" href="https://www.dmm.co.jp/digital/videoa/-/list/=/sort=ranking/" target="_blank" rel="noopener noreferrer">FANZA</a>
      </nav>
      <h1>本日の更新</h1>

      <div className="product-grid"> {/* グリッド表示（3列） */}
        {products.map(product => (
          <div 
            className="product-card" 
            key={product.id}
            onMouseEnter={() => handleMouseEnter(product.id)} // ホバー時：動画再生
            onMouseLeave={() => handleMouseLeave(product.id)} // 離脱時：動画停止
          >
            <a href={product.linkUrl} target="_blank" rel="noopener noreferrer">
              {/* ホバー中 & 動画がある → videoを表示 */}
              {playingVideos[product.id] && product.videoUrl ? (
                <video 
                  src={product.videoUrl}
                  className="media"
                  autoPlay   // 自動再生
                  muted      // ミュート
                  loop       // ループ再生
                  width="100%"
                  height="auto"
                />
              ) : (
                // ホバーしてない場合は画像を表示
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="media" 
                />
              )}
            </a>

            {/* タイトルや出演者情報など */}
            <h2>{product.title}</h2>
            <h3>出演者：{product.name}</h3>
            <h4>品番：{product.number}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}