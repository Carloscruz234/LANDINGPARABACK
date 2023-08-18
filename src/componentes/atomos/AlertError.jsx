import { useState } from "react";

const AlertError = () => {
  const [promptVisible, setPromptVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleShowPrompt = () => {
    setPromptVisible(true);
  };

  const handlePromptSubmit = () => {
    setResult(`Respuesta: ${inputValue}`);
    setPromptVisible(false);
  };

  return (
    <div>
      <button onClick={handleShowPrompt}>Mostrar</button>
      {promptVisible && (
        <div className="prompt">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handlePromptSubmit}>Aceptar</button>
        </div>
      )}
      <p>{result}</p>
    </div>
  );
};
export default AlertError;
