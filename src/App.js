import "./App.scss";
import { Navbar, Hero } from "./components";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Exprience from "./components/Exprience/Exprience";
import Footer from "./components/Footer/Footer";
// import Hire from "./components/Hire/Hire";
import Services from "./components/Services/Services";
// import Slider from "./components/Slider/Slider";
// import Testimonials from "./components/Testimonials/Testimonials";
import Work from "./components/Work/Work";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Exprience />
      {/* <Hire /> */}
      <Work />
      {/* <Testimonials /> */}
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
