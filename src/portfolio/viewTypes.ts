import type { MouseEventHandler, RefObject } from 'react';
import type { ProjectDetails } from './projectDetails';
export interface PortfolioViewProps {
    narrow: boolean;
    sel: ProjectDetails | null;
    gGo: MouseEventHandler<HTMLButtonElement>;
    gOn: MouseEventHandler<HTMLButtonElement>;
    gOff: MouseEventHandler<HTMLButtonElement>;
    botHover: MouseEventHandler<SVGSVGElement>;
    icOn: MouseEventHandler<HTMLElement>;
    icOff: MouseEventHandler<HTMLElement>;
    ctaOn: MouseEventHandler<HTMLAnchorElement>;
    ctaOff: MouseEventHandler<HTMLAnchorElement>;
    toTop: MouseEventHandler<HTMLAnchorElement>;
    close: () => void;
    prev: () => void;
    next: () => void;
    panelRef: RefObject<HTMLDivElement>;
    backRef: RefObject<HTMLDivElement>;
}
