import { Link, Grid, Zoom } from "@material-ui/core";

function BuyBackPoolStates() {
    return (
        <section className="dashboard-contents-wrap bg pool">
            <article className="title">Buy Back Pool States</article>
            <div className="value">
                <Zoom in={true}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item container direction="row" justifyContent="space-between" alignItems="center">
                            <span className="token-name">USDT</span>
                            <strong className="token-value">$43,959,180</strong>
                        </Grid>
                        <Grid item container direction="row" justifyContent="space-between" alignItems="center">
                            <span className="token-name">GRC - USDT</span>
                            <strong className="token-value">533,318,064</strong>
                        </Grid>
                        <Grid item container direction="row" justifyContent="space-between" alignItems="center">
                            <span className="token-name">KLAY - USDT</span>
                            <strong className="token-value">221,095,762</strong>
                        </Grid>
                        <Grid item container direction="row" justifyContent="space-between" alignItems="center">
                            <span className="token-name">GRC - GDAI</span>
                            <strong className="token-value">1,406,509</strong>
                        </Grid>
                    </Grid>
                </Zoom>
            </div>
            <div className="dashboard-btn-box">
                <button type="button" className="dashboard-btn gold">
                    Buy GRC
                </button>
                <Link href="javascript:;" target="blank" rel="noopener noreferrer" className="link">
                    <button type="button" className="dashboard-btn">
                        View on Klaytnscope
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default BuyBackPoolStates;
