import logo from "../logo.svg";
import "../App.css";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocation,
  } from "@fortawesome/free-solid-svg-icons";

function Home() {
    
    let navigate=useNavigate()
let vehicle= "89899898"
      let dropdown= "1"
      let postcode= "620008"

      let onSubmit=() => {
      if (vehicle == "89899898" && dropdown == "1" && postcode == "620008") {
        navigate("/register")
      } else {
        alert("wrong credential");
     }
    
  }

  const data = [
    {
      id: 1,
      serielnumber: 1.,
      title: "Choose a garage",
      para: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea ",
    },
    {
      id: 2.,
      serielnumber: 2.,
      title: "Select services",
      para: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea ",
    },
    {
      id: 3,
      serielnumber: 3.,
      title: "Availability",
      para: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea ",
    },
    {
      id: 4,
      serielnumber: 4.,
      title: "Confirmation",
      para: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea ",
    },
  ];
  return (
    <div>
      {/* nav bar */}
      <nav class="navbar">
        <h1 className="heaad">
          <span className="nav_head">Garage</span><span className="nav_head1">Ez</span>
        </h1>
      </nav>
      {/* second_part */}

      <div className="second_part">
        <div className="second_part_inside">
          <h4>Fixing your car has never been easier.</h4>
          <p>The easiest way to get quotes from local garages.</p>
        </div>
       <form> 
          <div className="input_box">
            <input
              type="text"
           
              placeholder="Enter Vehicle Registration"
              id="box1"
              name="vehicle"
            />
            <input
              type="text"
              placeholder="Select a Service"
            
              className="box2"
            ></input>
            <input
              type="text"
              placeholder="Enter Your Postcode "
           
              className="box3"
            ></input>
            
             <button className="btn btn-primary" onClick={onSubmit}>SEARCH GARAGE</button>
          </div>
        </form>
      </div>
      {/* third part */}

      <div className="third_part">
        <h2 className="head_third_part">How its works</h2>
        <div className="third_part1">
          {data.map((item) => {
            return <Card item={item}></Card>;
          })}
        </div>
      </div>

      {/* foruth_part */}
      <div className="foruth_part">
        <div className="foruth_part1">
          <div>
            <FontAwesomeIcon class="icon_image" icon={faPhone} />
            <h4>Phone</h4>
            <p>A paragraph is a self-contained unit of discourse.</p>
            <p>+0431 536364</p>
          </div>
          <div>
            <FontAwesomeIcon class="icon_image" icon={faEnvelope} />
            <h4>Email</h4>
            <p>A paragraph is a self-contained unit of discourse.</p>
            <p>garageboys@gmail.com</p>
          </div>
          <div>
            <FontAwesomeIcon class="icon_image" icon={faLocation} />
            <h4>Location</h4>
            <p>A paragraph is a self-contained unit of discourse.</p>
            <p>View in google map</p>
          </div>
        </div>
        <div className="foruth_part2">we are provide 24/7 services </div>
       
      </div>
    </div>
  );
        
        }
export default Home;
