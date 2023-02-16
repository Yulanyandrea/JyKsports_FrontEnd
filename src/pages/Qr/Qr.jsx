/* eslint-disable no-unused-vars */
import QRCode from 'react-qr-code';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import useForm from '../../hooks/useForm';
import { createProducts } from '../../services/product';
import './style.css';

const QR = () => {
  const url = process.env.REACT_APP_BASE_URL;
  const qrCodeRef = useRef(null);

  const navigate = useNavigate();
  const { form, handleChange } = useForm({});
  const [show, setShow] = useState(false);
  // qr code
  const [data, setData] = useState(' ');
  // upload image
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);
  // validation
  const [dataError, setDataError] = useState('*Este campo es requerido');
  // modal
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const file = files[0];
    setImage(file);
  };

  const handleModal = async (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);
    if (Object.keys(form).length < 5) {
      setIsOpen(!isOpen);
    } else {
      setDataError('');
      const formData = new FormData();
      formData.append('file', image);
      // connect to back end
      const options = {
        method: 'POST',
        body: formData,
      };
      const response = await fetch(`${url}/upload/file`, options);
      const dataImage = await response.json();
      setImg(dataImage.url);
      try {
        const res = await createProducts({ ...form, image: dataImage.url });
        const format = JSON.stringify(res);
        setData(format);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleDownload = async () => {
    const svg = qrCodeRef.current.childNodes[0];
    const xml = new XMLSerializer().serializeToString(svg);

    const imag = new Image();
    imag.src = `data:image/svg+xml;base64,${btoa(xml)}`;

    const canvas = document.createElement('canvas');
    canvas.width = svg.getAttribute('width');
    canvas.height = svg.getAttribute('height');

    const context = canvas.getContext('2d');
    await new Promise((resolve) => {
      imag.onload = () => {
        context.drawImage(imag, 0, 0);
        resolve();
      };
    });

    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = dataURL;
    link.click();
    navigate('/home');
  };

  return (
    <>
      <Header />
      <div className="containerQR">

        <div className="containerQR__reference">
          <label htmlFor="name" className="titleqr">Referencia</label>
          <input type="text" className="containerQR__input" name="reference" onChange={handleChange} placeholder="Ingrese referencia" />
          {dataError ? <span className="error">{dataError}</span> : null}
          {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <p className="modal__text">Recuerda que todos los campos son obligatorios</p>
              <button className="modal__button" type="submit" onClick={handleModal}>Cerrar</button>
            </div>
          </div>
          )}
        </div>

        <div className="containerQR__brand">
          <label htmlFor="name" className="titleqr">Marca</label>
          <input type="text" className="containerQR__input" name="brand" onChange={handleChange} placeholder="Ingrese marca" />
          {dataError ? <span className="error">{dataError}</span> : null}
        </div>

        <div className="containerQR__color">
          <label htmlFor="name" className="titleqr">Color</label>
          <input type="text" className="containerQR__input" name="color" onChange={handleChange} placeholder="Ingrese color" />
          {dataError ? <span className="error">{dataError}</span> : null}
        </div>

        <div className="containerQR__size">
          <label htmlFor="name" className="titleqr">Talla</label>
          <input type="text" className="containerQR__input" name="size" onChange={handleChange} placeholder="Ingrese talla" />
          {dataError ? <span className="error">{dataError}</span> : null}
        </div>

        <div className="containerQR__amount">
          <label htmlFor="name" className="titleqr">Cantidad en bodega</label>
          <input type="text" className="containerQR__input" name="amount" onChange={handleChange} placeholder="Ingrese cantidad " />
          {dataError ? <span className="error">{dataError}</span> : null}
        </div>
        <div className="containerQR__image">
          <label htmlFor="name" className="titleqr">Imagen</label>
          <input type="file" className="containerQR__input" name="image" placeholder="Imagen" onChange={handleChangeImage} />
          {dataError ? <span className="error">{dataError}</span> : null}
          {img ? <img src={img} className="containerQR__image--picture" alt="" /> : null }
        </div>
        <button type="submit" className="containerQR__button" onClick={handleSubmit}>Crear</button>
        {show && (
          <>
            <div className="canvas" ref={qrCodeRef}>
              <QRCode
                className="containerQR__component"
                size={256}
                value={data}
                id="qrcode"
              />
            </div>
            <button type="submit" className="containerQR__button" onClick={handleDownload}>Descarga QR</button>

          </>
        )}
      </div>
    </>
  );
};

export default QR;
