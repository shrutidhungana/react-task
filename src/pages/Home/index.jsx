import React from "react";
import Banner from "../../components/Banner";
import BannerImage from "../../assets/banner.jpeg";

const Home = () => {
  return (
    <Banner
      imageUrl={BannerImage}
      slogan="Welcome to TrendHive "
      message="Here you will get different Accesories and all thing you need"
      buttonLabel="Explore Now"
      buttonLink="/products"
    />
  );
};

export default Home;
