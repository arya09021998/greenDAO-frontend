import { useSelector } from "react-redux";
import { Grid, Zoom } from "@material-ui/core";
import { trim } from "../../helpers";
import { Skeleton } from "@material-ui/lab";
import { IReduxState } from "../../store/slices/state.interface";

function Menu() {
    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);

    return (
        <div className="dashboard-menus-wrap">
            <Zoom in={true}>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <div className="dashboard-card">
                            <p>ddd</p>
                        </div>
                    </Grid>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <div className="dashboard-card">
                            <p>ddd</p>
                        </div>
                    </Grid>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <div className="dashboard-card">
                            <p>ddd</p>
                        </div>
                    </Grid>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <div className="dashboard-card">
                            <p>ddd</p>
                        </div>
                    </Grid>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <div className="dashboard-card">
                            <p>ddd</p>
                        </div>
                    </Grid>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <div className="dashboard-card">
                            <p>ddd</p>
                        </div>
                    </Grid>
                </Grid>
            </Zoom>
        </div>
    );
}

export default Menu;
