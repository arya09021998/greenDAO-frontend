import "./dashboard.scss";

import Info from "./Info";
import Menu from "./Menu";

function Dashboard() {
    return (
        <div className="dashboard-view">
            <Info />
            <Menu />
        </div>
    );
}

export default Dashboard;
