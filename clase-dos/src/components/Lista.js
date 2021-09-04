import "bootstrap/dist/css/bootstrap.css";

/*const alumnos = [
    <li className="list-group-item"> Milton Amado </li>,
    <li className="list-group-item"> Jonatan Severo </li>,
    <li className="list-group-item"> Ezequiel Lopez</li>,
    <li className="list-group-item"> Augusto Soria</li>,
    <li className="list-group-item"> Alejandro Emanuel</li>,
    <li className="list-group-item"> Axel Correa</li>
]*/
const alumnos = [
    { id: 1, nombre: "Jonatan Severo" },
    { id: 2, nombre: "Esteban Calabria" },
    { id: 3, nombre: "Gustavo Bearzi" },
    { id: 4, nombre: "Pablo Curreti" }
]

const Lista = (props) => {
    return (<>
        <h4>Mis alumnos son:</h4>
        <ul className="list-group">
            {
                //LLavecitas ()=>{} pongo el return
                /*alumnos.map((alumno) => {
                    return <li key={alumno.id} className="list-group-item">
                        {alumno.nombre}
                    </li>
                })*/
                //()=>() va return implicito
                alumnos.map((alumno, index) => (
                    <li key={index} className="list-group-item">
                        {alumno.nombre}
                    </li>
                ))
            }
        </ul>
    </>)
}

export default Lista;