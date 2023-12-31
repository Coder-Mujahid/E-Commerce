import Nav from "./Component/Nav";
import Home from "./Component/Home";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <div>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
