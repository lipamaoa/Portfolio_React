// import AppLayout from "./ui/AppLayout";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./ui/Home";
// import AboutMe from "./ui/AboutMe";
// import Projects from "./ui/Projects";

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <AboutMe /> },
//       { path: "/projects", element: <Projects /> },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import Header from "../src/ui/Header";
import Home from "../src/ui/Home";
import AboutMe from "../src/ui/AboutMe";
import Projects from "../src/ui/Projects";
import Footer from "../src/ui/Footer";

function App() {
  return (
    <div className="bg-slate-50 grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="">
        <Home />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
