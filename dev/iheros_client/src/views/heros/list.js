import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from "../../services/api";

import { Form, Container } from "./styles";

class List extends Component {

  constructor(props){
    super(props);
    this.state = {
      heros: [],
      message: ""
    }
  }

  async componentDidMount(){
    const list = await api.get("/api/v1/heros");
    this.setState({heros: list.data});
    console.log(this.state.heros);
  }


  render() {
    return (
      <>
        Lista herois
        <table>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Classe</th>
          <th>Ações</th>
        </tr>
        {this.state.heros.map((hero) => 
          <tr>
            <td>{hero.id}</td>
            <td>{hero.name}</td>
            <td>{hero.hero_class}</td>
            <td><Link to="/">Atualizar</Link> |</td>
            <td><Link to="/delete" pathname={hero.id}>Deletar</Link></td>
          </tr>
        )}
        </table>
      </>
    );
  }
}

export default withRouter(List);