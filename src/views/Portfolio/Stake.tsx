import "./portfolio.scss";
import { Grid, Zoom } from "@material-ui/core";
import { STAKING_TOKEN } from "../../constants";
import goldHand from "../../assets/images/gold-hand.png";

interface StakeProps {
    isConnected: Boolean;
}

function Stake({ isConnected }: StakeProps) {
    const disconnect_value = "-";
    const usd = "$";
    const staked = 53.781662;
    const earned = 1.781662 + " " + STAKING_TOKEN;
    const usd_value = usd + 500.1;

    return (
        <div className="portfolio-contents">
            <p className="portfolio-type">NFT</p>
            <div className="contents">
                <article className="portfolio-img">
                    <img src={goldHand} alt="img" />
                </article>
                <section className="portfolio-info">
                    <Zoom in={true}>
                        <Grid container spacing={2}>
                            <Grid item lg={4} md={6} sm={6} xs={6}>
                                <Grid item container direction="column" spacing={1}>
                                    <Grid item>
                                        <p className="portfolio-title">STAKED</p>
                                    </Grid>
                                    <Grid item>
                                        <span className="portfolio-value">{isConnected ? staked : disconnect_value}</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={6}>
                                <Grid item container direction="column" spacing={1}>
                                    <Grid item>
                                        <p className="portfolio-title">EARNED</p>
                                    </Grid>
                                    <Grid item>
                                        <span className="portfolio-value">{isConnected ? earned : disconnect_value}</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={6}>
                                <Grid item container direction="column" spacing={1}>
                                    <Grid item>
                                        <p className="portfolio-title">USD VALUE</p>
                                    </Grid>
                                    <Grid item>
                                        <span className="portfolio-value">{isConnected ? usd_value : disconnect_value}</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Zoom>
                </section>
            </div>
        </div>
    );
}

export default Stake;
