import "./TecnologiesMain.css";

const Tecnologies = () => {
  return (
    <div id="tecnologies">
      <h1 className="tecnologies-header">Tecnologies</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-start">
            <a href="https://github.com/TzzJokerzzT/">
              <img
                src="https://i.imgur.com/ZDnCWpc.png"
                alt="LinkedIn Logo"
                className="img-fluid linkedin-logo"
              ></img>
            </a>
            <a href="https://github.com/TzzJokerzzT/">
              <img
                src="https://i.imgur.com/sAbIgt0.png"
                alt="logo"
                className="img-fluid github-logo"
              ></img>
            </a>
            <a
              className="resume-style"
              href="https://acrobat.adobe.com/link/file/?uri=urn%3Aaaid%3Asc%3AUS%3A300d4d66-f1cc-49d7-81cf-421f4e60d435&filetype=application%2Fpdf&size=60430&viewer%21megaVerb=group-discover"
            >
              <p>Download my resume</p>
            </a>
          </div>
          <div className="col-12 d-flex justify-content-start tecno-styles">
            <p>Main Skills</p>
            <ul>
              <li>Front End development</li>
              <li>HTML, CSS, Javascript, React</li>
            </ul>
          </div>
          <div className="col-12 d-flex justify-content-start tecno-styles">
            <p>Tools/years</p>
            <ul>
              <li>HTML/3</li>
              <li>CSS/3</li>
              <li>Javascript/2</li>
              <li>React/1</li>
              <li>React-Redux/1</li>
              <li>React-Context/1</li>
              <li>Webpack/1</li>
              <li>NPM/1</li>
              <li>Github/2</li>
            </ul>
          </div>
          <div className="col-12 d-flex justify-content-start tecno-styles">
            <p>Lenguages</p>
            <ul>
              <li>Spanish = Native</li>
              <li>English = Intermediate</li>
            </ul>
          </div>
          <div className="col-12 d-flex justify-content-start tecno-styles">
            <p>Also busy with</p>
            <ul>
              <li>Watching anime</li>
              <li>Videos games</li>
              <li>Gym</li>
              <li>Reading</li>
              <li>Electric and Bass Guitar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;
