import "./App.css";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Proyects from "./components/proyects/proyects";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
