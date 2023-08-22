/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import ReactQrReader from 'react-qrcode-reader';
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

  // const [result, setResult] = useState(' ');

  // const handleScan = (data) => {
  //   if (data) {
  //     setResult(data);
  //   }
  // };

  // console.log('holi', result);

  // const handleError = (error) => {
  //   console.error(error);
  // };

  return (
    <div>
      {
        scanResult ? <h2>{scanResult}</h2> : <div id="reader" />
      }
      {/* <Header />
      <section className="qrRead">
        <ReactQrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />

      </section>

      {result ? <p>{result}</p> : <p>no hay datos para leer</p> } */}
    </div>
  );
};
export default QrRead;
