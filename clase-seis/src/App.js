import Cabecera from "./components/Cabecera";
import { Provider } from "react-redux";
import theOnlySourceOfTruth from "./store/store";
import ListaProductos from "./components/ListaProductos";
import { Container } from "@mui/material";

function App() {
  return (
    <Provider store={theOnlySourceOfTruth}>
      <Cabecera />
      <Container sx={{ mt: 4 }}>
        <ListaProductos />
      </Container>

    </Provider>
  );
}

export default App;
