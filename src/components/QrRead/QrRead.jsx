/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './style.css';

const QrRead = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
        color: 'white',
      },
      fps: 5,
    });
    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);
  const arrayQr = JSON.parse(scanResult);
  console.log(arrayQr, 'holi');
  return (
    <div>

      <Header />
      <section className="qrRead">
        {
        scanResult ? (
          <> <img src={arrayQr.image} alt="" className="qrRead__image" />
            <h2 className="qrRead__text">{'Color : '}{arrayQr.color}</h2>
            <h2 className="qrRead__text">{'Referencia : '}{arrayQr.reference}</h2>
            <h2 className="qrRead__text">{'Size: '}{arrayQr.size}</h2>
            <h2 className="qrRead__text">{'Cantidad en bodega : '}{arrayQr.amount}</h2>
          </>
        ) : <div id="reader" />
        }
      </section>
    </div>
  );
};
export default QrRead;
