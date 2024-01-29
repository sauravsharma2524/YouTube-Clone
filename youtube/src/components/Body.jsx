import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import VideoCard from "./VideoCard";
import VideoContainer from "./VideoContainer";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        {/* <MainContainer/> */}
        <Outlet/>
      </div>
    </div>
  );
};

export default Body;
