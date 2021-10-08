import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button} from "reactstrap";

class SubscribeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="subscribe-wrapper">
          <h1 className="heading">Subscribe to newsletter</h1>
          <h3 className="subheading">
            Subscribe to our newsletter and get 10% discount on pineapple
            glasses.
          </h3>

          <form>
            <div className="email-base">
              <input
                className="email"
                type="text"
                placeholder="Type your email address here..."
              />
              <button className="arrow">
                <img src="./assets/images/ic_arrow.svg" alt="arrow" />
              </button>
            </div>

            <div className="terms">
              <input className="checkmark" type="checkbox" />
              <label className="terms-text" for="checkmark">
                I agree to <a href="#">terms of service</a>
              </label>
            </div>
          </form>

          <div className="line"></div>
          <div>
            <Button
              className="buttonStyle btn btn-link btn-outline buttonFacebook"
              href="http://www.facebook.com/"
            >
              <FontAwesomeIcon
                role="button"
                className="icon-style"
                icon={["fab", "facebook-f"]}
              />
            </Button>
            <Button
              className="buttonStyle btn btn-link btn-outline buttonInstagram"
              href="http://instagram.com/"
            >
              <FontAwesomeIcon
                role="button"
                className="icon-style"
                icon={["fab", "instagram"]}
              />
            </Button>
            <Button
              className="buttonStyle btn btn-link btn-outline buttonTwitter"
              href="http://twitter.com/"
            >
              <FontAwesomeIcon
                role="button"
                className="icon-style"
                icon={["fab", "twitter"]}
              />
            </Button>
            <Button
              className="buttonStyle btn btn-link btn-outline buttonYoutube"
              href="http://youtube.com/"
            >
              <FontAwesomeIcon
                role="button"
                className="icon-style"
                icon={["fab", "youtube"]}
              />
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SubscribeComponent;
