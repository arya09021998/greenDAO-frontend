import "./portfolio.scss";
import { Grid, Zoom } from "@material-ui/core";
import { CURRENCIES } from "../../constants";
import goldCoupon from "../../assets/images/gold-coupon.png";

interface LiquidityProps {
    isConnected: Boolean;
}

function Liquidity({ isConnected }: LiquidityProps) {
    const disconnect_value = "-";
    const usd = "$";
    const liquidity = CURRENCIES + "-kUSDT LP";
    const asset = 50.03 + " " + CURRENCIES;
    const usd_value = usd + 500.1;

    return (
        <div className="portfolio-contents">
            <p className="portfolio-type">Mint Pass</p>
            <div className="contents">
                <article className="portfolio-img">
                    <img src={goldCoupon} alt="img" />
                </article>
                <section className="portfolio-info">
                    <Zoom in={true}>
                        <Grid container spacing={2}>
                            <Grid item lg={4} md={6} sm={6} xs={6}>
                                <Grid item container direction="column" spacing={1}>
                                    <Grid item>
                                        <p className="portfolio-title">LIQUIDITY</p>
                                    </Grid>
                                    <Grid item>
                                        <span className="portfolio-value">{isConnected ? liquidity : disconnect_value}</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={6}>
                                <Grid item container direction="column" spacing={1}>
                                    <Grid item>
                                        <p className="portfolio-title">ASSET</p>
                                    </Grid>
                                    <Grid item>
                                        <span className="portfolio-value">{isConnected ? asset : disconnect_value}</span>
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

export default Liquidity;
