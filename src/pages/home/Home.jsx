import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties"
import Footer from "../../components/Footer/Footer"

const home = () => {
  return (
    <div>home
      <navbar/>
      <header/>
       <div className="homeContainer">
        <featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <propertyList/>
        <h1 className="homeTitle">Homes Guests Love</h1>
        <FeaturedProperties/>
        <mailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default home
