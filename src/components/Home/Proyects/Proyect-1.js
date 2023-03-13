import "./Proyect.css";

const Proyect1 = () => {
  return (
    <div className="card mb-3 card-proyect" style={{ width: "18rem" }}>
      <img
        src="https://i.imgur.com/9hfQbPM.png"
        className="card-img-top"
        alt="Rick & Morty App"
      />
      <div className="card-body">
        <h5 className="card-title">Rick & Morty App</h5>
        <p className="card-text text-start">
          <li>Tecnologies: React, Bootstrap, React-Component.</li>
          <li>State managment: React-Context</li>
        </p>
        <a
          href="https://rick-and-morty-wi.netlify.app"
          className="btn btn-primary"
        >
          Go to the App
        </a>
      </div>
    </div>
  );
};

export default Proyect1;
