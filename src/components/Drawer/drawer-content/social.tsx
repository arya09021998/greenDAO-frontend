import { Link } from "@material-ui/core";
import TwitterIcon from "../../../assets/icons/twitter.svg";
import MediumIcon from "../../../assets/icons/medium.svg";
import TelegramIcon from "../../../assets/icons/telegram.svg";
import DiscordIcon from "../../../assets/icons/discord.svg";

export default function Social() {
    return (
        <div className="sns">
            <Link href="javascript:;">
                <img src={TwitterIcon} alt="twitter" />
            </Link>
            <Link href="javascript:;">
                <img src={MediumIcon} alt="medium" />
            </Link>
            <Link href="javascript:;">
                <img src={TelegramIcon} alt="telegram" />
            </Link>
            <Link href="javascript:;">
                <img src={DiscordIcon} alt="discord" />
            </Link>
        </div>
    );
}
