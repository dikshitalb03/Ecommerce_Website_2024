import { useContext } from "react"
import Category from "../../Components/Category/Category"
import HeroSection from "../../Components/HeroSection/HeroSection"
import HomePageProductCard from "../../Components/HomePageProductCard/HomePageProductCard"
import Layout from "../../Components/Layout/Layout"
import Testimonial from "../../Components/Testimonial/Testimonial"
import Track from "../../Components/Track/Track"
import Loader from "../../Components/loader/Loader"


const HomePage = () => {
  
  return (
      <Layout>
          <HeroSection/>
          <Category/>
          <HomePageProductCard/>
          <Track/>
          <Testimonial/>
          <Loader/>
      </Layout>
  );
}

export default HomePage;
