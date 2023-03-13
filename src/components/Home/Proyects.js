import "./ProyectMain.css";
import Proyect1 from "./Proyects/Proyect-1";
import Proyect2 from "./Proyects/Proyect-2";
import Proyect3 from "./Proyects/Proyect-3";
import Proyect4 from "./Proyects/Proyect-4";
import Proyect5 from "./Proyects/Proyect-5";
import Proyect6 from "./Proyects/Proyect-6";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="proyect-header">Proyects</h1>
      <div class="container text-center">
        <div class="row  flex-column flex-sm-row d-flex">
          <div class="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center mb-3">
            <Proyect1 />
          </div>
          <div class="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center">
            <Proyect2 />
          </div>
          <div class="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center">
            {" "}
            <Proyect3 />
          </div>
          <div class="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center">
            {" "}
            <Proyect4 />
          </div>
          <div class="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center">
            {" "}
            <Proyect5 />
          </div>
          <div class="col-sm-12 align-items-center justify-content-center col-md-6 d-flex align-items-center justify-content-center col-lg-4 d-flex align-items-center justify-content-center">
            {" "}
            <Proyect6 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
