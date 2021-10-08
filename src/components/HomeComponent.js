import React, { Component } from "react";
import Header from "./HeaderComponent";
import SubscribeComponent from "./SubscribeComponent";
import { Image } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <React.Fragment className="wrapper">
        <div className="text-container">
          <Header />
          <div
            className="image-container-mobile"
            style={{ backgroundImage: "url('assets/images/image_summer.png')" }}
          >
            <SubscribeComponent />
          </div>
        </div>

        <div
          className="image-container"
          style={{ backgroundImage: "url('assets/images/image_summer.png')" }}
        ></div>
      </React.Fragment>
    );
  }
}

export default Home;
