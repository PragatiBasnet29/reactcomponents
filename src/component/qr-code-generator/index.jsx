import { useState } from "react";
import QRCode from "react-qr-code";
//import "./styles.css";


export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setQrCode(input);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSubmit}>Generate</button>
      </div>
      <div>
        {qrCode && (
          <QRCode value={qrCode} />
        )}
      </div>
    </div>
  );
}