import "./Home.css";

const Home = () => {
  return (
    <div class="container home-style-intro" id="home">
      <div class="row">
        <div class="col-sm-12 text-center col-md-12 text-md-start mb-3 mt-3">
          <p className="dev-text">Hi I'm Alexis Buelvas</p>
        </div>
        <div class="col-sm-12 text-center col-md-9 text-md-start">
          <p className="intro-text">
            Front End React developer heavily influenced by videos games,
            interaction and tatto desing. Addicted to music, video games, anime
            and tattos.
          </p>
          <br />
          <p className="city-text">From Colombia, based in Cartagena</p>
        </div>
        <div class="col-5">
          <img
            src="https://i.imgur.com/vLU23uR.jpg"
            alt="Profile pic"
            className="img-fluid profile-picture"
          />
        </div>
        <div class="col-7 d-flex justify-content-end">
          <img
            src="https://i.imgur.com/W0S6G1P.png"
            alt="Git Logo"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
