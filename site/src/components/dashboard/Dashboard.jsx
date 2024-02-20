import { Outlet } from "react-router-dom";
import Sidebar from "../navigation/Sidebar"

function Dashboard() {
    return (
        <>
            <div className="px-2 mt-20">
                <div className=" grid-cols-1">
                    <Sidebar />
                </div>
                <div className="col-span-6">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Dashboard;