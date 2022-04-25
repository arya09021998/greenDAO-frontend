import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link, Grid, Zoom } from "@material-ui/core";
import { trim } from "../../helpers";
import { Skeleton } from "@material-ui/lab";
import { IReduxState } from "../../store/slices/state.interface";

import ImgDashboard from "../../assets/images/ImgDashboard.png";
import ImgPortfolio from "../../assets/images/ImgPortfolio.png";
import ImgStakes from "../../assets/images/ImgStakes.png";
import ImgBoostedStakes from "../../assets/images/ImgBoostedStakes.png";
import ImgMint from "../../assets/images/ImgMint.png";
import ImgNFT from "../../assets/images/ImgNFT.png";

function Menu() {
    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);

    return (
        <section className="dashboard-menus-wrap">
            <Zoom in={true}>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <Link component={NavLink} to="/dashboard">
                            <div className="dashboard-card">
                                <img className="card-img" src={ImgDashboard} alt="img" />
                                <p className="card-text">Dashboard</p>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <Link component={NavLink} to="/portfolio">
                            <div className="dashboard-card">
                                <img className="card-img" src={ImgPortfolio} alt="img" />
                                <p className="card-text">Portfolio</p>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <Link component={NavLink} to="/stake">
                            <div className="dashboard-card">
                                <img className="card-img" src={ImgStakes} alt="img" />
                                <p className="card-text">Stakes</p>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <Link component={NavLink} to="/boostedStake">
                            <div className="dashboard-card">
                                <img className="card-img" src={ImgBoostedStakes} alt="img" />
                                <p className="card-text">BoostedStakes</p>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <Link component={NavLink} to="/mints">
                            <div className="dashboard-card">
                                <img className="card-img" src={ImgMint} alt="img" />
                                <p className="card-text">Mint</p>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item lg={2} md={4} sm={4} xs={6}>
                        <Link component={NavLink} to="/nftMarketPlace">
                            <div className="dashboard-card">
                                <img className="card-img" src={ImgNFT} alt="img" />
                                <p className="card-text">NFT</p>
                            </div>
                        </Link>
                    </Grid>
                </Grid>
            </Zoom>
        </section>
    );
}

export default Menu;
