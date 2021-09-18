import { createStore } from "redux";
import reducer from "../reducer/reducer";

const defaultData = {
    titulo: "(S)Mi primera aplicacion de React con Material UI",
    productos: [
        { id: 1, nombre: "Detergente", descripcion: "Te limpia todo", imagen: "https://picsum.photos/300?1" },
        { id: 2, nombre: "Lavandina", descripcion: "Te limpia y desinfecta", imagen: "https://picsum.photos/300?2" },
        { id: 3, nombre: "Alcohol en Gel", descripcion: "Te desinfeca todo", imagen: "https://picsum.photos/300?3" },
        { id: 4, nombre: "Perfumina", descripcion: "No lo conocia", imagen: "https://picsum.photos/300?4" },
        { id: 5, nombre: "Guantes", descripcion: "Protegen tus manos", imagen: "https://picsum.photos/300?5" },
        { id: 6, nombre: "Papel Higienico", descripcion: "Que no te agarre la paddemia sin papel", imagen: "https://picsum.photos/300?6" }

    ]
}

export default createStore(reducer, defaultData);
