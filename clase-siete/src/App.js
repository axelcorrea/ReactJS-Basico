import "bootstrap/dist/css/bootstrap.css"
import { Container, Carousel } from "react-bootstrap";
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/100?1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>La mejor Todo List del Mundo</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/100?2"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>No te olvides nunca mas una tarea</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/100?3"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>La Todo List Con Mas Onda</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-4 w-50">
        <TodoList />
      </Container>

    </div>
  );
}

export default App;
