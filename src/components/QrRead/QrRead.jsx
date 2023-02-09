import ReactQrReader from 'react-qrcode-reader';
import { useState } from 'react';
import './style.css';

const QrRead = () => {
  const [result, setResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <ReactQrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result ? <p>{result}</p> : null}
    </div>
  );
};
export default QrRead;
