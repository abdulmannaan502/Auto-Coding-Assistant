import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here");
  const [response, setResponse] = useState("");

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const explainCode = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/code/explain", {
        code: code, // Sending the code, will handle later in backend
      });
      setResponse(res.data.response);
    } catch (error) {
      setResponse("Error calling API");
      console.error(error);
    }
  };

  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      <Editor
        height="400px"
        defaultLanguage="javascript"
        value={code}
        onChange={handleEditorChange}
      />
      <button onClick={explainCode} style={{ marginTop: "10px" }}>
        Explain Code
      </button>
      <pre
        style={{
          background: "#f4f4f4",
          marginTop: "20px",
          padding: "10px",
          borderRadius: "4px",
          minHeight: "100px",
        }}
      >
        {response}
      </pre>
    </div>
  );
};

export default CodeEditor;
