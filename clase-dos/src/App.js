import Cabecera from "./components/Cabecera";
import PieDePagina from "./components/PieDePagina";
import "bootstrap/dist/css/bootstrap.css";
import Lista from "./components/Lista";

function App() {
  return (
    <div>
      <Cabecera titulo="Hola Mundo React" subtitulo="Con Componentes" />
      <main className="container w-50">
        <Lista />
      </main>
      <PieDePagina texto="CopyRight 2021. Educacion IT." />
    </div>
  );
}

export default App;
