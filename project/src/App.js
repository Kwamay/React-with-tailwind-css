import React from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <Navbar />
      <Intro />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
