import ReactQrReader from 'react-qrcode-reader';
import { useState } from 'react';
import Header from '../Header/Header';
import './style.css';

const QrRead = () => {
  const [result, setResult] = useState(' ');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  console.log('holi', result);

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <Header />
      <section className="qrRead">
        <ReactQrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />

      </section>

      {result ? <p>{result}</p> : <p>no hay datos para leer</p> }
    </div>
  );
};
export default QrRead;
