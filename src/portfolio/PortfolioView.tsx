import { PageHeader } from './PageHeader';
import { Hero } from './Hero';
import { Works } from './Works';
import { About } from './About';
import { Contact } from './Contact';
import { ProjectDialog } from './ProjectDialog';
import type { PortfolioViewProps } from './viewTypes';
function SectionDivider() {
    return <div className="section-divider"><div className="divider-scan" data-rv="scan"/></div>;
}
export function PortfolioView(props: PortfolioViewProps) {
    return <>
    <a className="skip-link" href="#works">作品へスキップ</a>
    <PageHeader />
    <main>
      <Hero />
      <Works narrow={props.narrow} botHover={props.botHover} gGo={props.gGo} gOn={props.gOn} gOff={props.gOff}/>
      <SectionDivider />
      <About narrow={props.narrow} icOn={props.icOn} icOff={props.icOff}/>
      <SectionDivider />
      <SectionDivider />
    </main>
    <Contact narrow={props.narrow} icOn={props.icOn} icOff={props.icOff} ctaOn={props.ctaOn} ctaOff={props.ctaOff} toTop={props.toTop}/>
    <ProjectDialog sel={props.sel} panelRef={props.panelRef} backRef={props.backRef} close={props.close} prev={props.prev} next={props.next}/>
  </>;
}
