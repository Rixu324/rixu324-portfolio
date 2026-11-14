/** The six featured works from the supplied v2 design. */
export interface Project {
    title: string;
    cat: 'Service' | 'BOT' | 'Event' | 'Web';
    tags: string[];
    img: string;
    details: string;
    scope: string[];
    tech: string[];
    links: {
        label: string;
        href: string;
    }[];
}
export const projects: Project[] = [
    { title: 'PaletteTool', cat: 'Service', tags: ['HP', '配信者支援サービス運営'], img: '',
        details: '配信者さんの「配信以外の作業」を減らすためのツール群。サービスの運営とHPの制作を担当。',
        scope: ['企画', 'デザイン', '開発', '運営'], tech: [], links: [{ label: 'サイトへ', href: 'https://palette-tool.com' }] },
    { title: 'PaletteBot for Twitch', cat: 'BOT', tags: ['Twitch向けチャットボットサービス'], img: '',
        details: 'Twitchのチャットで動くBOT。配信を盛り上げる機能や、配信者さんの手間を減らす機能を提供。',
        scope: ['企画', '開発', '運営'], tech: [], links: [] },
    { title: 'PalentiaCraft', cat: 'Event', tags: ['主催イベント運営'], img: '', details: '（説明は準備中）', scope: ['企画', '運営'], tech: [], links: [] },
    { title: 'あらいぐま杯HP', cat: 'Web', tags: ['HP制作・運営'], img: '', details: '（説明は準備中）', scope: ['デザイン', '開発', '運営'], tech: [], links: [] },
    { title: 'こんぶHP', cat: 'Web', tags: ['HP制作'], img: '', details: '（説明は準備中）', scope: ['デザイン', '開発'], tech: [], links: [] },
    { title: 'ウィングマンくん', cat: 'BOT', tags: ['Discord BOT'], img: '/portfolio/wingman.png',
        details: 'ウィングマンくんは、Valorantのカスタムマッチでいろいろ手助けをしてくれるBOTです。ランダムでチーム分けをしたり、ランダムでマップなどを出してくれます。',
        scope: ['企画', '開発', '運営'], tech: ['TypeScript', 'Node.js', 'Python', 'Discord.js', 'Prisma', 'PostgreSQL'],
        links: [{ label: 'Invite', href: 'https://discord.com/oauth2/authorize?client_id=1188759163153682433' }, { label: 'サポートサーバー', href: 'https://discord.gg/jaQSkdJXpk' }] },
];
