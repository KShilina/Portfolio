import "./App.css";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact.jsx";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
