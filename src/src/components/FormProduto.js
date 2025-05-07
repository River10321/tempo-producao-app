import React, { useState } from 'react';

function FormProduto({ onAdd }) {
  const [nomeProduto, setNomeProduto] = useState('');
  const [processos, setProcessos] = useState([]);
  const [nomeProcesso, setNomeProcesso] = useState('');
  const [minutos, setMinutos] = useState('');
  const [segundos, setSegundos] = useState('');
  const [maquina, setMaquina] = useState('');

  const adicionarProcesso = () => {
    if (!nomeProcesso || (!minutos && !segundos) || !maquina) {
      return alert('Preencha todos os campos do processo.');
    }

    const totalSegundos = parseInt(minutos || 0) * 60 + parseInt(segundos || 0);

    setProcessos([
      ...processos,
      { nome: nomeProcesso, tempoSegundos: totalSegundos, maquina }
    ]);

    setNomeProcesso('');
    setMinutos('');
    setSegundos('');
    setMaquina('');
  };

  const handleSalvarProduto = () => {
    if (!nomeProduto || processos.length === 0) {
      return alert('Informe o nome do produto e ao menos um processo.');
    }

    const tempoTotalSegundos = processos.reduce((soma, p) => soma + p.tempoSegundos, 0);

    onAdd({
      nome: nomeProduto,
      processos,
      tempoTotalSegundos
    });

    setNomeProduto('');
    setProcessos([]);
  };

  return (
    <div style={{ background: '#fff', padding: 20, borderRadius: 8, marginBottom: 40 }}>
      <h2>Cadastro de Produto</h2>
      <input
        type="text"
        placeholder="Nome do produto"
        value={nomeProduto}
        onChange={(e) => setNomeProduto(e.target.value)}
      />
      <hr style={{ margin: '20px 0' }} />

      <h3>Adicionar Processo</h3>
      <input
        type="text"
        placeholder="Nome do processo"
        value={nomeProcesso}
        onChange={(e) => setNomeProcesso(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minutos"
        value={minutos}
        onChange={(e) => setMinutos(e.target.value)}
        style={{ width: '80px' }}
      />
      <input
        type="number"
        placeholder="Segundos"
        value={segundos}
        onChange={(e) => setSegundos(e.target.value)}
        style={{ width: '80px' }}
      />
      <input
        type="text"
        placeholder="Máquina utilizada"
        value={maquina}
        onChange={(e) => setMaquina(e.target.value)}
      />
      <button onClick={adicionarProcesso}>+ Adicionar Processo</button>

      <ul>
        {processos.map((p, i) => (
          <li key={i}>
            {p.nome} - {Math.floor(p.tempoSegundos / 60)}min {p.tempoSegundos % 60}s - Máquina: {p.maquina}
          </li>
        ))}
      </ul>

      <button style={{ marginTop: 10 }} onClick={handleSalvarProduto}>
        Salvar Produto
      </button>
    </div>
  );
}

export default FormProduto;
