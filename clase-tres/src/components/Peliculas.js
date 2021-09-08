import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import axios from "axios";

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = { results: [] }
    }

    componentDidMount() {
        const url = "https://api.themoviedb.org/3/movie/popular?api_key=54ffed57deb5a7a8688be4de3007e578&language=en-US&page=1";
        axios.get(url).then((resp) => {
            this.setState({ results: resp.data.results })
        })
    }

    render() {
        return (<>
            <h1>Listado de Peliculas</h1>
            <div className="row">
                {
                    this.state.results.map((peli, index) => (
                        <div className="col-sm-3 mb-3">
                            <div className="card w-100 h-100" key={index}>
                                <img src={"https://image.tmdb.org/t/p/w500" + peli.poster_path}
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">{peli.original_title}</h4>
                                    <p className="card-text">
                                        {peli.overview}
                                    </p>
                                </div>
                                <div className="card-footer text-end">
                                    <button onClick={() => { alert("se muestra el trailer") }}
                                        className="btn btn-primary">
                                        &#127909; Ver Trailer...
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>);
    }
}

export default Peliculas;