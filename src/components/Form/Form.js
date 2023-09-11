import { Component } from "react";

import "./form.css";
import Button from "../Button/Button";

class Form extends Component {
  render() {
    return (
      <div>
        <div className="form">
          <div className="input-text">
            <span>Name: </span>
          </div>
          <input type="text"></input>
        </div>
        <div className="form">
          <div className="input-text">
            <span>Gender: </span>
          </div>
          <input type="radio" id="Male" name="gender" value="Male"></input>
          <label for="Male">Male</label>
          <input type="radio" id="Female" name="gender" value="Female"></input>
          <label for="Female">Female</label>
        </div>
        <div className="form">
          <div className="input-text">
            <span>Date of birth: </span>
          </div>
          <input type="date"></input>
        </div>
        <div className="form">
          <div className="input-text">
            <span>Email: </span>
          </div>
          <input type="text"></input>
        </div>
        <div className="form">
          <div className="input-text">
            <span>Mobile: </span>
          </div>
          <input type="text"></input>
        </div>
        <div className="form">
          <div className="input-text">
            <span>Customer ID: </span>
          </div>
          <input type="text"></input>
        </div>
        <div className="form">
          <div className="input-text">
            <span>Membership: </span>
          </div>
          <input type="radio" id="Classic" name="membership" value="Classic"></input>
          <label for="Classic">Classic</label>
          <input type="radio" id="Silver" name="membership" value="Silver"></input>
          <label for="Silver">Silver</label>
          <input type="radio" id="Gold" name="membership" value="Gold"></input>
          <label for="Gold">Gold</label>
        </div>
        <div className="submit">
          <Button text="cancel" />
          <Button text="Submit" bcolor="#1abc9c" color="#fff" />
        </div>
      </div>
    );
  }
}

export default Form;
