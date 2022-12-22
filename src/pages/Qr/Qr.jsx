import QRCode from 'react-qr-code';
import { useState } from 'react';
import useForm from '../../hooks/useForm';
import { createProducts } from '../../services/product';
import './style.css';

const QR = () => {
  const { form, handleChange } = useForm({});
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);

    const res = await createProducts(form);
    const format = JSON.stringify(res);
    setData(format);

    console.log(data);
  };
  return (
    <div className="containerQR">
      <div className="containerQR__reference">
        <label htmlFor="name" className="titleqr">Referencia</label>
        <input type="text" className="input__textName" name="reference" onChange={handleChange} placeholder="Ingrese referencia" />
      </div>

      <div className="containerQR__brand">
        <label htmlFor="name" className="titleqr">Marca</label>
        <input type="text" className="input__textName" name="brand" onChange={handleChange} placeholder="Ingrese marca" />
      </div>

      <div className="containerQR__color">
        <label htmlFor="name" className="titleqr">Color</label>
        <input type="email" className="input__textName" name="color" onChange={handleChange} placeholder="Ingrese color" />
      </div>

      <div className="containerQR__size">
        <label htmlFor="name" className="titleqr">Talla</label>
        <input type="text" className="input__textName" name="size" onChange={handleChange} placeholder="Ingrese talla" />
      </div>

      <div className="containerQR__amount">
        <label htmlFor="name" className="titleqr">Cantidad en bodega</label>
        <input type="password" className="input__textName" name="amount" onChange={handleChange} placeholder="Ingrese cantidad " />
      </div>
      <div className="containerQR__image">
        <label htmlFor="name" className="titleqr">Imagen</label>
        <input type="password" className="input__textName" name="image" onChange={handleChange} placeholder="Imagen " />
      </div>
      <button type="submit" className="containerQR__button" onClick={handleSubmit}>Crear</button>
      {show && (
        <> <QRCode
          size={256}
          value={data}
        />;
        </>
      )}
    </div>
  );
};

export default QR;
