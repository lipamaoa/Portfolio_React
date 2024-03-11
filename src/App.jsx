import AppLayout from "./ui/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import AboutMe from "./ui/AboutMe";
import Projects from "./ui/Projects";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutMe /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
