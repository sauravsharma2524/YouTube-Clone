import MainContainer from "./MainContainer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
