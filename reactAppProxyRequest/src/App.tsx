import React, { useState } from "react";
import axios from "axios";
import requestConfig from "./requestConfig";

const App: React.FC = () => {
  const [response, setResponse] = useState<string>("");

  const sendRequest = async () => {
    try {
      const res = await axios.request(requestConfig);
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (error: any) {
      setResponse(
        error?.response
          ? JSON.stringify(error.response.data, null, 2)
          : error.toString()
      );
    }
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "2rem auto",
        fontFamily: "Arial, sans-serif",
        padding: "1rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <button
        onClick={sendRequest}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: "#007bff",
          color: "#ffffff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "1rem",
          width: "100%",
        }}
      >
        Send Request
      </button>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          background: "#272822",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "6px",
          minHeight: "300px",
          overflowY: "auto",
          fontSize: "14px",
          fontFamily:
            "'Fira Mono', 'Source Code Pro', Consolas, 'Courier New', monospace",
        }}
      >
        {response || "Response will appear here after you send request."}
      </pre>
    </div>
  );
};

export default App;
