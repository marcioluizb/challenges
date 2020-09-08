import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { logout } from "../services/auth";


class Logout extends Component {

  componentDidMount(){
    logout();
    this.props.history.push("/");
  }

  render() {
    return (
      <>
      </>
    );
  }
}

export default withRouter(Logout);