import QRCode from 'react-qr-code';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import useForm from '../../hooks/useForm';
import { createProducts } from '../../services/product';
import './style.css';

const QR = () => {
  const url = process.env.REACT_APP_BASE_URL;
  // const navigate = useNavigate();
  const { form, handleChange } = useForm({});
  const [show, setShow] = useState(false);
  const [data, setData] = useState(' ');
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const file = files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);
    const formData = new FormData();
    formData.append('file', image);
    // conect to back end
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
    // navigate('/home');
  };
  const handleDownload = (e) => {
    e.preventDefault(e);
    // download qr
    const qrCodeURL = document.getElementById('qrcode')
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    console.log(qrCodeURL);
    const aEl = document.createElement('a');
    aEl.href = qrCodeURL;
    aEl.download = 'QR_Code.png';
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  return (
    <>
      <Header />
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
          <input type="file" className="containerQR__input" name="image" placeholder="Imagen" onChange={handleChangeImage} />
          {img ? <img src={img} className="containerQR__image--picture" alt="" /> : null }
        </div>
        <button type="submit" className="containerQR__button" onClick={handleSubmit}>Crear</button>
        {show && (
        <> <QRCode
          className="containerQR__component"
          size={256}
          value={data}
          id="qrcode"
        />
          <button type="submit" onClick={handleDownload}>Download pdf</button>
        </>
        )}
      </div>
    </>
  );
};

export default QR;
