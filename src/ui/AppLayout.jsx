import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="divide-y-8 divide-red-300">
      <Header />
      <div className=" bg-stone-400 ">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
