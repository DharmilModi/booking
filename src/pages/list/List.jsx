import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SearchItem } from '../../components/searchItem/SearchItem';
import "./list.scss"
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
// import navbar
 // import Header

const List = () => {

    //Doubt
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)

  return (
    <div>
   //    <Navbar/>
     //  <Header type = 'list'/>
       <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
                <h1 className="listTitle">Search</h1>

                <div className="lsItem">
                  <label className='itemTitle'>Destination</label>
                  <input placeholder='destination' type="text" />
                </div>

                <div className="lsItem">
                  <label className='itemTitle'>Check-in-Date</label>

                  // Doubt
                  {/* <span className="headerSearchText"> {'${format
                     (date[0].startDate, "MM/dd/YYYY")}'
                     to
                     ${format(date[0].endDate, "MM/dd/YYYY")}
                  </span> */}
                </div>

                <div className="lsItemOptions">
                  <h1>Options</h1>

                  <label>Min Price <small> (per night) </small> </label>
                  <input type="number" />

                  <label>Max Price <small>(per night) </small>  </label>
                  <input type="number" />

                  <label>Adult </label>
                  <input type="number" min={1} placeholder='options.adult' />

                  <label>Children </label>
                  <input type="number" min={0} placeholder='options.children' />

                  <label>Room </label>
                  <input type="number" min={1} placeholder='options.room' />

                </div>

                <button>Search</button>

                
              <div className="listResult">
                 <SearchItem/>
                 <SearchItem/>
                 <SearchItem/>
                 <SearchItem/>
                 <SearchItem/>
                 <SearchItem/>
                 <SearchItem/>
                 <SearchItem/>
                 <SearchItem/>
                 <SearchItem/>

              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default List
