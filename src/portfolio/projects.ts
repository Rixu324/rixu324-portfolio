/** The six featured works from the supplied v2 design. */
export interface Project {
    title: string;
    cat: 'Service' | 'BOT' | 'Event' | 'Web';
    tags: string[];
    img: string;
    imgFit?: 'cover' | 'contain';
    previewUrl?: string;
    details: string;
    scope: string[];
    tech: string[];
    links: {
        label: string;
        href: string;
    }[];
}
export const projects: Project[] = [
    { title: 'PaletteTool', cat: 'Service', tags: ['HP', '配信者支援サービス運営'], img: '/portfolio/palettebot.png', imgFit: 'contain',
        details: '配信ツールの開発、イベントの企画・運営、Web制作で、配信者の活動を支えているサービスです。',
        scope: ['企画', 'デザイン', '開発', '運営'], tech: [], links: [{ label: 'サイトへ', href: 'https://palette-tool.com' }, { label: 'X', href: 'https://x.com/PaletteTool' }, { label: 'サポートサーバー', href: 'https://discord.gg/MSvyqYQZXk' }] },
    { title: 'PaletteBot for Twitch', cat: 'BOT', tags: ['Twitch向けチャットボットサービス'], img: '/portfolio/palettebot.gif', imgFit: 'contain',
        details: 'Twitch用のチャットボットサービスです。配信を盛り上げる機能や、配信者さんの手間を減らす機能を提供。',
        scope: ['企画', '開発', '運営'], tech: [], links: [{ label: 'サイトへ', href: 'https://www.palette-tool.com/palettebot' }] },
    { title: 'PalentiaCraft', cat: 'Event', tags: ['主催イベント運営'], img: '/portfolio/palentiacraft.jpg', imgFit: 'contain', details: '女性活動者限定マインクラフトストリーマーサーバーです。\n\n活動者が交流・自分を演出できる場だけでなくリスナーさんも楽しんでいただけるようなイベントを用意・運営しております。', scope: ['企画', '運営'], tech: [], links: [{ label: 'サイトへ', href: 'https://www.palentia-craft.com/' }] },
    { title: 'あらいぐま杯HP', cat: 'Web', tags: ['HP制作・運営'], img: '', previewUrl: 'https://www.arairikuv.com/', details: '新井麗琥さん主催のVALORANTコミュニティ大会です。\n\nサイトの作成、大会運営BOTの提供、運営スタッフ支援を行いました。', scope: ['デザイン', '開発', '運営'], tech: [], links: [{ label: 'サイトへ', href: 'https://www.arairikuv.com/' }, { label: '新井麗琥さん（X）', href: 'https://x.com/ARAI_RIKUv' }] },
    { title: 'こんぶちゃん公式HP', cat: 'Web', tags: ['HP制作'], img: '', details: '海藻小悪魔系VTuber・こんぶちゃんの公式サイト。', scope: ['デザイン', '開発'], tech: [], links: [{ label: 'サイトへ', href: 'https://www.konbuchan07.com/' }] },
    { title: 'ウィングマンくん', cat: 'BOT', tags: ['Discord BOT'], img: '/portfolio/wingman.png',
        details: 'ウィングマンくんは、Valorantのカスタムマッチでいろいろ手助けをしてくれるBOTです。ランダムでチーム分けをしたり、ランダムでマップなどを出してくれます。',
        scope: ['企画', '開発', '運営'], tech: [],
        links: [{ label: 'Invite', href: 'https://discord.com/oauth2/authorize?client_id=1188759163153682433' }, { label: 'サポートサーバー', href: 'https://discord.gg/jaQSkdJXpk' }] },
];
