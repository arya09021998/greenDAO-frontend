import { Grid, Zoom } from "@material-ui/core";
import "./dashboard.scss";

import Info from "./Info";
import Menu from "./Menu";
import BuyBackFund from "./BuyBackFund";
import BuyBackPoolStates from "./BuyBackPoolStates";
import Announcements from "./Announcements";

function Dashboard() {
    return (
        <div className="dashboard-view">
            <Info />
            <Menu />
            <Zoom in={true}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={12} sm={6} xs={12}>
                        <Grid item container direction="column" spacing={2}>
                            <Grid item>
                                <BuyBackFund />
                            </Grid>
                            <Grid item>
                                <BuyBackPoolStates />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6} md={12} sm={6} xs={12}>
                        <Announcements />
                    </Grid>
                </Grid>
            </Zoom>
        </div>
    );
}

export default Dashboard;
