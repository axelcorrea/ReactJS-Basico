import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class PieDePagina extends Component {
    render() {
        return (
            <footer className="alert alert-warning fixed-bottom text-end">
                <h3>{this.props.texto}</h3>
            </footer>
        );
    }
}

export default PieDePagina;