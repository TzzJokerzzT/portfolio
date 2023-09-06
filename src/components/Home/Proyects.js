import "./ProyectMain.css";
import Proyect1 from "./Proyects/Proyect-1";
import Proyect2 from "./Proyects/Proyect-2";
import Proyect3 from "./Proyects/Proyect-3";
import Proyect4 from "./Proyects/Proyect-4";
import Proyect5 from "./Proyects/Proyect-5";
import Proyect6 from "./Proyects/Proyect-6";

const Projects = () => {
  return (
    <div id="projects" className="ms-5">
      <h1 className="proyect-header ms-5">Projects</h1>
      <div className="container text-center">
        <div className="row  flex-column flex-sm-row d-flex">
          <div className="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center mb-3">
            <Proyect1 />
          </div>
          <div className="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center">
            <Proyect2 />
          </div>
          <div className="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center">
            {" "}
            <Proyect3 />
          </div>
          <div className="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center">
            {" "}
            <Proyect4 />
          </div>
          <div className="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center">
            {" "}
            <Proyect5 />
          </div>
          <div className="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center">
            {" "}
            <Proyect6 />
          </div>
        </div>
      </div>
      <h1 className="proyect-header ms-5">Collaborative Project</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 collaborative-style">
            <ul>
              <li>
                Software de presentación de proyectos en empresa constructora.
              </li>
              <li>
                Software para el manejo de citas a nivel medico y de consulta
                utilizando bots ( chat-bubble)
              </li>
              <li>
                Software para la recolección de información personal en el
                sector salud.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
