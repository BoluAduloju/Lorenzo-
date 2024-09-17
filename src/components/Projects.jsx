import { PROJECTS_CONTENT } from "../constants"

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto" id="projects">
      <div className="mb-20">
        <h2 className=" text-2xl lg:text-[40px] tracking-tight text-center mt-20 mb-12 font-medium">Some of Our Projects</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-20">
         {PROJECTS_CONTENT.map((project) => (
          <div key={project.id} className="group relative rounded-3xl mx-4 overflow-hidden">
              <img src={project.image} alt="project.name" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"/>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                 <h3 className="mb-2 text-xl font-medium text-white">{project.name}</h3>
                 <p className="mb-12 p-4 text-white"> {project.description}</p>
              </div>
          </div>
         ))}
        </div>
      </div>
    </section>
  )
}

export default Projects