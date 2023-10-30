/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../../features/product/productSlice";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Header from "../../components/Header/Header";
import "./style.css";

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.products.users?.profile);
  const userProfileP = useSelector(
    (state) => state.products.users?.profile?.profilePicture
  );
  const currentDataUser = useSelector((state) => state.products.currentUser);

  const breadcrumbs = [
    { label: "Home", path: "/home" },
    { label: "Sección 1", path: "/products_DB" },
    { label: "Subsección 1.1", path: "/seccion1//editProfile" },
  ];

  useEffect(() => {
    if (currentDataUser) {
      dispatch(currentUser(currentDataUser));
    } else {
      dispatch(currentUser(username));
    }
  }, []);

  const handleSubmitProduct = (e) => {
    e.preventDefault(e);
    navigate("/products_DB");
  };

  const handleSubmitQr = (e) => {
    e.preventDefault(e);
    if (username.role === "ADMIN") {
      navigate("/generate_qr");
    } else {
      navigate("/notAllow");
    }
  };

  const handleQrRead = (e) => {
    e.preventDefault(e);
    navigate("/readQrCode");
  };

  const handleEditProfile = (e) => {
    e.preventDefault(e);
    navigate("/editProfile");
  };

  const handleAddEmployees = (e) => {
    e.preventDefault(e);
    navigate("/addEmployees");
  };

  const handleViewEmployee = (e) => {
    e.preventDefault();
    navigate("/viewEmployee");
  };
  return (
    <>
      <Header className="menuOptionTop__header" />
      <section className="menuOptionTop">
        {currentDataUser ? (
          <>
            <img
              src={currentDataUser.profilePicture}
              alt=""
              className="menuOptionTop__header--image"
            />
            <h2 className="menuOption__username">
              Hola {currentDataUser?.userName}
            </h2>
          </>
        ) : (
          <>
            <img
              src={userProfileP}
              alt=""
              className="menuOptionTop__header--image"
            />
            <h2 className="menuOption__username">Hola {username.userName}</h2>
          </>
        )}
      </section>
      <Breadcrumb />
      <section className="menuOption">
        <div className="menuOption__buttons">
          <p className="menuOption__buttons-title">Productos</p>
          <button
            type="submit"
            className="menuOption__add"
            onClick={handleQrRead}
          >
            Escanea el codigo QR
          </button>
          <button
            type="submit"
            className="menuOption__qr"
            onClick={handleSubmitQr}
          >
            Agregar productos
          </button>
          <button
            type="submit"
            className="menuOption__list"
            onClick={handleSubmitProduct}
          >
            Listar todos los productos
          </button>
        </div>
      </section>

      <section className="menuOption__employees">
        <div className="menuOption___buttons--employees">
          <p className="menuOption__buttons-title">Empleados</p>
          <button
            type="submit"
            className="menuOption__add--employee"
            onClick={handleAddEmployees}
          >
            Agregar Empleados a Jyk Sports
          </button>
          <button
            type="submit"
            className="menuOption__add--employee"
            onClick={handleViewEmployee}
          >
            Empleados de Jyk Sports
          </button>
        </div>
      </section>

      <section className="menuOption__profile">
        <p className="menuOption__buttons-title">Perfil</p>
        <button
          type="submit"
          className="menuOption__add--profile"
          onClick={handleEditProfile}
        >
          Editar perfil
        </button>
      </section>
    </>
  );
};
export default Menu;
