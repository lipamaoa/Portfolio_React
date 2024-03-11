import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const Links = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="md:flex items-center justify-between bg-stone-200 py-4 md:px-10 px-3">
      <div>
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-stone-100 text-stone-800 rounded border-2 border-black size-10 text-xl text-semibold  flex items-center justify-center">
            FS
          </span>
          <p className="flex  ">Filipa Santos.</p>
        </Link>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="text-2xl  absolute right-8 top-4 cursor-pointer md:hidden"
      >
        <i
          className={open ? "fa-solid fa-rectangle-xmark" : "fa-solid fa-bars"}
        ></i>
      </div>
      <ul
        className={`md:flex md:flex-row md:items-center  md:pb-0 pb-0 flex flex-col items-center m-2 absolute md:static md:z-auto bg-stone-200 z-[1] right-5 md:w-auto  ease-in ${
          open ? "top-20 opacity-100" : "top-[-490px]"
        } md:opacity-100 `}
      >
        {Links.map((link) => (
          <li key={link.name} className=" txt-xl md:my-0 my-7 mx-5">
            <Link to={link.link} className="hover:text-gray-400 duration-500">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
