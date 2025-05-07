import { useState } from "react";
import './App.css';

function App() {
  const [processos, setProcessos] = useState([]);
  const [novoProcesso, setNovoProcesso] = useState({ nome: "", tempo: "" });

  const adicionarProcesso = () => {
    if (!novoProcesso.nome || !novoProcesso.tempo) return;
    setProcessos([...processos, { ...novoProcesso, tempo: Number(novoProcesso.tempo) }]);
    setNovoProcesso({ nome: "", tempo: "" });
  };

  const tempoTotal = processos.reduce((acc, proc) => acc + proc.tempo, 0);

  return (
    <div className="container">
      <h1>Calculadora de Tempo de Produção</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Nome do processo"
          value={novoProcesso.nome}
          onChange={(e) => setNovoProcesso({ ...novoProcesso, nome: e.target.value })}
        />
        <input
          type="number"
          placeholder="Tempo em minutos"
          value={novoProcesso.tempo}
          onChange={(e) => setNovoProcesso({ ...novoProcesso, tempo: e.target.value })}
        />
        <button onClick={adicionarProcesso}>Adicionar Processo</button>
      </div>
      <ul>
        {processos.map((proc, index) => (
          <li key={index}>{proc.nome} - {proc.tempo} min</li>
        ))}
      </ul>
      <h2>Tempo Total: {tempoTotal} min</h2>
    </div>
  );
}

export default App;