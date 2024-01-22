import { useContext } from "react";
import { siteContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { navLinks } = useContext(siteContext);
  return (
    <div className="footer">
      <h3>footer</h3>
      {navLinks.map((link) => (
        <Link key={link.id} to={link.link}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};
