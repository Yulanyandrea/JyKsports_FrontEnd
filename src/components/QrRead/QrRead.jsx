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
  console.log(scanResult);
  return (
    <div>

      <Header />
      <section className="qrRead">
        {
        scanResult ? <h2>{scanResult}</h2> : <div id="reader" />
        }

      </section>
    </div>
  );
};
export default QrRead;
