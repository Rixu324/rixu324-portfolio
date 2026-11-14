import type { PortfolioViewProps } from "./viewTypes";
import { Fragment } from "react";
import { PaletteBot } from "./PaletteBot";
export function ProjectDialog({ sel, panelRef, backRef, close, prev, next }: Pick<PortfolioViewProps, "sel" | "panelRef" | "backRef" | "close" | "prev" | "next">) {
    if (!sel)
        return null;
    return <>
    <div className="modal-overlay">
    <div className="modal-backdrop" ref={backRef} onClick={close}></div>
    <div className="project-dialog" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="project-title" tabIndex={-1}>
      <div className="modal-columns" data-mc="">
        <div className="project-art">
          {sel.hasImg && <> <div style={{ "position": "absolute", "inset": "0", "backgroundImage": sel.imgBg, "backgroundSize": "cover", "backgroundPosition": "center" }} role="img" aria-label={sel.title}></div></>}
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
          {sel.scope.length > 0 && <div>
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
            {sel.primary.map((l, index) => <Fragment key={index}><a className="primary-link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a></Fragment>)}
            {sel.secondary.map((l, index) => <Fragment key={index}><a className="secondary-link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a></Fragment>)}
          </div>
          <div className="project-pagination"><button className="project-page-button" onClick={prev}>← 前へ</button><button className="project-page-button" onClick={next}>次へ →</button></div>
        </div>
      </div>
    </div>
  </div>
  </>;
}
