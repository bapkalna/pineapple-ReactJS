import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";

const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const comEmail = (val) => /^[^\s@]+@[^\s@]+\.co$/.test(val);
const required = (val) => val && val.length;

class SubscribeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      agree: false,
      touched: {
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const target = event.target;
    var value = target.value;
    const email = target.email;
    this.setState({
      [email]: value,
    });
  }
  
  validate() {
    let emailError = "";

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!this.state.email || reg.test(this.state.email) === false) {
      emailError = "Please provide a valid email address";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    return true;
  }

  submit() {
    if (this.validate()) {
      this.props.onSubmit([this.state]);
      this.setState([this.state]);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="subscribe-wrapper">
          <form onSubmit={(values) => this.handleSubmit(values)}>
            <h1 className="heading">Subscribe to newsletter</h1>
            <h3 className="subheading">
              Subscribe to our newsletter and get 10% discount on pineapple
              glasses.
            </h3>
            <div className="email-base">
              <input
                className="email"
                type="email"
                placeholder="Type your email address here..."
                onfocus="this.placeholder = ''"
              />

              <button
                className="arrow"
                type="submit"
                onClick={() => this.submit()}
              >
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
              onClick={this.onChange}
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
