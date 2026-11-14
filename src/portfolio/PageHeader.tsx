export function PageHeader() {
    return <>
    <div className="boot-screen" data-loader="" aria-hidden="true">
  <div data-ll="">&gt; booting rixu.info ... <span className="accent-green">ok</span></div>
  <div data-ll="">&gt; loading shapes [18] ... <span className="accent-green">ok</span></div>
  <div data-ll="">&gt; checking signal ... <span className="accent-green">ok</span></div>
  <div data-ll="">&gt; まぁ、いけるっしょ ... <span className="accent-green">ok</span></div>
  <div className="boot-status" data-llamp="">● ON AIR</div>
    </div>

    <nav className="site-nav">
  <a className="site-logo" href="#top">RIXU</a>
   
    <div className="nav-links">
      <a className="nav-link" href="#works">Works</a>
      <a className="nav-link" href="#about">About</a>
      <a className="nav-link" href="#contact">Contact</a>
    </div>
    </nav>
  </>;
}
