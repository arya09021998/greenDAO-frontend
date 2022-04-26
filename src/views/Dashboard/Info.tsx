import { useSelector } from "react-redux";
import { Grid, Zoom } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { trim } from "../../helpers";
import { CURRENCIES } from "../../constants";
import { IReduxState } from "../../store/slices/state.interface";
import { IAppSlice } from "../../store/slices/app-slice";

function Info() {
    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const app = useSelector<IReduxState, IAppSlice>(state => state.app);

    const trimmedStakingAPY = trim(app.stakingAPY * 100, 1);

    return (
        <section className="dashboard-infos-wrap">
            <Zoom in={true}>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">{CURRENCIES} Price</p>
                            <p className="card-value">{isAppLoading ? <Skeleton width="100px" /> : `$${trim(app.marketPrice, 2)}`}</p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">Backing per ${CURRENCIES}</p>
                            <p className="card-value">
                                {isAppLoading ? (
                                    <Skeleton width="250px" />
                                ) : (
                                    new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        maximumFractionDigits: 0,
                                        minimumFractionDigits: 0,
                                    }).format(app.rfv)
                                )}
                            </p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">Current Index</p>
                            <p className="card-value">
                                {isAppLoading ? <Skeleton width="250px" /> : trim(Number(app.currentIndex), 2)} {CURRENCIES}
                            </p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">Market Cap</p>
                            <p className="card-value">
                                {isAppLoading ? (
                                    <Skeleton width="160px" />
                                ) : (
                                    new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        maximumFractionDigits: 0,
                                        minimumFractionDigits: 0,
                                    }).format(app.marketCap)
                                )}
                            </p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">TVL</p>
                            <p className="card-value">
                                {isAppLoading ? (
                                    <Skeleton width="250px" />
                                ) : (
                                    new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        maximumFractionDigits: 0,
                                        minimumFractionDigits: 0,
                                    }).format(app.stakingTVL)
                                )}
                            </p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">Treasury Balance</p>
                            <p className="card-value">
                                {isAppLoading ? (
                                    <Skeleton width="250px" />
                                ) : (
                                    new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        maximumFractionDigits: 0,
                                        minimumFractionDigits: 0,
                                    }).format(app.treasuryBalance)
                                )}
                            </p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">APY</p>
                            <p className="card-value">{isAppLoading ? <Skeleton width="250px" /> : `${new Intl.NumberFormat("en-US").format(Number(trimmedStakingAPY))}%`}</p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">WPY</p>
                            <p className="card-value">{isAppLoading ? <Skeleton width="250px" /> : `${new Intl.NumberFormat("en-US").format(Number("119.3199"))}%`}</p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">Runway</p>
                            <p className="card-value">{isAppLoading ? <Skeleton width="250px" /> : `${trim(Number(app.runway), 1)} Days`}</p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">Buy Back Fund</p>
                            <p className="card-value">{isAppLoading ? <Skeleton width="250px" /> : "-"}</p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">Total Burned</p>
                            <p className="card-value">{isAppLoading ? <Skeleton width="250px" /> : "-"}</p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <div className="dashboard-card">
                            <p className="card-title">Supply (Staked/Total)</p>
                            <p className="card-value">
                                {isAppLoading ? (
                                    <Skeleton width="250px" />
                                ) : (
                                    `${new Intl.NumberFormat("en-US", {
                                        maximumFractionDigits: 0,
                                        minimumFractionDigits: 0,
                                    }).format(app.circSupply)}
                                    /
                                    ${new Intl.NumberFormat("en-US", {
                                        maximumFractionDigits: 0,
                                        minimumFractionDigits: 0,
                                    }).format(app.totalSupply)}`
                                )}
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Zoom>
        </section>
    );
}

export default Info;
