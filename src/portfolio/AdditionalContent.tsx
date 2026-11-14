import type { MouseEventHandler } from 'react';
import { projects } from './projects';
import mokasakana from '../assets/mokasakana_icon.png';
import imocya from '../assets/imocya_icon.png';
import amahime from '../assets/amahimejyuri_icon.png';

const creators = [
  { name: 'もかさかな', image: mokasakana, twitch: 'sakanadesu24', x: 'mokasakana', description: 'セルフ受肉VTuber。深海に住むおさかなさん達のメイド。' },
  { name: '芋チャ', image: imocya, twitch: 'chachan3182', x: 'imocha322', description: '芋を生産するために産まれてきた熊。ギャルマインドで配信中。' },
  { name: '甘姫じゅり', image: amahime, twitch: 'amahime_juri3', x: 'amahime_juri3', description: '怪獣とチョコがモチーフのお姫様。元気いっぱいの配信をお届け。' },
];

export function renderAdditionalProjects(onOpen: MouseEventHandler<HTMLButtonElement>) {
  return (
    <div className="more-projects" data-rv="up">
      <h3>More works <span>これまでにつくったもの</span></h3>
      {projects.slice(6).map((project, index) => (
        <button key={project.title} data-w={index + 6} onClick={onOpen} className="archive-project">
          <span className="project-number">{String(index + 7).padStart(2, '0')}</span>
          <img src={project.img} alt="" loading="lazy" width="64" height="64" />
          <span className="archive-name">{project.title}<small>{project.tags.join(' / ')}</small></span>
          <span aria-hidden="true">↗</span>
        </button>
      ))}
    </div>
  );
}

export function renderSupporting() {
  return (
    <section className="supporting" aria-labelledby="supporting-title">
      <div data-rv="up" className="supporting-heading">
        <div><p className="eyebrow">BEHIND THE STREAM</p><h2 id="supporting-title">Supporting</h2></div>
        <p>お手伝いしている配信者。<br />ぜひ、配信を見に行ってみてください。</p>
      </div>
      <div className="creator-list">
        {creators.map((creator, index) => (
          <article key={creator.name} className="creator" data-rv="up" data-d={index * 80}>
            <img src={creator.image} alt={creator.name} width="72" height="72" loading="lazy" />
            <div className="creator-info"><h3>{creator.name}</h3><p>{creator.description}</p></div>
            <div className="creator-links">
              <a href={`https://www.twitch.tv/${creator.twitch}`} target="_blank" rel="noopener noreferrer" aria-label={`${creator.name}のTwitch`}>Twitch ↗</a>
              <a href={`https://x.com/${creator.x}`} target="_blank" rel="noopener noreferrer" aria-label={`${creator.name}のX`}>X ↗</a>
            </div>
          </article>
        ))}
      </div>
      <div className="skills-row" data-rv="up"><span>DEVELOPMENT</span><p>React / TypeScript / Spring / Java / AWS</p></div>
    </section>
  );
}
