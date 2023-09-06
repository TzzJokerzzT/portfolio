import "./ContactMain.css";

const Contact = () => {
  const handlerClick = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <div id="contact" className="ms-5">
      <h1 className="contact-header ms-5">Contact</h1>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-12 email-styles">
            <p>Email: Alexjesus-4856@hotmail.com</p>
          </div>
          <div className="col-12 mb-2 twitter-styles">
            <button
              className="twitter-button"
              onClick={(e) =>
                handlerClick(e, "https://twitter.com/Alex_Buelvas92")
              }
            >
              Twitter
              <img
                src="https://i.imgur.com/zgavxu2.png"
                alt="Twitter Logo"
              ></img>
            </button>
          </div>
          <div className="col-12 mb-2 instagram-styles">
            <button
              className="instagram-button"
              onClick={(e) =>
                handlerClick(e, "https://www.instagram.com/alex_buelvas/")
              }
            >
              Instagram
              <img
                src="https://i.imgur.com/bRmKMyV.png"
                alt="Twitter Logo"
              ></img>
            </button>
          </div>
          <div className="col-12 mb-3 facebook-styles">
            <button
              className="facebook-button"
              onClick={(e) =>
                handlerClick(e, "https://www.facebook.com/Alex.D.Buelvas")
              }
            >
              Facebook
              <img
                src="https://i.imgur.com/DUIUG6y.png"
                alt="Facebook Logo"
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
