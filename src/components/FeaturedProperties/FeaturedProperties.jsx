import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div>

       <div className="fp">
        <div className="fpItem">
         <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=f3889222c82f4a8e3783dddb5f1cc04d6140eeb2d5cb8297817a15aacfe4d191&o=&s=1" alt="" className="fpImg" />
          <div className="fpDetails">
         <span className="fpName">Modi Mansion </span>
         <span className="fpPlace">Mumbai</span>
         <span className="fpPrice">Rs.1200/-</span>
         <div className="fpRating">
            <button>8.7</button>
            <span>Excellent</span>
            </div>
            </div>
         </div>
       </div>

       <div className="fp">
        <div className="fpItem">
         <img src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=bc461f3aff9a66c15ddae3b3a7e10a44f6aea550cb89ce292cec7ca0b4ccecdb&o=&s=1" alt="" className="fpImg" />
           <div className="fpDetails">
         <span className="fpName">Modi Hotels </span>
         <span className="fpPlace">Mumbai</span>
         <span className="fpPrice">Rs.2200/-</span>
         <div className="fpRating">
            <button>8.7</button>
            <span>Excellent</span>
            </div>
            </div>
         </div>
       </div>

       <div className="fp">
        <div className="fpItem">
         <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="fpImg" />
         <div className="fpDetails">
         <span className="fpName">Modi Villas </span>
         <span className="fpPlace">Mumbai</span>
         <span className="fpPrice">Rs.3200/-</span>
         <div className="fpRating">
            <button>9.7</button>
            <span>Excellent</span>
            </div>
            </div>
         </div>
       </div>

    </div>
  )
}

export default FeaturedProperties
