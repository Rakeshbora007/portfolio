import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbaar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Service from "./components/servicePage/Service";
const App = () => {
  return <div>
    <Cursor />
    <section>
      <Navbar />
      <Hero />
    </section>
    <section><Parallax type={"services"} /></section>
    <section><Service /></section>
    <section><Parallax type={"portfolio"} /></section>
    <Portfolio />
    <section><Contact /></section>
  </div>;
};

export default App;
