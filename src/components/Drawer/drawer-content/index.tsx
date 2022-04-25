import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import Social from "./social";
import PortfolioIcon from "../../../assets/icons/portfolio.svg";
import StakeIcon from "../../../assets/icons/stake.svg";
import BoostedStakeIcon from "../../../assets/icons/boostedStakeIcon.svg";
import MintIcon from "../../../assets/icons/mint.svg";
import NFTMarketPlace from "../../../assets/icons/nftMarketPlace.svg";
// import BondIcon from "../../../assets/icons/bond.svg";
import DashboardIcon from "../../../assets/icons/dashboard.svg";
// import { trim, shorten } from "../../../helpers";
import { useAddress } from "../../../hooks";
import useBonds from "../../../hooks/bonds";
import { Link } from "@material-ui/core";
// import { Skeleton } from "@material-ui/lab";
import "./drawer-content.scss";
import DocsIcon from "../../../assets/icons/stake.svg";
import GlobeIcon from "../../../assets/icons/wonderglobe.svg";
import classnames from "classnames";

function NavContent() {
    const [isActive] = useState();
    // const address = useAddress();
    // const { bonds } = useBonds();

    const checkPage = useCallback((location: any, page: string): boolean => {
        const currentPath = location.pathname.replace("/", "");

        if (currentPath.indexOf("dashboard") >= 0 && page === "dashboard") return true;
        if (currentPath.indexOf("portfolio") >= 0 && page === "portfolio") return true;
        if (currentPath.indexOf("stake") >= 0 && page === "stake") return true;
        if (currentPath.indexOf("boostedStake") >= 0 && page === "boostedStake") return true;
        if (currentPath.indexOf("mints") >= 0 && page === "mints") return true;
        if (currentPath.indexOf("nftMarketPlace") >= 0 && page === "nftMarketPlace") return true;
        return false;
    }, []);

    return (
        <section className="sidebar">
            <header className="menu-list">
                <nav className="menu-nav">
                    <Link
                        component={NavLink}
                        to="/dashboard"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "dashboard");
                        }}
                        className={classnames("button-nav-menu", { active: isActive })}
                    >
                        <div className="menu-item">
                            <div className="menu-icon">
                                <img alt="menu-icon" src={DashboardIcon} />
                            </div>
                            <p>Dashboard</p>
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/portfolio"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "portfolio");
                        }}
                        className={classnames("button-nav-menu", { active: isActive })}
                    >
                        <div className="menu-item">
                            <div className="menu-icon">
                                <img alt="menu-icon" src={PortfolioIcon} />
                            </div>
                            <p>Portfolio</p>
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/stake"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "stake");
                        }}
                        className={classnames("button-nav-menu", { active: isActive })}
                    >
                        <div className="menu-item">
                            <div className="menu-icon">
                                <img alt="menu-icon" src={StakeIcon} />
                            </div>
                            <p>Stake</p>
                        </div>
                    </Link>
                    <Link
                        component={NavLink}
                        to="/boostedStake"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "boostedStake");
                        }}
                        className={classnames("button-nav-menu", { active: isActive })}
                    >
                        <div className="menu-item">
                            <div className="menu-icon">
                                <img alt="menu-icon" src={BoostedStakeIcon} />
                            </div>
                            <p>Boosted Stake</p>
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        id="bond-nav"
                        to="/mints"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "mints");
                        }}
                        className={classnames("button-nav-menu", { active: isActive })}
                    >
                        <div className="menu-item">
                            <div className="menu-icon">
                                <img alt="menu-icon" src={MintIcon} />
                            </div>
                            <p>Mint</p>
                        </div>
                    </Link>
                    <Link
                        component={NavLink}
                        to="/nftMarketPlace"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "nftMarketPlace");
                        }}
                        className={classnames("button-nav-menu", { active: isActive })}
                    >
                        <div className="menu-item">
                            <div className="menu-icon">
                                <img alt="menu-icon" src={NFTMarketPlace} />
                            </div>
                            <p>NFT Market Place</p>
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/calculator"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "calculator");
                        }}
                        className={classnames("button-nav-menu", { active: isActive })}
                    >
                        <div className="menu-item">
                            <img alt="" src={GlobeIcon} />
                            <p>Calculator</p>
                        </div>
                    </Link>
                </nav>
            </header>
            <footer className="menu-list footer">
                <nav className="menu-nav">
                    <Link href="javascript:;" className="button-nav-menu">
                        <div className="menu-item">
                            <div className="menu-icon">
                                <img alt="menu-icon" src={DocsIcon} />
                            </div>
                            <p>Docs</p>
                        </div>
                    </Link>
                </nav>
            </footer>
            <Social />
        </section>
    );
}

export default NavContent;
