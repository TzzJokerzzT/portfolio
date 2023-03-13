const Proyect3 = () => {
  return (
    <div className="card mb-3 card-proyect" style={{ width: "18rem" }}>
      <img
        src="https://i.imgur.com/qwIqiNq.png"
        className="card-img-top"
        alt="Chuck Norris App"
      />
      <div className="card-body">
        <h5 className="card-title">Chuck Norris App</h5>
        <p className="card-text text-start">
          <li>Tecnologies: React, CSS</li>
          <li>State managment: useState, useEffect</li>
        </p>
        <a
          href="https://chucknorris-app.netlify.app"
          className="btn btn-primary"
        >
          Go to the App
        </a>
      </div>
    </div>
  );
};

export default Proyect3;
