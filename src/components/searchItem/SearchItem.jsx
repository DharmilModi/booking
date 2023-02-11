import "./searchItem.css"

export const SearchItem = () => {
  return (
    
    <div className=" SearchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max300/85115609.webp?k=90816ff754bd5f7e63b76bd431f4971784bc1ed8f70801f8a882818771f00115&o=" alt="" className="siImg" />       
      <div className="siDesc">
        <h1 className="title">Modi Resorts</h1>
        <span className="siDist">500m from center</span>
        <span className="siTaxi">Free Airport Taxi</span>
        <span className="siSubtitle">Studio Resort with Air Conditioning</span>
        <span className="siArea">Entire Resort - 2 Bathroom - 50m2 - 2Bedroom</span>
        <span className="siCancellation">Free Cancellation</span>
        <span className="siClosing">You can cancel later, so lock in this great deal today!</span>
      </div>


      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        
        <div className="siDetailTexts">
          <div className="siPrice">Rs.2240/-</div>
          <div className="siTax">Includes taxes and fees</div>
          <div className="siCheckButton">See Availability</div>
        </div>

      </div>
    </div>
  )
}
