import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="  sticky">
      <div className="flex text-center  py-1 font-normal text-base justify-center flex-col">
        <div className="px-7 text-center h-10 w-60 py-2  my-0 cursor-pointer hover:bg-gray-100 rounded-xl">
          Home
        </div>
        <div className="px-7 py-2  my-0 cursor-pointer hover:bg-gray-100 rounded-xl">
          Shorts
        </div>
        <div className="px-7 py-2  my-0 cursor-pointer hover:bg-gray-100 rounded-xl ">
          Subscriptions
        </div>
        <span>________________________</span>
      </div>
      <div className="flex  text-center py-1 font-normal text-base justify-center flex-col">
        <div className="px-7 py-2  my-0 cursor-pointer hover:bg-gray-100 rounded-xl ">
          Your Channel
        </div>
        <div className="px-7 py-2  my-0 cursor-pointer hover:bg-gray-100 rounded-xl ">
          History
        </div>
        <div className="px-7 py-2  my-0 cursor-pointer hover:bg-gray-100 rounded-xl ">
          Your videos
        </div>
        <div className="px-6 py-2  my-0 cursor-pointer hover:bg-gray-100 rounded-xl ">
          Watch later
        </div>
        <div className="px-6 py-2  my-0 cursor-pointer hover:bg-gray-100 rounded-xl ">
          Downloads
        </div>
        <div className="px-6 py-2  my-0 cursor-pointer hover:bg-gray-100 rounded-xl ">
          Liked videos
        </div>
        <span>________________________</span>
      </div>
    </div>
  );
};

export default Sidebar;
