import "./index.scss"

import { Header } from "./Components/Header/Header";
import { Home } from "./Pages/home/Home";
import { SidebarNavigation } from "./Components/SidebarNavigation/SidebarNavigation";
import { useState } from "react";

function App() {

  const [isSidebarOpen, setOpenSiderbar] = useState(false);

   const opensiderbar =()=> {
    setOpenSiderbar(true)
   }
   const closesidebar =()=> {
    setOpenSiderbar(false)
   }

  return (
    <>
    <SidebarNavigation  isOpen={isSidebarOpen} Onclose={closesidebar}/>
    <Header onpenSidebar={opensiderbar}/>
    <Home/>
    </>
  );
}

export default App;
