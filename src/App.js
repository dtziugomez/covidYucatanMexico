import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      municipios: []
    };
  }

  fetchMunicipios = () => {
    fetch(
      "https://api.apify.com/v2/key-value-stores/8uKXvLNo1rQA7Tt9B/records/LATEST?disableRedirect=1"
    )
      .then(response => response.json())
      .then(municipios => {
        this.setState({ municipios: municipios.State });
      });
  };

  componentDidMount() {
    this.fetchMunicipios();
  }
  render() {
    return (
      <>
        {this.state.municipios.length > 0 && (
          <ul>
            {this.state.municipios.map(municipio => (
              <li key={municipio.clave}>
                Municipio:{municipio.nombre}-Confirmados:{municipio.confirmados}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
