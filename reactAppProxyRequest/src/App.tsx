import React, { useState } from 'react';
import axios from 'axios';

const requestConfig = {
  method: 'get',
  url: 'https://namastedev.com/learn/namaste-dsa/inorder-postorder-recursive-approach?_rsc=excgr',
  headers: {
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9'
  },
  maxBodyLength: Infinity
};

const App: React.FC = () => {
  const [response, setResponse] = useState<string>('');

  const sendRequest = async () => {
    try {
      // Send request config to local proxy server
      const res = await axios.post('http://localhost:3001/proxy', requestConfig);
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div style={{
      maxWidth: 800,
      margin: '2rem auto',
      fontFamily: 'Arial, sans-serif',
      padding: '1rem',
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <button
        onClick={sendRequest}
        style={{
          padding: '12px 24px',
          fontSize: 16,
          fontWeight: 'bold',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          marginBottom: '1rem',
          width: '100%'
        }}
      >
        Send Request
      </button>

      <pre style={{
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        background: '#272822',
        color: '#f8f8f2',
        padding: 16,
        borderRadius: 6,
        minHeight: 300,
        overflowY: 'auto',
        fontSize: 14,
        fontFamily: "'Fira Mono', 'Source Code Pro', Consolas, 'Courier New', monospace"
      }}>
        {response || 'Response will appear here after you send request.'}
      </pre>
    </div>
  );
};

export default App;
