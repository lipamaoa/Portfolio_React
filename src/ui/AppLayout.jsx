import Footer from "./Footer";
import NavBar from "./NavBar";

import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid  h-screen grid-rows-[auto_1fr_auto]">
      <NavBar />
      <div className=" bg-yellow-200 overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
