import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import { Form, Container } from "./styles";

class Register extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      name: "",
      hero_class: "",
      lat: "",
      lng: "",
      error: ""
    };
  }

  handleRegister = async e => {
    e.preventDefault();
    const { name, hero_class, lat, lng } = this.state;
    if (!name || !hero_class || !lat || !lng) {
      this.setState({ error: "Por favor preencha todos os campos!" });
    } else {
      try {
        const response = await api.post("/api/v1/heros", { name, hero_class, lat, lng });
        this.props.history.push("/list");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema ao tentar cadastrar o usuário"
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleRegister}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome do herói"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Classe"
            onChange={e => this.setState({ hero_class: e.target.value })}
          />
          <input
            type="text"
            placeholder="Latitude"
            onChange={e => this.setState({ lat: e.target.value })}
          />
          <input
            type="text"
            placeholder="Longitude"
            onChange={e => this.setState({ lng: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
        </Form>
      </Container>
    );
  }
}

export default withRouter(Register);