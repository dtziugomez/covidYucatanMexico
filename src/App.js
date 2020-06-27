import React, { Component } from "react";
import "./App.css";
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
          <div className="container">
            <h1 className="text-center">Covid-19 Yucatan México </h1>
            <table className="table table-primary table-responsive">
              <thead>
                <tr>
                  <th scope="col" className="bg-secondary">
                    Municipio
                  </th>
                  <th scope="col" className="bg-danger">
                    Confirmados
                  </th>
                  <th scope="col" className="bg-success">
                    Recuperados
                  </th>
                  <th scope="col" className="bg-dark">
                    Defunciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.municipios.map(municipio => (
                  <tr key={municipio.clave}>
                    <td>{municipio.nombre}</td>
                    <td>{municipio.confirmados}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          // <ul>
          //   {this.state.municipios.map(municipio => (
          //     <li key={municipio.clave}>
          //       Municipio:{municipio.nombre}-Confirmados:{municipio.confirmados}
          //     </li>
          //   ))}
          // </ul>
        )}
      </>
    );
  }
}
