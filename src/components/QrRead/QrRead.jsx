import QrReader from 'react-qrcode-reader';
import { useState } from 'react';
import './style.css';

const QrRead = () => {
  // eslint-disable-next-line no-unused-vars
  const [read, setRead] = useState('no data');
  const handleScan = (data) => {
    if (data) {
      setRead(data);
    }
  };
  return (
    <div className="containerQrReader">
      <QrReader
        delay={80}
        onScan={handleScan}
        facingMode="environment"
        className="containerQrReader__library"
      />
      <p className="containerQrReader__result">{read}</p>
    </div>

  );
};
export default QrRead;
