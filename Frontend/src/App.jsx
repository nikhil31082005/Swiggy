import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ApiCalling from "./components/ApiCalling";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <>
      <Header/>
      {/* <Body/> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;