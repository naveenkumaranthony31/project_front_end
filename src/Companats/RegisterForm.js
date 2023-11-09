import logo from "../logo.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Register_from() {
  return (
    <section class="re_section">
      <div class="container re-container">
        <div class="row">
          <div class="col-12 ">
            <div class="card" style={{ bordeRadius: "15px" }}>
              <div class="card-body">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="p-5">
                      {/* vehicle information */}
                      <h3 class="fw-normal mb-5" style={{ color: "	#000000" }}>
                        vehicle Infomation
                      </h3>

                      <div class="col-lg-6 ">
                        <lable>Vehicle Number</lable>
                        <br></br>
                        <input type="text" className="re_int" />
                      </div>
                      <div class="col-lg-6">
                        <lable>Year</lable>
                        <br></br>
                        <input type="text" className="re_int" />
                      </div>
                      <div class="col-lg-6">
                        <lable>Milage</lable>
                        <br></br>
                        <input type="text" className="re_int" />
                      </div>
                      <div class="col-lg-6">
                        <lable>Make</lable>
                        <br></br>
                        <input type="text" className="re_int" />
                      </div>
                      <div class="col-lg-6">
                        <lable>Model</lable>
                        <br></br>
                        <input type="text" className="re_int" />
                      </div>
                      <div class="col-lg-6">
                        <lable>Mot Date</lable>
                        <br></br>
                        <input type="text" className="re_int" />
                      </div>
                      <div class="col-lg-6">
                        <lable>Tax Date</lable>
                        <br></br>
                        <input type="text" className="re_int" />
                      </div>
                      <div class="col-lg-6">
                        <lable>VIN Number </lable>
                        <br></br>
                        <input type="text" className="re_int" />
                      </div>
                    </div>
                    {/* checkbox */}
                    <div className="chekbox">
                      <ul class="list-group list-group-light">
                        <li class="list-group-item">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            aria-label="..."
                          />
                          MOT
                          <span className="list-check">$30</span>
                        </li>
                        <li class="list-group-item">
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            aria-label="..."
                          />
                          Interim Service<span className="list-check">$50</span>
                        </li>
                        <li class="list-group-item">
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            aria-label="..."
                          />
                          Full Service<span className="list-check">$100</span>
                        </li>
                        <li class="list-group-item">
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            aria-label="..."
                          />
                          Major Service<span className="list-check">$80</span>
                        </li>
                        <li class="list-group-item">
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            aria-label="..."
                          />
                          Diagnostics<span className="list-check">$70</span>
                        </li>
                        <li class="list-group-item">
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            id="form2Example3c"
                            value=""
                            aria-label="..."
                          />
                          Collect & Delivery
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Contact */}

                  <div class="col-lg-6" style={{ color: "	#000000" }}>
                    <div class="p-5">
                      <h3 class="fw-normal mb-5" style={{ color: "	#000000" }}>
                        Contact Details
                      </h3>

                      <div class="col-lg-6 ">
                        <lable>
                          Customer Name <span style={{ color: "red" }}>*</span>
                        </lable>
                        <br></br>
                        <input type="text" className="re_int" />
                      </div>

                      <div class="col-lg-6 ">
                        <lable>
                          Customer Phone Number
                          <span style={{ color: "red" }}>*</span>
                        </lable>
                        <br></br>
                        <input type="text" className="re_int" />
                      </div>
                      <div class="col-lg-6 ">
                        <lable>
                          Customer Email Id{" "}
                          <span style={{ color: "red" }}>*</span>
                        </lable>
                        <br></br>
                        <input type="email" className="re_int" />
                      </div>

                      <div class="col-lg-6 ">
                        <lable>
                          Date And Time<span style={{ color: "red" }}>*</span>
                        </lable>
                        <br></br>
                        <input type="date" className="re_int" />
                      </div>

                      <div class="col-lg-6 ">
                        <lable>
                          Postcode<span style={{ color: "red" }}>*</span>
                        </lable>
                        <br></br>
                        <input type="number" className="re_int" />
                      </div>

                      <div class="col-lg-6">
                        <lable>
                          Address<span style={{ color: "red" }}>*</span>
                        </lable>
                        <br></br>
                        <input
                          type="text"
                          className="re_int"
                          style={{ height: "80px" }}
                        />
                      </div>
                      <div class="col-lg-6 ">
                        <lable>
                          Enter Other Service Details (Optional)
                          <span style={{ color: "red" }}>*</span>
                        </lable>
                        <br></br>
                        <input
                          type="text"
                          className="re_int"
                          style={{ height: "80px" }}
                        />
                      </div>

                      <div class="form-check d-flex justify-content-start mb-4 pb-3">
                        <input
                          class="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          class="form-check-label text-white"
                          for="form2Example3"
                        >
                          I do accept the{" "}
                          <a href="#!" class="text-white">
                            <u>Terms and Conditions</u>
                          </a>{" "}
                          of your site.
                        </label>
                      </div>
                      
                      <Link to="/payment"><button
                        type="button"
                        class="btn btn-primary"
                        data-mdb-ripple-color="dark"
                      >
                        Book slot
                      </button></Link> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Register_from;
