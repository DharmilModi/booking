import "./mailList.css"

const mailList = () => {
  return (
    <div>
      <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email"></input>
            <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default mailList
