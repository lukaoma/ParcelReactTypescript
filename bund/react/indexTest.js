import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>
      <h1>LARRY2</h1>
      <h2>Hello {this.props.name}</h2>
    </div>;
  }
}

var mountNode = document.getElementById("root");
ReactDOM.render(<HelloMessage name="Jane"/>, mountNode);
