import "./App.css";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
