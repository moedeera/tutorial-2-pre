import { useContext } from "react";
import { siteContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { navLinks, setPage, page } = useContext(siteContext);
  return (
    <div className="navbar">
      {navLinks.map((link) => (
        <Link
          key={link.id}
          to={link.link}
          onClick={() => {
            setPage(link.name);
            localStorage.setItem("page", link.name);
          }}
          className={link.name === page ? "selected" : ""}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
