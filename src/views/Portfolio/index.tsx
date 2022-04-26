import "./portfolio.scss";
import { useState } from "react";
import { useWeb3Context } from "../../hooks";

import Stake from "./Stake";
import Liquidity from "./Liquidity";
import NFT from "./NFT";

function Portfolio() {
    const { connected } = useWeb3Context();
    const [isConnected] = useState(connected);

    return (
        <div className="portfolio-view">
            <section className="portfolio-card">
                <h1>Stake</h1>
                <Stake isConnected={isConnected} />
            </section>
            <section className="portfolio-card">
                <h1>Your Liquidity</h1>
                <Liquidity isConnected={isConnected} />
            </section>
            <section className="portfolio-card">
                <h1>My NFT</h1>
                <NFT isConnected={isConnected} />
            </section>
        </div>
    );
}

export default Portfolio;
