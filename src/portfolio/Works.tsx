import type { PortfolioViewProps } from "./viewTypes";
import { PaletteBot } from "./PaletteBot";
import { projects } from "./projects";
export function Works({ narrow, botHover, gGo, gOn, gOff }: Pick<PortfolioViewProps, "narrow" | "botHover" | "gGo" | "gOn" | "gOff">) {
    return <>
    <section className="page-section" id="works">
  <div className="works-heading">
    <h2 className="section-title" data-rv="mask"><span className="inline-block">Work</span></h2>
    <PaletteBot className="bot-mark" animated onMouseEnter={botHover}/>
  </div>
  {!narrow && <> 
    <div className="desktop-gallery" data-gallery="">
      <div className="desktop-canvas">
      <div className="palette-tool-position" data-gi="" data-depth="0.3" data-z="1">
        <div className="fill-parent" data-rv="pop" data-d="0"><div className="fill-parent">
          <span className="service-pulse" data-ring=""></span><span className="service-ring" data-ring=""></span>
          <button className="service-shape" data-w="0" data-idle="inset(0% round 50%)" data-full="inset(0% round 0%)" aria-label="PaletteTool" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><img className="service-project-image" src={projects[0].img} alt="" loading="lazy"/></button>
        </div></div>
        <div className="label-service" data-rv="up" data-d="500">
          <span className="label-line"></span>
          <span className="label-copy"><span className="work-number">01 ・ <span className="accent-green">運営中</span></span><span className="work-title">PaletteTool</span><span className="work-description">HP / 配信者支援サービス運営</span></span>
        </div>
      </div>
      <div className="twitch-position" data-gi="" data-depth="0.4" data-z="2">
        <div className="fill-parent" data-rv="pop" data-d="100"><div className="fill-parent">
          <span className="bot-pulse" data-ring=""></span><span className="bot-ring" data-ring=""></span>
          <button className="bot-shape" data-w="1" data-idle="polygon(50% 4%,50% 4%,100% 96%,0% 96%)" data-full="polygon(0% 0%,100% 0%,100% 100%,0% 100%)" aria-label="PaletteBot for Twitch" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><img className="card-bot-mark" src={projects[1].img} alt="" loading="lazy"/></button>
        </div></div>
        <div className="label-twitch" data-rv="up" data-d="600">
          <span className="label-line"></span>
          <span className="label-copy-right"><span className="work-number">02 ・ <span className="accent-green">運営中</span></span><span className="work-title">PaletteBot for Twitch</span><span className="work-description">Twitch向けチャットボットサービス</span></span>
        </div>
      </div>
      <div className="event-position" data-gi="" data-depth="0.9" data-z="3">
        <div className="fill-parent" data-rv="pop" data-d="200"><div className="fill-parent">
          
          <button className="event-shape" data-w="2" data-idle="inset(25% 0% 25% 0% round 14cqw 14cqw 0cqw 0cqw)" data-full="inset(0% 0% 0% 0% round 0cqw 0cqw 0cqw 0cqw)" aria-label="PalentiaCraft" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><img className="cover-image" src={projects[2].img} alt="" loading="lazy"/></button>
        </div></div>
        <div className="label-event" data-rv="up" data-d="700">
          <span className="label-line-vertical"></span>
          <span className="label-copy"><span className="work-number">03</span><span className="work-title">PalentiaCraft</span><span className="work-description">主催イベント運営</span></span>
        </div>
      </div>
      <div className="tournament-position" data-gi="" data-depth="1.1" data-z="5">
        <div className="fill-parent" data-rv="pop" data-d="150"><div className="fill-parent">
          
          <button className="web-shape" data-w="3" data-idle="inset(10%)" data-full="inset(0%)" aria-label="あらいぐま杯HP" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div>
        <div className="label-tournament" data-rv="up" data-d="650">
          <span className="label-line"></span>
          <span className="label-copy"><span className="work-number">04</span><span className="work-title">あらいぐま杯HP</span><span className="work-description">HP制作・運営</span></span>
        </div>
      </div>
      <div className="konbu-position" data-gi="" data-depth="1" data-z="4">
        <div className="fill-parent" data-rv="pop" data-d="100"><div className="fill-parent">
          
          <button className="web-shape" data-w="4" data-idle="inset(10%)" data-full="inset(0%)" aria-label="こんぶちゃん公式HP" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div>
        <div className="label-konbu" data-rv="up" data-d="600">
          <span className="label-line-vertical"></span>
          <span className="label-copy"><span className="work-number">05</span><span className="work-title">こんぶちゃん公式HP</span><span className="work-description">HP制作</span></span>
        </div>
      </div>
      <div className="wingman-position" data-gi="" data-depth="1.2" data-z="6">
        <div className="fill-parent" data-rv="pop" data-d="200"><div className="fill-parent">
          
          <button className="bot-shape" data-w="5" data-idle="polygon(50% 4%,50% 4%,100% 96%,0% 96%)" data-full="polygon(0% 0%,100% 0%,100% 100%,0% 100%)" aria-label="ウィングマンくん" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><img className="cover-image" src="/portfolio/wingman.png" alt=""/></button>
        </div></div>
        <div className="label-wingman" data-rv="up" data-d="700">
          <span className="label-line-vertical"></span>
          <span className="label-copy"><span className="work-number">06</span><span className="work-title">ウィングマンくん</span><span className="work-description">Discord BOT</span></span>
        </div>
      </div>
      </div>
    </div>
  </>}
  {narrow && <> 
    <div className="mobile-gallery" data-gallery="">
      <div className="mobile-gallery-stack">
      <div className="mobile-leading-left" data-gi="" data-z="1">
        <div className="square-frame"><div className="fill-parent" data-rv="pop" data-d="0"><div className="fill-parent">
          <span className="service-pulse" data-ring=""></span><span className="service-ring" data-ring=""></span>
          <button className="service-shape" data-w="0" data-idle="inset(0% round 50%)" data-full="inset(0% round 0%)" aria-label="PaletteTool" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><img className="service-project-image" src={projects[0].img} alt="" loading="lazy"/></button>
        </div></div></div>
        <div className="mobile-label" data-rv="up" data-d="500">
          <span className="label-line-vertical"></span>
          <span className="label-copy"><span className="work-number">01 ・ <span className="accent-green">運営中</span></span><span className="work-title">PaletteTool</span><span className="work-description">HP / 配信者支援サービス運営</span></span>
        </div>
      </div>
      <div className="mobile-leading-right" data-gi="" data-z="1">
        <div className="square-frame"><div className="fill-parent" data-rv="pop" data-d="0"><div className="fill-parent">
          <span className="bot-pulse" data-ring=""></span><span className="bot-ring" data-ring=""></span>
          <button className="bot-shape" data-w="1" data-idle="polygon(50% 4%,50% 4%,100% 96%,0% 96%)" data-full="polygon(0% 0%,100% 0%,100% 100%,0% 100%)" aria-label="PaletteBot for Twitch" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><img className="card-bot-mark" src={projects[1].img} alt="" loading="lazy"/></button>
        </div></div></div>
        <div className="mobile-label" data-rv="up" data-d="500">
          <span className="label-line-vertical"></span>
          <span className="label-copy"><span className="work-number">02 ・ <span className="accent-green">運営中</span></span><span className="work-title">PaletteBot for Twitch</span><span className="work-description">Twitch向けチャットボットサービス</span></span>
        </div>
      </div>
      <div className="mobile-work-left" data-gi="" data-z="1">
        <div className="square-frame"><div className="fill-parent" data-rv="pop" data-d="0"><div className="fill-parent">
          
          <button className="mobile-event-shape" data-w="2" data-idle="inset(25% 0% 25% 0% round 29cqw 29cqw 0cqw 0cqw)" data-full="inset(0% 0% 0% 0% round 0cqw 0cqw 0cqw 0cqw)" aria-label="PalentiaCraft" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><img className="cover-image" src={projects[2].img} alt="" loading="lazy"/></button>
        </div></div></div>
        <div className="mobile-event-label" data-rv="up" data-d="500">
          <span className="label-line-vertical"></span>
          <span className="label-copy"><span className="work-number">03</span><span className="work-title">PalentiaCraft</span><span className="work-description">主催イベント運営</span></span>
        </div>
      </div>
      <div className="mobile-work-right" data-gi="" data-z="1">
        <div className="square-frame"><div className="fill-parent" data-rv="pop" data-d="0"><div className="fill-parent">
          
          <button className="web-shape" data-w="3" data-idle="inset(10%)" data-full="inset(0%)" aria-label="あらいぐま杯HP" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div></div>
        <div className="mobile-web-label" data-rv="up" data-d="500">
          <span className="label-line-vertical"></span>
          <span className="label-copy"><span className="work-number">04</span><span className="work-title">あらいぐま杯HP</span><span className="work-description">HP制作・運営</span></span>
        </div>
      </div>
      <div className="mobile-work-left" data-gi="" data-z="1">
        <div className="square-frame"><div className="fill-parent" data-rv="pop" data-d="0"><div className="fill-parent">
          
          <button className="web-shape" data-w="4" data-idle="inset(10%)" data-full="inset(0%)" aria-label="こんぶちゃん公式HP" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}></button>
        </div></div></div>
        <div className="mobile-web-label" data-rv="up" data-d="500">
          <span className="label-line-vertical"></span>
          <span className="label-copy"><span className="work-number">05</span><span className="work-title">こんぶちゃん公式HP</span><span className="work-description">HP制作</span></span>
        </div>
      </div>
      <div className="mobile-work-right" data-gi="" data-z="1">
        <div className="square-frame"><div className="fill-parent" data-rv="pop" data-d="0"><div className="fill-parent">
          
          <button className="bot-shape" data-w="5" data-idle="polygon(50% 4%,50% 4%,100% 96%,0% 96%)" data-full="polygon(0% 0%,100% 0%,100% 100%,0% 100%)" aria-label="ウィングマンくん" onClick={gGo} onMouseEnter={gOn} onMouseLeave={gOff}><img className="cover-image" src="/portfolio/wingman.png" alt=""/></button>
        </div></div></div>
        <div className="mobile-label" data-rv="up" data-d="500">
          <span className="label-line-vertical"></span>
          <span className="label-copy"><span className="work-number">06</span><span className="work-title">ウィングマンくん</span><span className="work-description">Discord BOT</span></span>
        </div>
      </div>
      </div>
    </div>
  </>}
  
    </section>
  </>;
}
