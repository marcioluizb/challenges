import React, { Component } from "react";
import { Link } from "react-router-dom";


class Index extends Component {
  
  render() {
    return (
      <>
        <p>Heros</p>
        <Link to="register">Cadastrar Herói</Link>
      </>
    );
  }
}

export default Index;