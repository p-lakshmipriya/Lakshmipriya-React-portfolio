import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title subTitle="" title="Services" />
        <Programs />
        <Title subTitle="My Work" title="Samples" />
        <Work />
        <Title subTitle="Contact" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
export default App;
