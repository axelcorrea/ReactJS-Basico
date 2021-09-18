import { AppBar, Toolbar, Typography } from "@mui/material";
import { connect } from "react-redux";

const Cabecera = (props) => {
    return (<AppBar position="static">
        <Toolbar>
            <Typography variant="h4">
                {props.titulo}
            </Typography>
        </Toolbar>
    </AppBar>);
}

function mapStateToProps(state) {
    return {
        titulo: state.titulo
    }
}

//Promuevo a cabecera de componente a container
export default connect(mapStateToProps)(Cabecera);