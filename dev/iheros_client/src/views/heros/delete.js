import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";



class Delete extends Component {

  componentDidMount(){
    
    this.props.history.push("/list");
  }

  render() {
    return (
      <>
      </>
    );
  }
}

export default withRouter(Delete);