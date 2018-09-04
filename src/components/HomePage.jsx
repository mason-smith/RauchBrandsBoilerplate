import React from "react";
import HomeHeader from "./home/HomeHeader.jsx";
import HomeCategories from "./home/HomeCategories.jsx";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <HomeHeader />
        <HomeCategories />
      </div>
    );
  }
}

export default HomePage;
