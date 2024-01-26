import MainContainer from "./MainContainer";
import { Provider } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import store from "../utils.js/store";

function App() {
  return (
    <Provider store={store} >
      <>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <MainContainer />
        </div>
      </>
    </Provider>
  );
}

export default App;
