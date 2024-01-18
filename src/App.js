import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HeadlineCards from "./component/HeadlineCards";
import Food from "./component/Food"
import Category from "./component/Category";

function App() {
  return (
      <div className="px-4 md:px-20">
        <Navbar/>
        <Hero/>
        <HeadlineCards/>
        <Food/>
        <Category/>
      </div>
  );
}

export default App;
