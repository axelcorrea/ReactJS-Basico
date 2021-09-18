import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { connect } from "react-redux";

const ListaProductos = (props) => {
    //const nombres = ["Juan", "Pedro", "Ramiro", "Luciano", "Augusto", "Esteban"];

    return (<Grid container>
        {
            props.productos.map((p) => (
                <Grid key={p.id} xs={3} item>
                    <Card sx={{ m: 1 }}>
                        <CardMedia
                            component="img"
                            image={p.imagen} />
                        <CardContent>
                            <Typography variant="h5">{p.nombre}</Typography>
                            <Typography variant="body2">{p.descripcion}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{ ml: "auto" }}>Comprar</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))
        }
    </Grid>);
}

function mapStateToProps(state) {
    return {
        productos: state.productos
    }
}

export default connect(mapStateToProps)(ListaProductos);