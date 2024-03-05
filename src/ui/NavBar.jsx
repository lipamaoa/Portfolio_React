import { Link } from "react-router-dom";

function NavBar() {
  const Links = [
    { name: "About", link: "/" },
    { name: "Projects", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div>
      <div className="md:flex items-center justify-between bg-stone-200 py-4 md:px-10 px-3">
        <div className="font-semibold text 2-xl cursor-pointer flex items-center">
          <span>😃</span>Filipa Santos.
        </div>
        <ul className="md:flex md:items-center gap-3">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 txt-xl">
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
