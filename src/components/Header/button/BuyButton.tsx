import "./button.scss";
import { NavLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import { CURRENCIES } from "../../../constants";

function BuyButton() {
    return (
        <Link component={NavLink} to="/mints">
            <button type="button" className="buy-button">
                Buy {CURRENCIES}
            </button>
        </Link>
    );
}

export default BuyButton;
