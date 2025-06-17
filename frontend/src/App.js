import React, { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loadingGenerate, setLoadingGenerate] = useState(false);
  const [loadingExplain, setLoadingExplain] = useState(false);

  const callAPI = async (endpoint) => {
    if (endpoint === "generate") {
      setLoadingGenerate(true);
      setResponse("");
      try {
        const res = await fetch(`http://127.0.0.1:8000/generate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: prompt, max_new_tokens: 100 }),
        });
        const data = await res.json();
        setResponse(data.response);
      } catch (error) {
        setResponse("❌ Error: " + error.message);
      }
      setLoadingGenerate(false);
    } else if (endpoint === "explain") {
      setLoadingExplain(true);
      setResponse("");
      try {
        const res = await fetch(`http://127.0.0.1:8000/explain`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: prompt, max_new_tokens: 100 }),
        });
        const data = await res.json();
        setResponse(data.response);
      } catch (error) {
        setResponse("❌ Error: " + error.message);
      }
      setLoadingExplain(false);
    }
  };

  const isLoading = loadingGenerate || loadingExplain;

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "3rem auto",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow:
          "0 4px 8px rgba(0,0,0,0.1), 0 6px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "1.5rem",
          fontWeight: "700",
          fontSize: "2.5rem",
        }}
      >
        🧠 Auto Coding Assistant
      </h1>

      <textarea
        style={{
          width: "100%",
          height: "140px",
          fontSize: "16px",
          padding: "1rem",
          borderRadius: "8px",
          border: "1.5px solid #ddd",
          resize: "vertical",
          boxSizing: "border-box",
          fontFamily: "Consolas, monospace",
          backgroundColor: isLoading ? "#f9f9f9" : "#fff",
          transition: "background-color 0.3s ease",
        }}
        placeholder="Enter your code or prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={isLoading}
      />
      
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button
          onClick={() => callAPI("generate")}
          style={{
            padding: "0.6rem 1.8rem",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "8px",
            border: "none",
            backgroundColor: isLoading ? "#9e9e9e" : "#007bff",
            color: "white",
            cursor: isLoading ? "not-allowed" : "pointer",
            boxShadow:
              isLoading
                ? "none"
                : "0 4px 6px rgba(0, 123, 255, 0.4)",
            transition: "background-color 0.3s ease",
          }}
          disabled={isLoading}
        >
          {loadingGenerate ? "Generating..." : "Generate Code"}
        </button>

        <button
          onClick={() => callAPI("explain")}
          style={{
            padding: "0.6rem 1.8rem",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "8px",
            border: "none",
            backgroundColor: isLoading ? "#9e9e9e" : "#28a745",
            color: "white",
            cursor: isLoading ? "not-allowed" : "pointer",
            boxShadow:
              isLoading
                ? "none"
                : "0 4px 6px rgba(40, 167, 69, 0.4)",
            transition: "background-color 0.3s ease",
          }}
          disabled={isLoading}
        >
          {loadingExplain ? "Explaining..." : "Explain Code"}
        </button>
      </div>

      {response && (
        <pre
          style={{
            marginTop: "2rem",
            background: "#f0f0f0",
            padding: "1rem 1.2rem",
            borderRadius: "10px",
            color: "#222",
            fontSize: "15px",
            fontFamily: "Consolas, monospace",
            whiteSpace: "pre-wrap",
            lineHeight: "1.5",
            boxShadow: "inset 0 0 8px rgba(0,0,0,0.05)",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {response}
        </pre>
      )}
    </div>
  );
}

export default App;
