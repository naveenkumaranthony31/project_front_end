import logo from '../logo.svg';
import '../App.css';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register_from from './RegisterForm';
function Register() {
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
    <div>
      <Register_from></Register_from>
    </div>
    </div>
  );
}

export default Register;
