/* eslint-disable no-undef */
/* eslint-disable new-cap */
import QRCode from 'react-qr-code';
import { useState } from 'react';
import { jsPDF } from 'jspdf';
import useForm from '../../hooks/useForm';
import { createProducts } from '../../services/product';
import './style.css';

const QR = () => {
  const { form, handleChange } = useForm({});
  const [show, setShow] = useState(false);
  const [data, setData] = useState(' ');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);

    const res = await createProducts(form);
    const format = JSON.stringify(res);
    setData(format);
  };
  console.log(data);

  const generatePDF = () => {
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [40, 40],
    });
    const base64Image = document.getElementById('qrcode').toDataURL();

    pdf.addImage(base64Image, 'png', 0, 0, 40, 40);
    pdf.save('QR.pdf');
  };

  return (
    <div className="containerQR">

      <div className="containerQR__reference">
        <label htmlFor="name" className="titleqr">Referencia</label>
        <input type="text" className="containerQR__input" name="reference" onChange={handleChange} placeholder="Ingrese referencia" />
      </div>

      <div className="containerQR__brand">
        <label htmlFor="name" className="titleqr">Marca</label>
        <input type="text" className="containerQR__input" name="brand" onChange={handleChange} placeholder="Ingrese marca" />
      </div>

      <div className="containerQR__color">
        <label htmlFor="name" className="titleqr">Color</label>
        <input type="text" className="containerQR__input" name="color" onChange={handleChange} placeholder="Ingrese color" />
      </div>

      <div className="containerQR__size">
        <label htmlFor="name" className="titleqr">Talla</label>
        <input type="text" className="containerQR__input" name="size" onChange={handleChange} placeholder="Ingrese talla" />
      </div>

      <div className="containerQR__amount">
        <label htmlFor="name" className="titleqr">Cantidad en bodega</label>
        <input type="text" className="containerQR__input" name="amount" onChange={handleChange} placeholder="Ingrese cantidad " />
      </div>
      <div className="containerQR__image">
        <label htmlFor="name" className="titleqr">Imagen</label>
        <input type="text" className="containerQR__input" name="image" onChange={handleChange} placeholder="Imagen " />
      </div>
      <button type="submit" className="containerQR__button" onClick={handleSubmit}>Crear</button>
      {show && (
        <> <QRCode
          className="containerQR__component"
          size={256}
          value={data}
          id="qrcode"
        />
          <button type="submit" onClick={generatePDF}>Download pdf</button>
        </>
      )}
    </div>
  );
};

export default QR;
