import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import About from './components/about';
import Skills from './components/skills';
import Proyects from './components/proyects/proyects';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <Proyects />
      <Footer />
    </div>
  );
}

export default App;
