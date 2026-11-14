import { projects } from './projects';
const abbreviations: Record<string, string> = {
    TypeScript: 'TS',
    'Node.js': 'NJ',
    Python: 'PY',
    'Discord.js': 'DJ',
    Prisma: 'PR',
    PostgreSQL: 'PG',
};
/** Resolve the currently selected work without duplicating content in the dialog. */
export function getProjectDetails(index: number | null) {
    if (index === null || !Number.isInteger(index) || !projects[index])
        return null;
    const project = projects[index];
    const hasImg = Boolean(project.img);
    const isPB = project.title === 'PaletteBot for Twitch';
    return {
        ...project,
        num: String(index + 1).padStart(2, '0'),
        total: String(projects.length).padStart(2, '0'),
        hasImg,
        imgBg: hasImg ? `url("${project.img}")` : 'none',
        isPB,
        isService: !hasImg && project.cat === 'Service',
        isBot: !hasImg && project.cat === 'BOT' && !isPB,
        isWeb: !hasImg && project.cat === 'Web',
        isEvent: !hasImg && project.cat === 'Event',
        tech: project.tech.map(name => ({ name, abbr: abbreviations[name] || name.slice(0, 2).toUpperCase() })),
        hasTech: project.tech.length > 0,
        primary: project.links.slice(0, 1),
        secondary: project.links.slice(1),
    };
}
export type ProjectDetails = NonNullable<ReturnType<typeof getProjectDetails>>;
