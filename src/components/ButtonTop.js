import "./ButtonMain.css";
import { Link } from "react-scroll";

const ButtonTop = () => {
  return (
    <div className="top-button">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="nav-link"
        >
          <img src="https://i.imgur.com/ZJztRhS.png" alt="Top button" />
        </Link>
    </div>
  );
};

export default ButtonTop;
