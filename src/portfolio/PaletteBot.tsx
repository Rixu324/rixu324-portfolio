import type { MouseEventHandler } from 'react';
interface PaletteBotProps {
    className: string;
    animated?: boolean;
    onMouseEnter?: MouseEventHandler<SVGSVGElement>;
}
export function PaletteBot({ className, animated = false, onMouseEnter }: PaletteBotProps) {
    return (<svg className={className} data-land={animated ? "" : undefined} onMouseEnter={onMouseEnter} viewBox="-33 -27 166 122" role="img" aria-label="PaletteBot">
      <g transform="rotate(-8 22 4)"><path className="bot-ear" data-bp={animated ? "ear" : undefined} d="M8 4 L22 -24 L36 4 Z" fill="#EDEBE6"></path></g>
      <g transform="rotate(8 78 4)"><path className="bot-ear" data-bp={animated ? "ear" : undefined} d="M64 4 L78 -24 L92 4 Z" fill="#EDEBE6"></path></g>
      <rect data-bp={animated ? "head" : undefined} x="0" y="0" width="100" height="94.3" rx="15.5" fill="#EDEBE6"></rect>
      <rect className="bot-part" data-bp={animated ? "screen" : undefined} x="8" y="9" width="84" height="77.3" rx="10" fill="#0B0B0D"></rect>
      {animated && <rect className="bot-crt" data-bp={animated ? "crt" : undefined} x="8" y="9" width="84" height="77.3" rx="10" fill="#FFFFFF"></rect>}
      <circle className="bot-part" data-bp={animated ? "eye" : undefined} cx="33" cy="43" r="5.8" fill="#EDEBE6"></circle>
      <circle className="bot-part" data-bp={animated ? "eye" : undefined} cx="67" cy="43" r="5.8" fill="#EDEBE6"></circle>
      <path className="bot-part" data-bp={animated ? "mouth" : undefined} d="M45 55 a5 5 0 0 0 10 0 Z" fill="#EDEBE6"></path>
      <g transform="translate(-5 44) rotate(12)"><rect className="whisker-left" data-bp={animated ? "w" : undefined} data-a={animated ? "12" : undefined} data-i={animated ? "0" : undefined} x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(-5 52) rotate(0)"><rect className="whisker-left" data-bp={animated ? "w" : undefined} data-a={animated ? "0" : undefined} data-i={animated ? "1" : undefined} x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(-5 60) rotate(-12)"><rect className="whisker-left" data-bp={animated ? "w" : undefined} data-a={animated ? "-12" : undefined} data-i={animated ? "2" : undefined} x="-26" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 44) rotate(-12)"><rect className="whisker-right" data-bp={animated ? "w" : undefined} data-a={animated ? "-12" : undefined} data-i={animated ? "0" : undefined} x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 52) rotate(0)"><rect className="whisker-right" data-bp={animated ? "w" : undefined} data-a={animated ? "0" : undefined} data-i={animated ? "1" : undefined} x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g><g transform="translate(105 60) rotate(12)"><rect className="whisker-right" data-bp={animated ? "w" : undefined} data-a={animated ? "12" : undefined} data-i={animated ? "2" : undefined} x="0" y="-3" width="26" height="6" rx="3" fill="#EDEBE6"></rect></g>
      <g transform="rotate(-15 16 -4)"><ellipse className="bot-part" data-bp={animated ? "beret" : undefined} cx="16" cy="-4" rx="27" ry="13" fill="#FF6A3D"></ellipse></g>
    </svg>);
}
