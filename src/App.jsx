import { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [transactionId, setTransactionId] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    setMessage("I didn't integrate API, wait until we start integrate payment check API");
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Verify Payment</h1>
        <form onSubmit={handleVerify}>
          <div className="input-group">
            <label>Upload Image or PDF</label>
            <input 
              type="file" 
              accept="image/*,application/pdf"
              onChange={(e) => setFile(e.target.files[0])} 
            />
          </div>
          
          <div className="divider">OR</div>
          
          <div className="input-group">
            <label>Scan Barcode / Transaction ID</label>
            <div className="scan-input-wrapper">
              <input 
                type="text" 
                placeholder="Enter Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)} 
              />
              <button type="button" className="scan-btn" onClick={() => {
                setMessage("I didn't integrate API, wait until we start integrate payment check API. (Mock Scan Result)");
              }}>
                📷 Scan
              </button>
            </div>
          </div>
          
          <button type="submit" className="verify-btn">Verify Payment</button>
        </form>
        
        {message && (
          <div className="message-box">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
