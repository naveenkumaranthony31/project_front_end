import logo from "../logo.svg";
import "../App.css";
import { Checkmark } from "react-checkmark";
import { Link } from "react-router-dom";
function PaySuccess() {
  return (
    <div className="cont-payss">
      <div className="row">
        <div className="card">
          <div class="card-body card2">
            <h5 class="card-title">
              <span className="head_pay">Payment Success</span>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              <span className="chekmark">
                <Checkmark size="76px" />
              </span>
            </h6>
            <div className="row rowpay">
              <div className="col-lg-6">
                <p>Payment type</p>
              </div>
              <div className="col-lg-6">
                <p>Net banking</p>
              </div>
              <div className="col-lg-6">
                <p>Bank</p>
              </div>
              <div className="col-lg-6">
                <p>HDFC </p>
              </div>
              <div className="col-lg-6">
                <p>Mobile </p>
              </div>
              <div className="col-lg-6">
                <p>8897131444</p>
              </div>
              <div className="col-lg-6">
                <p>Amount paid</p>
              </div>
              <div className="col-lg-6">
                <p>300 </p>
              </div>
              <div className="col-lg-6">
                <p>Transcation id</p>
              </div>
              <div className="col-lg-6">
                <p>858755975</p>
              </div>
            </div>
          </div>
          <div class="btnpay">
            <Link to="/">
              <button type="reset" className="cancel">
                OK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaySuccess;
