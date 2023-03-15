import "./Proyect.css";
const Proyect2 = () => {
  return (
    <div className="card mb-3 card-proyect" style={{ width: "18rem" }}>
      <img
        src="https://i.imgur.com/ia16SC3.png"
        className="card-img-top"
        alt="ToDo App"
      />
      <div className="card-body">
        <h5 className="card-title">ToDo App</h5>
        <p className="card-text text-start">
          <li>Technologies: React, CSS</li>
          <li>State managment: useState, useEffect</li>
        </p>
        <a
          href="https://todo-apps-react.netlify.app"
          className="btn btn-primary"
        >
          Go to the App
        </a>
      </div>
    </div>
  );
};

export default Proyect2;
