import MainContainer from "./MainContainer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
    <Navbar/>
    <div className="flex">
    <Sidebar/>
    <MainContainer/>
    </div>
    
      {/* Navbar
        toggle menu 
        logo 
        search bar
        user info

      Sidebar 
        
      Main container 
        button list 
        video container 
        video card */}
    </>
  );
}

export default App;
