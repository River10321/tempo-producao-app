import React, { useState } from 'react';
import './App.css';

function App() {
  const [processos, setProcessos] = useState([{ nome: '', tempo: '' }]);
  const [custoHora, setCustoHora] = useState('');
  const [totalTempo, setTotalTempo] = useState(0);
  const [totalCusto, setTotalCusto] = useState(0);

  const handleProcessoChange = (index, field, value) => {
    const novosProcessos = [...processos];
    novosProcessos[index][field] = value;
    setProcessos(novosProcessos);
  };

  const adicionarProcesso = () => {
    setProcessos([...processos, { nome: '', tempo: '' }]);
  };

  const calcularTotais = () => {
    const tempoTotal = processos.reduce((acc, proc) => acc + Number(proc.tempo || 0), 0);
    setTotalTempo(tempoTotal);
    const custo = custoHora ? (tempoTotal / 60) * Number(custoHora) : 0;
    setTotalCusto(custo);
  };

  return (
    <div className="container">
      <h1>Calculadora de Tempo de Produção</h1>

      {processos.map((proc, index) => (
        <div key={index} className="form">
          <input
            type="text"
            placeholder="Nome do processo"
            value={proc.nome}
            onChange={(e) => handleProcessoChange(index, 'nome', e.target.value)}
          />
          <input
            type="number"
            placeholder="Tempo em minutos"
            value={proc.tempo}
            onChange={(e) => handleProcessoChange(index, 'tempo', e.target.value)}
          />
        </div>
      ))}

      <button onClick={adicionarProcesso}>+ Adicionar processo</button>

      <div className="form">
        <input
          type="number"
          placeholder="Custo por hora (R$)"
          value={custoHora}
          onChange={(e) => setCustoHora(e.target.value)}
        />
        <button onClick={calcularTotais}>Calcular</button>
      </div>

      <hr />

      <h2>Resultados:</h2>
      <p><strong>Tempo total:</strong> {totalTempo} minutos</p>
      <p><strong>Custo estimado:</strong> R$ {totalCusto.toFixed(2)}</p>
    </div>
  );
}

export default App;
