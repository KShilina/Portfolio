import "./projects.scss";
import { projects } from "../../data";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="p-header">Personal Projects</h1>
      <div className="p-wrapper">
        {projects.map((p) => (
          <div className="project-details" key={p.title}>
            <img src={p.img} alt="p-img" className="p-img" />
            <div className="p-title">{p.title}</div>
            <p className="p-desc">{p.description}</p>
            <div className="p-buttons">
              <button
                className="p-button"
                onClick={() => window.open(p.code, "_blank")}
              >
                Code
              </button>
              <button
                className="p-button"
                onClick={() => window.open(p.demo, "_blank")}
              >
                Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
