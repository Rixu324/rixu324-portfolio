import type { PortfolioViewProps } from "./viewTypes";
export function About({ narrow, icOn, icOff }: Pick<PortfolioViewProps, "narrow" | "icOn" | "icOff">) {
    return <>
    <section className="page-section" id="about">
  <div className="about-heading">
    <h2 className="section-title" data-rv="mask"><span className="inline-block">About</span></h2>
    <span className="about-orbit" data-rv="up" data-d="200"><span className="orbit-accent"></span></span>
  </div>
  {!narrow && <> 
    <div className="about-title-desktop"><div className="about-title">
      <div className="text-mask" data-rv="mask" data-d="0"><span className="inline-block">配信の<span className="about-accent" data-tint="">"裏側"</span>を、</span></div>
      <div className="text-mask" data-rv="mask" data-d="120"><span className="inline-block">システムでもっと楽しく。</span></div>
    </div></div>
  </>}
  <div className="about-columns">
    <div className="portrait-column">
      <div className="portrait-frame">
        <div className="portrait-circle-layer" data-rv="slide" data-from="-80,0"><div className="portrait-circle" data-px="0.5"></div></div>
        <div className="portrait-quarter-layer" data-rv="slide" data-from="60,60" data-d="180"><div className="portrait-quarter" data-px="1"></div></div>
        <div className="portrait-photo-layer" data-rv="up" data-d="520"><img className="portrait-photo" src="/portfolio/icon.png" alt="りゅま"/></div>
      </div>
    </div>
    <div className="about-body">
      {narrow && <> 
        <div className="about-title-mobile"><div className="about-title">
      <div className="text-mask" data-rv="mask" data-d="0"><span className="inline-block">配信の<span className="about-accent" data-tint="">"裏側"</span>を、</span></div>
      <div className="text-mask" data-rv="mask" data-d="120"><span className="inline-block">システムでもっと楽しく。</span></div>
    </div></div>
      </>}
      <div className="about-text">
        <p className="about-intro" data-rv="up">システムエンジニアとして働きながら、個人でWebサービスやDiscord BOTなどを作っています。</p>
        <p className="about-paragraph" data-rv="up" data-d="80">楽しいことを考えたり、形にしたりするのが好きです。<br />きっかけは、一人の配信者さんのサポートでした。今ではさまざまな配信者さんと関わりながら、システムづくりを通じて活動をお手伝いしています。</p>
        <p className="about-paragraph" data-rv="up" data-d="80">また、イベントの企画・主催・運営も行っています。参加する人はもちろん、見ている人も一緒に楽しめる場をつくりたいと思っています。</p>
        <p className="about-aside" data-rv="up" data-d="160">まぁ要するに、いろいろやってます。</p>
        <p className="about-paragraph" data-rv="up" data-d="160">ゲームも好きなので、気軽に仲良くしてください！</p>
      </div>
      <div className="profile-facts" data-rv="up">
        <div className="profile-row"><span className="muted-label">Name</span><span className="profile-name">りゅま <span className="profile-alias">/ Rixu</span></span></div>
        <div className="profile-row"><span className="muted-label">Role</span><span className="profile-role">システムエンジニア / 配信者の裏方</span></div>
      </div>
    </div>
  </div>
  <div className="services-heading" data-rv="up">What I do</div>
  <div className="services-grid">
    <div className="service-item" data-rv="up" data-d="0" onMouseEnter={icOn} onMouseLeave={icOff}>
      <div className="service-item-top"><span className="muted-label">01</span><span className="circle-icon" data-ic="circle"></span></div>
      <div className="service-title">配信まわりの自動化</div>
      <p className="service-description">配信以外の作業をシステムに任せる</p>
    </div>
    <div className="service-item" data-rv="up" data-d="80" onMouseEnter={icOn} onMouseLeave={icOff}>
      <div className="service-item-top"><span className="muted-label">02</span><span className="triangle-icon" data-ic="tri"></span></div>
      <div className="service-title">イベント企画・運営</div>
      <p className="service-description">参加者だけでなくリスナーも一緒に楽しめる企画をつくる</p>
    </div>
    <div className="service-item" data-rv="up" data-d="160" onMouseEnter={icOn} onMouseLeave={icOff}>
      <div className="service-item-top"><span className="muted-label">03</span><span className="square-icon" data-ic="square"></span></div>
      <div className="service-title">Web / Discord BOT</div>
      <p className="service-description">アイデアをすぐ動く形にする</p>
    </div>
  </div>
    </section>
  </>;
}
