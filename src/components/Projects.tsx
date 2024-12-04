import React, { useState } from "react";
import { X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "プロジェクト1",
    description: "プロジェクト1の簡単な説明",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "プロジェクト1の詳細な説明をここに記述します。使用した技術、課題、解決策などを含めます。",
  },
  {
    id: 2,
    title: "プロジェクト2",
    description: "プロジェクト2の簡単な説明",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "プロジェクト2の詳細な説明をここに記述します。使用した技術、課題、解決策などを含めます。",
  },
  // 他のプロジェクトを追加
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="my-16">
      <h2 className="text-3xl font-bold text-sky-800 mb-4">プロジェクト</h2>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
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
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <p className="text-gray-700">{selectedProject.details}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
