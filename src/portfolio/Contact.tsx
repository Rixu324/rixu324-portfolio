import type { PortfolioViewProps } from "./viewTypes";
export function Contact({ narrow, icOn, icOff, ctaOn, ctaOff, toTop }: Pick<PortfolioViewProps, "narrow" | "icOn" | "icOff" | "ctaOn" | "ctaOff" | "toTop">) {
    return <>
    <footer className="contact" id="contact">
  <div className="contact-inner">
    <div className="contact-columns">
      <div className="contact-copy">
        <p className="contact-title" data-rv="up">配信のこと、イベントのこと、<br />なんでも相談してください。</p>
        <p className="contact-description" data-rv="up" data-d="80">サービスの使い方から、イベント運営の依頼までなんでも</p>
        <div className="contact-action" data-rv="up" data-d="160">
          <a className="contact-button" href="https://discord.gg/MSvyqYQZXk" target="_blank" rel="noopener noreferrer" onMouseEnter={ctaOn} onMouseLeave={ctaOff}>
            <span className="button-wipe" data-wipe=""></span>
            <span className="button-label">話してみる →</span>
          </a>
        </div>
        <div className="social-links" data-rv="up" data-d="240">
          
          <a className="social-link" href="https://x.com/R1xu_" target="_blank" rel="noopener noreferrer" onMouseEnter={icOn} onMouseLeave={icOff}><span className="social-triangle" data-ic="tri"></span><span className="social-label">X<span className="link-underline" data-ul=""></span></span></a>
          <a className="social-link" href="https://discord.gg/MSvyqYQZXk" target="_blank" rel="noopener noreferrer" onMouseEnter={icOn} onMouseLeave={icOff}><span className="social-square" data-ic="square"></span><span className="social-label">Discord サポートサーバー<span className="link-underline" data-ul=""></span></span></a>
          <a className="social-link" href="mailto:contact@palette-tool.com" onMouseEnter={icOn} onMouseLeave={icOff}><span className="social-circle" data-ic="circle"></span><span className="social-label">contact@palette-tool.com<span className="link-underline" data-ul=""></span></span></a>
          
        </div>
      </div>
      <div className="sculpture-column">
        <div className="sculpture" data-stack="">
          <div className="sculpture-base" data-fs=""></div>
          <div className="sculpture-square" data-fs=""></div>
          <div className="sculpture-circle" data-fs=""></div>
          <div className="sculpture-quarter" data-fs=""></div>
          <div className="sculpture-triangle" data-fs=""></div>
          <div className="sculpture-line" data-fs=""></div>
          <div className="sculpture-half" data-fs=""></div>
        </div>
      </div>
    </div>
    {!narrow && <> 
      <div className="footer-desktop">
        <span>2026 Rixu</span><span className="air-status"><span className="air-dot" data-flamp=""></span><span data-fon="">ON AIR</span><span className="air-off" data-foff="">OFF AIR</span></span><span className="back-top-wrap"><a className="back-top" href="#top" onClick={toTop}>↑ TOPへ戻る</a></span>
      </div>
    </>}
    {narrow && <> 
      <div className="footer-mobile">
        <span className="footer-meta"><span>2026 Rixu</span><span className="air-status"><span className="air-dot" data-flamp=""></span><span data-fon="">ON AIR</span><span className="air-off" data-foff="">OFF AIR</span></span></span><a className="back-top" href="#top" onClick={toTop}>↑ TOP</a>
      </div>
    </>}
  </div>
    </footer>
  </>;
}
