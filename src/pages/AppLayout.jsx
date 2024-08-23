import Header from "../components/Header";
import Body from "../components/Body";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
