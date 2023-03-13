import "./App.css";
import ButtonTop from "./components/ButtonTop";
import Header from "./components/Header/Header";
import Contact from "./components/Home/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Home/Proyects";
import Tecnologies from "./components/Home/Tecnologies";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Projects />
      <Tecnologies />
      <Contact />
      <ButtonTop />
    </div>
  );
};

export default App;
