import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tareaActual: "",
            tareas: [
                { id: 1, nombre: "Aprender a nadar", done: false },
                { id: 2, nombre: "Apender a surfear", done: false },
                { id: 3, nombre: "Aprender a Meditar", done: false },
                { id: 4, nombre: "Viajar a la luna", done: false }
            ]
        }
    }

    inputChange(evt) {
        //console.log(evt.target.value);
        this.setState({ tareaActual: evt.target.value });
    }

    eliminarTarea(id) {
        this.setState({
            tareas: this.state.tareas.filter((tarea) => (tarea.id !== id))
        })
    }

    agregarTarea() {
        if (this.state.tareaActual.length > 0) {
            this.setState({
                tareas: [
                    ...this.state.tareas,
                    {
                        id: Math.max(...this.state.tareas.map(t => t.id)) + 1,
                        nombre: this.state.tareaActual,
                        done: false
                    }
                ],
                tareaActual: ""
            })
        }
    }

    render() {
        return (<div>
            <ul className="list-group">
                <li className="list-group-item active">
                    Lista de tareas
                </li>
                <li className="list-group-item">
                    <div className="input-group">
                        <input className="form-control" type="text"
                            placeholder="Ingrese una nueva tarea..."
                            value={this.state.tareaActual}
                            onChange={(evt) => { this.inputChange(evt) }} />

                        <button className="btn btn-outline-primary"
                            onClick={this.agregarTarea.bind(this)}>
                            +
                        </button>
                    </div>
                </li>
                {
                    this.state.tareas.map((tarea) => (
                        <li className="list-group-item" key={tarea.id}>
                            {tarea.nombre}
                            <button className="btn btn-danger float-end"
                                onClick={this.eliminarTarea.bind(this, tarea.id)}>
                                &#128465;
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>);
    }
}

export default TodoList;
