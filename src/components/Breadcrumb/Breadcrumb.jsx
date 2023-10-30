/* eslint-disable react/jsx-indent */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // arreglo de la ruta

  return (
    <section className="breadCrumb ">
      {pathnames.map((name, index) => {
        console.log(index, "index");
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`; //  la ruta
        const isLast = index === pathnames.length - 1; // true or false
        return (
          <span key={name} className="algo">
            {pathnames.length > 0 && name === "home" ? null : (
              <Link to="/home " className="algo">
                Home {">  "}
              </Link>
            )}
            {isLast ? (
              name
            ) : (
              <Link to={routeTo} className="breadCrumb__link">
                {name}
              </Link>
            )}
          </span>
        );
      })}
    </section>
  );
};

export default Breadcrumbs;
