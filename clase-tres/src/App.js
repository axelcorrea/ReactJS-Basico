import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Actores from "./components/Actores";
import Home from "./components/Home";
import Peliculas from "./components/Peliculas";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-dark text-light text-center py-4">
        <h1 className="display-1">RMDB : React Movie Database</h1>
      </header>
      <nav className="border shadow">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Peliculas">Peliculas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Actores">Actores</Link>
          </li>
        </ul>
      </nav>
      <main className="container mt-5">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Peliculas" component={Peliculas} />
          <Route path="/Actores" component={Actores} />
        </Switch>
      </main>
    </BrowserRouter >
  );
}

export default App;
