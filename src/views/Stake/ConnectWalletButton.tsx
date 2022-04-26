import { useWeb3Context } from "../../hooks";
import { CURRENCIES } from "../../constants";

interface ConnectWalletButtonProps {
    connect: () => void;
}

function ConnectWalletButton() {
    const { connect } = useWeb3Context();
    return (
        <div className="stake-card-wallet-notification">
            <div className="stake-card-wallet-connect-btn" onClick={connect}>
                <p>Connect Wallet</p>
            </div>
            <p className="stake-card-wallet-desc-text">Connect your wallet to stake {CURRENCIES} tokens!</p>
        </div>
    );
}

export default ConnectWalletButton;
