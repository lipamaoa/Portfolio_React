import { useEffect, useState } from "react";

function Header() {
  const Links = [
    { name: "About", ref: "#aboutMe" },
    { name: "Projects", ref: "#projects" },
    { name: "Contact", ref: "#contact" },
  ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log(scrollTop);
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 lg:px-0 px-5 sm:px-6 z-[999] duration-300 ${
        scrolled ? "bg-slate-50" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-2">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="bg-stone-100 text-stone-800 rounded border-2 border-black size-10 text-xl text-semibold  flex items-center justify-center">
              FS
            </span>
            <p className="flex  ">Filipa Santos.</p>
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-2xl  absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <i
            className={
              open ? "fa-solid fa-rectangle-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </div>
        <ul
          className={`md:flex md:flex-row md:items-center  md:pb-0 pb-0 flex flex-col items-center m-2 absolute md:static md:z-auto  z-[1] right-5 md:w-auto  ease-in ${
            open ? "top-20 bg-stone-50" : "top-[-490px]"
          } md:opacity-100 `}
        >
          {Links.map((link) => (
            <li key={link.name} className=" txt-xl md:my-0 my-7 mx-5">
              <a href={link.ref} className="hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
