import Featured from "../../components/Featured/Featured"
import PropertyList from "../../components/PropertyList/PropertyList"
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties"
import Footer from "../../components/Footer/Footer"
import "./Home.css"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"

const home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
       <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes Guests Love</h1>
        <FeaturedProperties/>
        <mailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default home
