import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import About from "./components/about/About";
import LatestCar from "./components/latestCar/LatestCar";
import PopularCars from "./components/popularCars/PopularCars";
import WhichCars from "./components/whichCars/WhichCars";
import News from "./components/news/News";
import Faq from "./components/faq/Faq";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <WhatWeDo />
      <About />
      <LatestCar />
      <PopularCars />
      <WhichCars />
      <News />
      <Faq />
    </>
  );
}

export default App;
