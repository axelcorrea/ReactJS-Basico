import { useState } from "react";
import { Form, InputGroup, ListGroup, Button } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const TodoList = (props) => {

    const [tareas, setTareas] = useState([
        { id: 1, nombre: "Ir a la pileta dos", done: false },
        { id: 2, nombre: "Backup semanal", done: false },
        { id: 3, nombre: "Verificar Notificaciones del server", done: false }
    ]);

    const [input, setInput] = useState("");

    return (<>
        <ListGroup>
            <ListGroup.Item active className="text-center">
                <Fade top>
                    <h5>Lista de Tareas</h5>
                </Fade>
            </ListGroup.Item>
            <ListGroup.Item>
                <InputGroup>
                    <Form.Control placeholder="Ingrese una tarea..."
                        value={input}
                        onChange={(evt) => {
                            setInput(evt.target.value)
                        }} />
                    <Button disabled={input.length === 0} onClick={() => {
                        setTareas([
                            ...tareas,
                            {
                                id: Math.max(...tareas.map((t => t.id))) + 1,
                                nombre: input,
                                done: false
                            }
                        ]);
                        setInput("");
                    }}>+</Button>
                </InputGroup>
            </ListGroup.Item>
            {
                tareas.map((tarea) => (
                    <ListGroup.Item key={tarea.id}>
                        <Fade left>
                            {tarea.nombre}
                            <Button className="float-end" onClick={() => {
                                setTareas(tareas.filter((t) => (t.id !== tarea.id)))
                            }}>
                                &#128465;
                            </Button>
                        </Fade>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>

    </>);
}



export default TodoList;