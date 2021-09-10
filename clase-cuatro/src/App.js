import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div className="navbar bg-primary text-light shadow">
        <h1 className="navbar-brand ms-3 display-1">
          &#128203; Bienvenidos a la mejor Todo List del Mundo...
        </h1>
      </div>
      <main className="container w-50 mt-5">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
