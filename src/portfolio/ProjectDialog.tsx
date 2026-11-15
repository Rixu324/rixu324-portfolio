import type { PortfolioViewProps } from "./viewTypes";
import { Fragment } from "react";
import { PaletteBot } from "./PaletteBot";
function ProjectLinkIcon({ href }: { href: string }) {
    const url = new URL(href);
    const isX = url.hostname === 'x.com';
    const isInvite = url.hostname === 'discord.com' && url.pathname.startsWith('/oauth2/');
    const isDiscord = url.hostname === 'discord.gg' || url.hostname === 'discord.com';
    return <svg className="project-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        {isX ? <path d="M4 3h4l12 18h-4L4 3Zm0 18 7-8M20 3l-7 8" /> : isInvite ? <><rect x="4" y="7" width="16" height="13" rx="4"/><path d="M12 3v4M9 12v2m6-2v2m-6 3h6"/></> : isDiscord ? <><path d="M20 11a8 8 0 0 1-8 8H5l-3 3V11a9 9 0 0 1 18 0Z"/><path d="M7 11h.01M11 11h.01M15 11h.01"/></> : <><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></>}
    </svg>;
}
export function ProjectDialog({ sel, panelRef, backRef, close, prev, next }: Pick<PortfolioViewProps, "sel" | "panelRef" | "backRef" | "close" | "prev" | "next">) {
    if (!sel)
        return null;
    return <>
    <div className="modal-overlay">
    <div className="modal-backdrop" ref={backRef} onClick={close}></div>
    <div className="project-dialog" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="project-title" tabIndex={-1}>
      <div className="modal-columns" data-mc="">
        <div className={sel.previewUrl ? "project-art project-art-website" : "project-art"}>
          {sel.previewUrl && <div className="project-website">
            <div className="project-website-toolbar"><span>サイトプレビュー</span><a href={sel.previewUrl} target="_blank" rel="noopener noreferrer" aria-label="サイトを別タブで開く" title="サイトを別タブで開く"><ProjectLinkIcon href={sel.previewUrl}/><span className="project-link-label">別タブで開く ↗</span></a></div>
            <iframe key={sel.previewUrl} className="project-website-frame" src={sel.previewUrl} title={`${sel.title} サイトプレビュー`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox" />
          </div>}
          {sel.hasImg && <> <div style={{ "position": "absolute", "inset": "0", "backgroundImage": sel.imgBg, "backgroundSize": sel.imgFit || "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat" }} role="img" aria-label={sel.title}></div></>}
          {sel.isPB && <> <PaletteBot className="modal-bot-mark"/></>}
          {sel.isService && <> <span className="modal-service-mark"></span></>}{sel.isBot && <> <span className="modal-bot-fallback"></span></>}{sel.isWeb && <> <span className="modal-web-mark"></span></>}{sel.isEvent && <> <span className="modal-event-mark"></span></>}
        </div>
        <div className="project-info">
          <div className="modal-header">
            <span>{sel.num} / {sel.total}</span>
            <button className="modal-close" onClick={close}>閉じる ✕</button>
          </div>
          <div>
            <h3 className="project-title" id="project-title">{sel.title}</h3>
            <div className="project-tags">
              {sel.tags.map((t, index) => <Fragment key={index}><span className="project-tag">{t}</span></Fragment>)}
            </div>
          </div>
          <p className="project-description">{sel.details}</p>
          {sel.scope.length > 0 && <div className="project-scope">
            <div className="detail-label">担当範囲</div>
            <div className="detail-values">
              {sel.scope.map((t, index) => <Fragment key={index}><span className="scope-tag">{t}</span></Fragment>)}
            </div>
          </div>}
          {sel.hasTech && <> 
            <div>
              <div className="detail-label">使用技術</div>
              <div className="detail-values">
                {sel.tech.map((t, index) => <Fragment key={index}>
                  <span className="tech-tag"><span className="tech-abbr">{t.abbr}</span>{t.name}</span>
                </Fragment>)}
              </div>
            </div>
          </>}
          <div className="project-links">
            {sel.links.map((link, index) => <a key={link.href} className={index === 0 ? "primary-link" : "secondary-link"} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.label}（新しいタブで開く）`} title={link.label}><ProjectLinkIcon href={link.href}/><span className="project-link-label">{link.label} ↗</span></a>)}
          </div>
          <div className="project-pagination"><button className="project-page-button" onClick={prev}>← 前へ</button><button className="project-page-button" onClick={next}>次へ →</button></div>
        </div>
      </div>
    </div>
  </div>
  </>;
}
