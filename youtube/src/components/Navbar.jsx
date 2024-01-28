import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils.js/AppSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const ToggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex sticky  z-50 top-0 w-full xl:h-20 bg-white items-center justify-between">
      <div className="flex px-2 xl:p-5 items-center justify-between">
        <img
          onClick={() => ToggleMenuHandler()}
          className="xl:h-7 hidden xl:cursor-pointer px-3 top-0   xl:block  xl:rounded-full"
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
          alt="menu"
        />
        <img
          className="h-16"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          alt="logo"
        />
      </div>
      <div className="flex xl:w-[40vw] w-[10vw] ">
        <input
          className=" hidden xl:block xl:h-10 w-[50vw] p-1 xl:py-4 xl:px-4 text-lg outline-none border-[1px] border-r-0 rounded-l-full border-gray-400"
          type="text"
          placeholder="Search"
        />
        <img
          className=" relative left-12 xl:left-0 xl:w-16 h-9 xl:h-10 xl:rounded-r-full xl:border-[1px]  border-gray-400"
          src="https://as1.ftcdn.net/v2/jpg/03/25/73/68/1000_F_325736897_lyouuiCkWI59SZAPGPLZ5OWQjw2Gw4qY.jpg"
          alt=""
        />
      </div>

      <img
        className="h-9 px-5"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        alt="user info"
      />
    </div>
  );
};

export default Navbar;
