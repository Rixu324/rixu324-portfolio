import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  SiReact,
  SiDiscord,
  SiVercel,
  SiPrisma,
  SiTypescript,
  SiValorant,
} from "react-icons/si";
import { FaNode, FaPython } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import wingman from "../assets/wingman.png";
import aquaBeats from "../assets/qauaBeats.png";
import myPortFolio from "../assets/portFolio_icon.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
  type?: "BOT" | "web" | "other";
  technologies?: string[];
  value1?: string;
  value2?: string;
}

const iconMap: Record<string, JSX.Element> = {
  React: <SiReact className="text-blue-500" />,
  "Discord.js": <SiDiscord className="text-blue-700" />,
  Vercel: <SiVercel className="text-black" />,
  "Node.js": <FaNode className="text-blue-700" />,
  "Tailwind CSS": <RiTailwindCssLine className="text-blue-700" />,
  Prisma: <SiPrisma className="text-blue-700" />,
  Postgres: <BiLogoPostgresql className="text-blue-700" />,
  TypeScript: <SiTypescript className="text-blue-700" />,
  Python: <FaPython className="text-blue-700" />,
  Valorant: <SiValorant className="text-red-700" />,
  Youtube: <FaYoutube className="text-red-700" />,
};

const projects: Project[] = [
  {
    id: 1,
    title: "ウィングマンくん",
    description: "Discordで使えるvalorant用BOT",
    image: wingman,
    details: `ウィングマンくんは、Valorantのカスタムマッチでいろいろ手助けをしてくれるBOTです。ランダムでチーム分けをしたり、ランダムでマップなどを出してくれます。`,
    type: "BOT",
    value1:
      "https://discord.com/oauth2/authorize?client_id=1188759163153682433",
    value2: "https://discord.gg/jaQSkdJXpk",
    technologies: [
      "TypeScript",
      "Node.js",
      "Python",
      "Discord.js",
      "Prisma",
      "Postgres",
      "Valorant",
    ],
  },
  {
    id: 2,
    title: " AquaBeats",
    description: "Discordで音楽流せます。",
    image: aquaBeats,
    details:
      "youtubeの動画をdiscord上で再生できるBOTです。プレイリストも対応しています。ボタン一つで次の曲へ行ったり曲を止めたりできるので、他のBOTと比べて利便性が高いのが特徴です。",
    type: "BOT",
    value1:
      "https://discord.com/oauth2/authorize?client_id=1270541180828127365",
    value2: "https://discord.gg/jaQSkdJXpk",
    technologies: ["TypeScript", "Node.js", "Discord.js", "Youtube"],
  },
  {
    id: 3,
    title: "俺のポートフォリオ",
    description: "まぁ、これっすね",
    image: myPortFolio,
    details: "これよね",
    type: "web",
    value1: "https://www.rixu.info",
    value2: "",
    technologies: ["React", "Tailwind CSS", "Vercel"],
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      const projectElements = document.querySelectorAll(".project-card");
      projectElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add("animate-fadeIn");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="my-16">
      <h2 className="text-3xl font-bold text-black-800 mb-4 text-center mr-auto">
        つくったやつ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[1000]"
          style={{ zIndex: 1000 }}
        >
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-sky-800">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              {selectedProject.type !== "web" && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              )}
              {selectedProject.type === "web" && selectedProject.value1 && (
                <div className="mt-4">
                  <iframe
                    src={selectedProject.value1}
                    className="w-full h-[500px] border rounded"
                    title={`${selectedProject.title} Web View`}
                  ></iframe>
                </div>
              )}
              <p className="text-gray-700">{selectedProject.details}</p>

              {selectedProject.technologies && (
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-sky-700 mb-2">
                    使用技術:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm border border-gray-300"
                      >
                        {iconMap[tech] && (
                          <span className="mr-2">{iconMap[tech]}</span>
                        )}
                        <span className="text-gray-700 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.type === "BOT" && (
                <div className="mt-4 flex justify-center gap-4">
                  <a
                    href={selectedProject.value1}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
                  >
                    Invite
                  </a>
                  <a
                    href={selectedProject.value2}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
                  >
                    サポートサーバーへ
                  </a>
                </div>
              )}
              {selectedProject.type === "web" && (
                <div className="mt-4 flex justify-center">
                  <a
                    href={selectedProject.value1}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-500 text-center"
                  >
                    サイトへ
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
