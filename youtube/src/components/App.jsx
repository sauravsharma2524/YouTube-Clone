import MainContainer from "./MainContainer";
import { Provider } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import store from "../utils.js/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./WatchPage";
import VideoContainer from "./VideoContainer";
import Body from "./Body";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/> ,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <>
        <Navbar />
        {/* <Body/> */}
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
