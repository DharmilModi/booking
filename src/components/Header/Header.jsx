import "./header.css"
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faMountainCity, faPerson, faPlane, faSearch, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

 const Header = () => { 
   const [openDate, setOpenDate] = useState(false)
   const [date, setDate] = useState([
   {
     startDate: new Date(),
     endDate: null,
     key: 'selection'
   }
 ]);

   const [destination, setDestination] = useState("")
   const [openOptions, setOpenOptions] = useState(false)
   const [options, setOptions] = useState({
      adult :1,
      children:1,
      room:1
});

   const handleOption = (name,operation) => 
      setOptions((prev) => {
         return {
            ...prev,
            [name] : operation === 'i' ? options[name] +1 :options[name] -1,
         };
      });

   const navigate = useNavigate()

   const handleSearch = () =>{
       navigate("/hotels", {state:{destination,date,options}})
   }
      
  return (
     <div className="header">
        <div className="container">
         <div className="headerList">

            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car-Rentals</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faMountainCity} />
            <span>Attractions</span>  
            </div>
            </div>

            <h1>Ski the Swiss Alps this winter</h1>
            <p>Discover Switzerland's best ski resorts and plan the perfect holiday</p>
            <div className="headerBtn">Sign In/Register</div>
            
            <div className="headerSearch">

               <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className = "headerIcon" /> 
                  <input type="text"
                   placeholder="Where are you going?" 
                   className="headerSearchInput" />
                   onChange = {e => setDestination(e.target.value)}
               </div>

                 <div className="headerSearchItem"> 
                  <FontAwesomeIcon icon={faCalendarDays} className = "headerIcon" /> 
                  <span onClick={()=> setOpenDate(!openDate)}></span>
                  {/* <span className="headerSearchText"> {'${format
                     (date[0].startDate, "MM/dd/YYYY")}'
                     to
                     ${format(date[0].endDate, "MM/dd/YYYY")}
                  </span> */}

                  {  openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                 }

                  </div>
                 

                 <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className = "headerIcon" /> 
                  <span onClick= {()=> setOpenOptions(!openOptions)}
                   className="headerSearchText">
                  {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                  </span>

                   { openOptions && < div className="options">

                     <div className="optionItem">
                        <div className="optionCounter">
                       <span className="optionText">Adult</span>
                        </div>
                          <button 
                          disabled = {options.adult <= 1}
                          className="optionCounterButton" 
                          onClick={() => handleOption("adult", "d")}> - 
                          </button>

                          <span className="optionCounterNumber">{options.adult}</span>
                          <button 
                           className="optionCounterButton"
                           onClick={() => handleOption("adult", "i")}> + 
                           </button>
                          
                     </div>

                     <div className="optionItem">
                        <div className="optionCounter">
                       <span className="optionText">Children</span>
                       </div>
                          <button 
                            disabled = {options.children <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("Children", "d")}> - 
                           </button>
                          <span className="optionCounterNumber">{options.children}</span>
                          <button className="optionCounterButton" onClick={() => handleOption("Children", "i")}> + </button>
                     </div>

                     <div className="optionItem">
                     <div className="optionCounter">
                       <span className="optionText">Room</span>
                      </div>
                     
                          <button 
                           disabled = {options.room <= 1}
                           className="optionCounterButton"
                           onClick={() => handleOption("room", "d")}> - 
                           </button>
                          <span className="optionCounterNumber">{options.room}</span>
                          <button className="optionCounterButton" onClick={() => handleOption("room", "i")}> + </button>
                     </div>

                  </div>}
               </div>


               <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faSearch} className = "headerIcon" /> 
                  <button onClick={handleSearch} className="headerBtn">
                     Search
                  </button>
               </div>


            </div>
         </div>
     </div>
  )
}

export default Header