import { Component } from "react";

import "./button.css";

class Button extends Component {

  render() {
    const { text, bcolor, color } = this.props

    const buttonColor = {
      backgroundColor: bcolor,
      color: color,
    }

    return (
      <button style={buttonColor}><span>{text}</span></button>
    );
  }
}

export default Button;
