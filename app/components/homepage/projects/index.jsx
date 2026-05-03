import SingleProject from './single-project';
import { projectsData } from '@/utils/data/projects-data'; // adjust path if needed

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded">
          Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;