import React from "react";
import { renderAdditionalProjects, renderSupporting } from "./AdditionalContent";

// React markup migrated from the supplied Portfolio.dc.html (v2).
export function renderPortfolio(values) {
  const {backRef, botHover, close, ctaOff, ctaOn, gDesk, gGo, gMob, gOff, gOn, icOff, icOn, isOpen, narrow, next, panelRef, prev, sel, showNav, toTop, wide} = values;
  return <>
<a className="skip-link" href="#works">作品へスキップ</a>



<div className="p1" data-loader="" aria-hidden="true">
  <div data-ll="">&gt; booting rixu.info ... <span className="p2">ok</span></div>
  <div data-ll="">&gt; loading shapes [18] ... <span className="p2">ok</span></div>
  <div data-ll="">&gt; checking signal ... <span className="p2">ok</span></div>
  <div data-ll="">&gt; まぁ、いけるっしょ ... <span className="p2">ok</span></div>
  <div className="p3" data-llamp="">● ON AIR</div>
</div>

<div className="p4" data-cur="">
  <span className="p5" data-curl=""></span>
</div>

<nav className="p6">
  <a className="p7" href="#top">RIXU</a>
  {showNav && <> 
    <div className="p8">
      <a className="p9" href="#works" data-magnet="">Works</a>
      <a className="p9" href="#about" data-magnet="">About</a>
      <a className="p9" href="#contact" data-magnet="">Contact</a>
    </div>
  </>}
</nav>

<main>
<header className="p10" id="top" data-screen-label="Hero" aria-label="Rixu / りゅま ポートフォリオ">
  <div className="p11" data-stage="" aria-hidden="true"></div>
  <div className="p12">
    <h1 className="p13" data-hs="">Rixu / りゅま</h1>
    <p className="p14" data-hs="">つくる人。<br  />たまに、裏で回してる人。</p>
    <p className="p15" data-hs="">Web / Discord BOT / 配信ツール</p>
  </div>
</header>

<section className="p16" id="works" data-screen-label="Works">
  <div className="p17">
    <h2 className="p18" data-rv="mask"><span className="p19">Work</span></h2>
    <svg className="p20" data-land="" onMouseEnter={botHover} viewBox="-33 -27 166 122" role="img" aria-label="PaletteBot">
      <g transform="rotate(-8 22 4)"><path className="p21" data-bp="ear" d="M8 4 L22 -24 L36 4 Z" fill="#EDEBE6"></path></g>
      <g transform="rotate(8 78 4)"><path className="p21" data-bp="ear" d="M64 4 L78 -24 L92 4 Z" fill="#EDEBE6"></path></g>
      <rect data-bp="head" x="0" y="0" width="100" height="94.3" rx="15.5" fill="#EDEBE6"></rect>
      <rect className="p22" data-bp="screen" x="8" y="9" width="84" height="77.3" rx="10" fill="#0B0B0D"></rect>
      <rect className="p23" data-bp="crt" x="8" y="9" width="84" height="77.3" rx="10" fill="#FFFFFF"></rect>
      <circle className="p22" data-bp="eye" cx="33" cy="43" r="5.8" fill="#EDEBE6"></circle>
      <circle className="p22" data-bp="eye" cx="67" cy="43" r="5.8" fill="#EDEBE6"></circle>
      <path className="p22" data-bp="mouth" d="M45 55 a5 5 0 0 0 10 0 Z" fill="#EDEBE6"></path>
      <g transform="translate(-5 44) rotate(12)"><rect className="p24" data-bp="w" data-a="12" data-i="0" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(-5 52) rotate(0)"><rect className="p24" data-bp="w" data-a="0" data-i="1" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(-5 60) rotate(-12)"><rect className="p24" data-bp="w" data-a="-12" data-i="2" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 44) rotate(-12)"><rect className="p25" data-bp="w" data-a="-12" data-i="0" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 52) rotate(0)"><rect className="p25" data-bp="w" data-a="0" data-i="1" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 60) rotate(12)"><rect className="p25" data-bp="w" data-a="12" data-i="2" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g>
      <g transform="rotate(-15 16 -4)"><ellipse className="p22" data-bp="beret" cx="16" cy="-4" rx="27" ry="13" fill="#FF6A3D"></ellipse></g>
    </svg>
  </div>
  {gDesk && <> 
    <div className="p26" data-gallery="">
      <div className="p27">
      <div className="p28" data-gi="" data-depth="0.3" data-z="1">
        <div className="p29" data-rv="pop" data-d="0"><div className="p29">
          <span className="p30" data-ring=""></span><span className="p31" data-ring=""></span>
          <button className="p32" data-gf="" data-w="0" data-idle="inset(0% round 50%)" data-full="inset(0% round 0%)" data-cursor="OPEN" aria-label="PaletteTool" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div>
        <div className="p33" data-rv="up" data-d="500">
          <span className="p34"></span>
          <span className="p35"><span className="p36">01 ・ <span className="p2">運営中</span></span><span className="p37">PaletteTool</span><span className="p38">HP / 配信者支援サービス運営</span></span>
        </div>
      </div>
      <div className="p39" data-gi="" data-depth="0.4" data-z="2">
        <div className="p29" data-rv="pop" data-d="100"><div className="p29">
          <span className="p40" data-ring=""></span><span className="p41" data-ring=""></span>
          <button className="p42" data-gf="" data-w="1" data-idle="polygon(50% 4%,50% 4%,100% 96%,0% 96%)" data-full="polygon(0% 0%,100% 0%,100% 100%,0% 100%)" data-cursor="OPEN" aria-label="PaletteBot for Twitch" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><svg className="p43" viewBox="-33 -27 166 122" role="img" aria-label="PaletteBot">
      <g transform="rotate(-8 22 4)"><path className="p21" d="M8 4 L22 -24 L36 4 Z" fill="#EDEBE6"></path></g>
      <g transform="rotate(8 78 4)"><path className="p21" d="M64 4 L78 -24 L92 4 Z" fill="#EDEBE6"></path></g>
      <rect x="0" y="0" width="100" height="94.3" rx="15.5" fill="#EDEBE6"></rect>
      <rect className="p22" x="8" y="9" width="84" height="77.3" rx="10" fill="#0B0B0D"></rect>
      
      <circle className="p22" cx="33" cy="43" r="5.8" fill="#EDEBE6"></circle>
      <circle className="p22" cx="67" cy="43" r="5.8" fill="#EDEBE6"></circle>
      <path className="p22" d="M45 55 a5 5 0 0 0 10 0 Z" fill="#EDEBE6"></path>
      <g transform="translate(-5 44) rotate(12)"><rect className="p24" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(-5 52) rotate(0)"><rect className="p24" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(-5 60) rotate(-12)"><rect className="p24" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 44) rotate(-12)"><rect className="p25" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 52) rotate(0)"><rect className="p25" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 60) rotate(12)"><rect className="p25" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g>
      <g transform="rotate(-15 16 -4)"><ellipse className="p22" cx="16" cy="-4" rx="27" ry="13" fill="#FF6A3D"></ellipse></g>
    </svg></button>
        </div></div>
        <div className="p44" data-rv="up" data-d="600">
          <span className="p34"></span>
          <span className="p45"><span className="p36">02 ・ <span className="p2">運営中</span></span><span className="p37">PaletteBot for Twitch</span><span className="p38">Twitch向けチャットボットサービス</span></span>
        </div>
      </div>
      <div className="p46" data-gi="" data-depth="0.9" data-z="3">
        <div className="p29" data-rv="pop" data-d="200"><div className="p29">
          
          <button className="p47" data-gf="" data-w="2" data-idle="inset(25% 0% 25% 0% round 14cqw 14cqw 0cqw 0cqw)" data-full="inset(0% 0% 0% 0% round 0cqw 0cqw 0cqw 0cqw)" data-cursor="OPEN" aria-label="PalentiaCraft" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div>
        <div className="p48" data-rv="up" data-d="700">
          <span className="p49"></span>
          <span className="p35"><span className="p36">03</span><span className="p37">PalentiaCraft</span><span className="p38">主催イベント運営</span></span>
        </div>
      </div>
      <div className="p50" data-gi="" data-depth="1.1" data-z="5">
        <div className="p29" data-rv="pop" data-d="150"><div className="p29">
          
          <button className="p51" data-gf="" data-w="3" data-idle="inset(10%)" data-full="inset(0%)" data-cursor="OPEN" aria-label="あらいぐま杯HP" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div>
        <div className="p52" data-rv="up" data-d="650">
          <span className="p34"></span>
          <span className="p35"><span className="p36">04</span><span className="p37">あらいぐま杯HP</span><span className="p38">HP制作・運営</span></span>
        </div>
      </div>
      <div className="p53" data-gi="" data-depth="1" data-z="4">
        <div className="p29" data-rv="pop" data-d="100"><div className="p29">
          
          <button className="p51" data-gf="" data-w="4" data-idle="inset(10%)" data-full="inset(0%)" data-cursor="OPEN" aria-label="こんぶHP" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div>
        <div className="p54" data-rv="up" data-d="600">
          <span className="p49"></span>
          <span className="p35"><span className="p36">05</span><span className="p37">こんぶHP</span><span className="p38">HP制作</span></span>
        </div>
      </div>
      <div className="p55" data-gi="" data-depth="1.2" data-z="6">
        <div className="p29" data-rv="pop" data-d="200"><div className="p29">
          
          <button className="p42" data-gf="" data-w="5" data-idle="polygon(50% 4%,50% 4%,100% 96%,0% 96%)" data-full="polygon(0% 0%,100% 0%,100% 100%,0% 100%)" data-cursor="OPEN" aria-label="ウィングマンくん" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><img className="p56" src="/portfolio/wingman.png" alt="" /></button>
        </div></div>
        <div className="p57" data-rv="up" data-d="700">
          <span className="p49"></span>
          <span className="p35"><span className="p36">06</span><span className="p37">ウィングマンくん</span><span className="p38">Discord BOT</span></span>
        </div>
      </div>
      </div>
    </div>
  </>}
  {gMob && <> 
    <div className="p58" data-gallery="">
      <div className="p59">
      <div className="p60" data-gi="" data-z="1">
        <div className="p61"><div className="p29" data-rv="pop" data-d="0"><div className="p29">
          <span className="p30" data-ring=""></span><span className="p31" data-ring=""></span>
          <button className="p32" data-gf="" data-w="0" data-idle="inset(0% round 50%)" data-full="inset(0% round 0%)" data-cursor="OPEN" aria-label="PaletteTool" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div></div>
        <div className="p62" data-rv="up" data-d="500">
          <span className="p49"></span>
          <span className="p35"><span className="p36">01 ・ <span className="p2">運営中</span></span><span className="p37">PaletteTool</span><span className="p38">HP / 配信者支援サービス運営</span></span>
        </div>
      </div>
      <div className="p63" data-gi="" data-z="1">
        <div className="p61"><div className="p29" data-rv="pop" data-d="0"><div className="p29">
          <span className="p40" data-ring=""></span><span className="p41" data-ring=""></span>
          <button className="p42" data-gf="" data-w="1" data-idle="polygon(50% 4%,50% 4%,100% 96%,0% 96%)" data-full="polygon(0% 0%,100% 0%,100% 100%,0% 100%)" data-cursor="OPEN" aria-label="PaletteBot for Twitch" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><svg className="p43" viewBox="-33 -27 166 122" role="img" aria-label="PaletteBot">
      <g transform="rotate(-8 22 4)"><path className="p21" d="M8 4 L22 -24 L36 4 Z" fill="#EDEBE6"></path></g>
      <g transform="rotate(8 78 4)"><path className="p21" d="M64 4 L78 -24 L92 4 Z" fill="#EDEBE6"></path></g>
      <rect x="0" y="0" width="100" height="94.3" rx="15.5" fill="#EDEBE6"></rect>
      <rect className="p22" x="8" y="9" width="84" height="77.3" rx="10" fill="#0B0B0D"></rect>
      
      <circle className="p22" cx="33" cy="43" r="5.8" fill="#EDEBE6"></circle>
      <circle className="p22" cx="67" cy="43" r="5.8" fill="#EDEBE6"></circle>
      <path className="p22" d="M45 55 a5 5 0 0 0 10 0 Z" fill="#EDEBE6"></path>
      <g transform="translate(-5 44) rotate(12)"><rect className="p24" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(-5 52) rotate(0)"><rect className="p24" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(-5 60) rotate(-12)"><rect className="p24" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 44) rotate(-12)"><rect className="p25" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 52) rotate(0)"><rect className="p25" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 60) rotate(12)"><rect className="p25" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g>
      <g transform="rotate(-15 16 -4)"><ellipse className="p22" cx="16" cy="-4" rx="27" ry="13" fill="#FF6A3D"></ellipse></g>
    </svg></button>
        </div></div></div>
        <div className="p62" data-rv="up" data-d="500">
          <span className="p49"></span>
          <span className="p35"><span className="p36">02 ・ <span className="p2">運営中</span></span><span className="p37">PaletteBot for Twitch</span><span className="p38">Twitch向けチャットボットサービス</span></span>
        </div>
      </div>
      <div className="p64" data-gi="" data-z="1">
        <div className="p61"><div className="p29" data-rv="pop" data-d="0"><div className="p29">
          
          <button className="p65" data-gf="" data-w="2" data-idle="inset(25% 0% 25% 0% round 29cqw 29cqw 0cqw 0cqw)" data-full="inset(0% 0% 0% 0% round 0cqw 0cqw 0cqw 0cqw)" data-cursor="OPEN" aria-label="PalentiaCraft" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div></div>
        <div className="p66" data-rv="up" data-d="500">
          <span className="p49"></span>
          <span className="p35"><span className="p36">03</span><span className="p37">PalentiaCraft</span><span className="p38">主催イベント運営</span></span>
        </div>
      </div>
      <div className="p67" data-gi="" data-z="1">
        <div className="p61"><div className="p29" data-rv="pop" data-d="0"><div className="p29">
          
          <button className="p51" data-gf="" data-w="3" data-idle="inset(10%)" data-full="inset(0%)" data-cursor="OPEN" aria-label="あらいぐま杯HP" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div></div>
        <div className="p68" data-rv="up" data-d="500">
          <span className="p49"></span>
          <span className="p35"><span className="p36">04</span><span className="p37">あらいぐま杯HP</span><span className="p38">HP制作・運営</span></span>
        </div>
      </div>
      <div className="p64" data-gi="" data-z="1">
        <div className="p61"><div className="p29" data-rv="pop" data-d="0"><div className="p29">
          
          <button className="p51" data-gf="" data-w="4" data-idle="inset(10%)" data-full="inset(0%)" data-cursor="OPEN" aria-label="こんぶHP" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div></div>
        <div className="p68" data-rv="up" data-d="500">
          <span className="p49"></span>
          <span className="p35"><span className="p36">05</span><span className="p37">こんぶHP</span><span className="p38">HP制作</span></span>
        </div>
      </div>
      <div className="p67" data-gi="" data-z="1">
        <div className="p61"><div className="p29" data-rv="pop" data-d="0"><div className="p29">
          
          <button className="p42" data-gf="" data-w="5" data-idle="polygon(50% 4%,50% 4%,100% 96%,0% 96%)" data-full="polygon(0% 0%,100% 0%,100% 100%,0% 100%)" data-cursor="OPEN" aria-label="ウィングマンくん" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><img className="p56" src="/portfolio/wingman.png" alt="" /></button>
        </div></div></div>
        <div className="p62" data-rv="up" data-d="500">
          <span className="p49"></span>
          <span className="p35"><span className="p36">06</span><span className="p37">ウィングマンくん</span><span className="p38">Discord BOT</span></span>
        </div>
      </div>
      </div>
    </div>
  </>}
  
{renderAdditionalProjects(gGo)}
</section>

<div className="p69"><div className="p70" data-rv="scan"></div></div>

<section className="p16" id="about" data-screen-label="About">
  <div className="p71">
    <h2 className="p18" data-rv="mask"><span className="p19">About</span></h2>
    <span className="p72" data-rv="up" data-d="200"><span className="p73"></span></span>
  </div>
  {wide && <> 
    <div className="p74"><div className="p75">
      <div className="p76" data-rv="mask" data-d="0"><span className="p19">配信の<span className="p77" data-tint="">"裏側"</span>を、</span></div>
      <div className="p76" data-rv="mask" data-d="120"><span className="p19">システムでもっと楽しく。</span></div>
    </div></div>
  </>}
  <div className="p78">
    <div className="p79">
      <div className="p80">
        <div className="p81" data-rv="slide" data-from="-80,0"><div className="p82" data-px="0.5"></div></div>
        <div className="p83" data-rv="slide" data-from="60,60" data-d="180"><div className="p84" data-px="1"></div></div>
        <div className="p85" data-rv="up" data-d="520"><img className="p86" src="/portfolio/icon.png" alt="りゅま" /></div>
      </div>
    </div>
    <div className="p87">
      {narrow && <> 
        <div className="p88"><div className="p75">
      <div className="p76" data-rv="mask" data-d="0"><span className="p19">配信の<span className="p77" data-tint="">"裏側"</span>を、</span></div>
      <div className="p76" data-rv="mask" data-d="120"><span className="p19">システムでもっと楽しく。</span></div>
    </div></div>
      </>}
      <div className="p89">
        <p className="p90" data-rv="up">システムエンジニアとして働きながら、個人でWebサービスやDiscord BOTを作っています。</p>
        <p className="p91" data-rv="up" data-d="80">配信者さんの裏方もしていて、そこで気づいたのは「配信の外にも、地味で手間のかかる作業がたくさんある」ということでした。告知や集計、イベントの準備、毎回の細かな設定。そういう配信以外の作業はできるだけシステムに任せて、配信者さんには配信そのものに集中してほしいと思っています。</p>
        <p className="p91" data-rv="up" data-d="160">イベントでは、配信者さんだけでなくリスナーさんも一緒に参加できる仕組みを作って、見ている人も含めてみんなが楽しめる場を増やしていきたいです。</p>
        <p className="p92" data-rv="up" data-d="240">まぁ要するに、裏で色々回してる人です。</p>
      </div>
      <div className="p93" data-rv="up">
        <div className="p94"><span className="p95">Name</span><span className="p96">りゅま <span className="p97">/ Rixu</span></span></div>
        <div className="p94"><span className="p95">Role</span><span className="p98">システムエンジニア / 配信者の裏方</span></div>
        <div className="p94"><span className="p95">Location</span><span className="p99">JP</span></div>
        <div className="p94"><span className="p95">Status</span><span className="p98">たまに配信</span></div>
      </div>
    </div>
  </div>
  <div className="p100" data-rv="up">What I do</div>
  <div className="p101">
    <div className="p102" data-rv="up" data-d="0" onMouseEnter={icOn} onMouseLeave={icOff}>
      <div className="p103"><span className="p95">01</span><span className="p104" data-ic="circle"></span></div>
      <div className="p105">配信まわりの自動化</div>
      <p className="p106">配信以外の作業をシステムに任せる</p>
    </div>
    <div className="p102" data-rv="up" data-d="80" onMouseEnter={icOn} onMouseLeave={icOff}>
      <div className="p103"><span className="p95">02</span><span className="p107" data-ic="tri"></span></div>
      <div className="p105">参加型イベントの仕組み</div>
      <p className="p106">リスナーも一緒に楽しめる企画をつくる</p>
    </div>
    <div className="p102" data-rv="up" data-d="160" onMouseEnter={icOn} onMouseLeave={icOff}>
      <div className="p103"><span className="p95">03</span><span className="p108" data-ic="square"></span></div>
      <div className="p105">Web / Discord BOT</div>
      <p className="p106">アイデアをすぐ動く形にする</p>
    </div>
  </div>
</section>

<div className="p69"><div className="p70" data-rv="scan"></div></div>

<div className="p69"><div className="p70" data-rv="scan"></div></div>

{renderSupporting()}
</main>
<footer className="p109" id="contact" data-screen-label="Contact">
  <div className="p110">
    <div className="p111">
      <div className="p112">
        <p className="p113" data-rv="up">配信のこと、イベントのこと、<br  />なんでも相談してください。</p>
        <p className="p114" data-rv="up" data-d="80">ちょっとした自動化から、リスナー参加型の企画まで。</p>
        <div className="p115" data-rv="up" data-d="160">
          <a className="p116" href="https://discord.gg/jaQSkdJXpk" target="_blank" rel="noopener noreferrer" data-magnet="" data-cursor="GO" onMouseEnter={ctaOn} onMouseLeave={ctaOff}>
            <span className="p117" data-wipe=""></span>
            <span className="p118">話してみる →</span>
          </a>
        </div>
        <div className="p119" data-rv="up" data-d="240">
          
          <a className="p120" href="https://github.com/Rixu324" target="_blank" rel="noopener noreferrer" data-cursor="GO" onMouseEnter={icOn} onMouseLeave={icOff}><span className="p121" data-ic="tri"></span><span className="p122">GitHub<span className="p123" data-ul=""></span></span></a>
          <a className="p120" href="https://discord.gg/jaQSkdJXpk" target="_blank" rel="noopener noreferrer" data-cursor="GO" onMouseEnter={icOn} onMouseLeave={icOff}><span className="p124" data-ic="square"></span><span className="p122">Discord<span className="p123" data-ul=""></span></span></a>
          
        </div>
      </div>
      <div className="p125">
        <div className="p126" data-stack="">
          <div className="p127" data-fs=""></div>
          <div className="p128" data-fs=""></div>
          <div className="p129" data-fs=""></div>
          <div className="p130" data-fs=""></div>
          <div className="p131" data-fs=""></div>
          <div className="p132" data-fs=""></div>
          <div className="p133" data-fs=""></div>
        </div>
      </div>
    </div>
    {wide && <> 
      <div className="p134">
        <span >© 2026 Rixu</span><span className="p135"><span className="p136" data-flamp=""></span><span data-fon="">ON AIR</span><span className="p137" data-foff="">OFF AIR</span></span><span className="p138"><a className="p139" href="#top" onClick={toTop} data-cursor="TOP">↑ TOPへ戻る</a></span>
      </div>
    </>}
    {narrow && <> 
      <div className="p140">
        <span className="p141"><span >© 2026 Rixu</span><span className="p135"><span className="p136" data-flamp=""></span><span data-fon="">ON AIR</span><span className="p137" data-foff="">OFF AIR</span></span></span><a className="p139" href="#top" onClick={toTop} data-cursor="TOP">↑ TOP</a>
      </div>
    </>}
  </div>
</footer>

{isOpen && <> 
  <div className="p142">
    <div className="p143" ref={backRef} onClick={close}></div>
    <div className="p144" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="project-title" tabIndex="-1">
      <div className="p145" data-mc="">
        <div className="p146">
          {sel.hasImg && <> <div style={{"position":"absolute","inset":"0","backgroundImage":sel.imgBg,"backgroundSize":"cover","backgroundPosition":"center"}} role="img" aria-label={sel.title}></div></>}
          {sel.isPB && <> <svg className="p147" viewBox="-33 -27 166 122" role="img" aria-label="PaletteBot">
      <g transform="rotate(-8 22 4)"><path className="p21" d="M8 4 L22 -24 L36 4 Z" fill="#EDEBE6"></path></g>
      <g transform="rotate(8 78 4)"><path className="p21" d="M64 4 L78 -24 L92 4 Z" fill="#EDEBE6"></path></g>
      <rect x="0" y="0" width="100" height="94.3" rx="15.5" fill="#EDEBE6"></rect>
      <rect className="p22" x="8" y="9" width="84" height="77.3" rx="10" fill="#0B0B0D"></rect>
      
      <circle className="p22" cx="33" cy="43" r="5.8" fill="#EDEBE6"></circle>
      <circle className="p22" cx="67" cy="43" r="5.8" fill="#EDEBE6"></circle>
      <path className="p22" d="M45 55 a5 5 0 0 0 10 0 Z" fill="#EDEBE6"></path>
      <g transform="translate(-5 44) rotate(12)"><rect className="p24" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(-5 52) rotate(0)"><rect className="p24" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(-5 60) rotate(-12)"><rect className="p24" x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 44) rotate(-12)"><rect className="p25" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 52) rotate(0)"><rect className="p25" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 60) rotate(12)"><rect className="p25" x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g>
      <g transform="rotate(-15 16 -4)"><ellipse className="p22" cx="16" cy="-4" rx="27" ry="13" fill="#FF6A3D"></ellipse></g>
    </svg></>}
          {sel.isService && <> <span className="p148"></span></>}{sel.isBot && <> <span className="p149"></span></>}{sel.isWeb && <> <span className="p150"></span></>}{sel.isEvent && <> <span className="p151"></span></>}
        </div>
        <div className="p152">
          <div className="p153">
            <span >{sel.num} / {sel.total}</span>
            <button className="p154" onClick={close} data-cursor="CLOSE">閉じる ✕</button>
          </div>
          <div >
            <h3 className="p155" id="project-title">{sel.title}</h3>
            <div className="p156">
              {sel.tags.map((t, index) => <React.Fragment key={index}><span className="p157">{t}</span></React.Fragment>)}
            </div>
          </div>
          <p className="p158">{sel.details}</p>
          {sel.scope.length > 0 && <div >
            <div className="p159">担当範囲</div>
            <div className="p160">
              {sel.scope.map((t, index) => <React.Fragment key={index}><span className="p161">{t}</span></React.Fragment>)}
            </div>
          </div>}
          {sel.hasTech && <> 
            <div >
              <div className="p159">使用技術</div>
              <div className="p160">
                {sel.tech.map((t, index) => <React.Fragment key={index}>
                  <span className="p162"><span className="p163">{t.abbr}</span>{t.name}</span>
                </React.Fragment>)}
              </div>
            </div>
          </>}
          <div className="p164">
            {sel.primary.map((l, index) => <React.Fragment key={index}><a className="p165" href={l.href} target="_blank" rel="noopener noreferrer" data-magnet="">{l.label} ↗</a></React.Fragment>)}
            {sel.secondary.map((l, index) => <React.Fragment key={index}><a className="p166" href={l.href} target="_blank" rel="noopener noreferrer" data-magnet="">{l.label} ↗</a></React.Fragment>)}
          </div>
          <div className="p167"><button className="p168" onClick={prev}>← 前へ</button><button className="p168" onClick={next}>次へ →</button></div>
        </div>
      </div>
    </div>
  </div>
</>}

</>;
}
