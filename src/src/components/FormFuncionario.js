import React, { useState } from 'react';

function FormFuncionario({ onAdd }) {
  const [nome, setNome] = useState('');
  const [salario, setSalario] = useState('');
  const [horasMensais, setHorasMensais] = useState(220); // padrão 220h

  const handleAdd = () => {
    const salarioNum = parseFloat(salario);
    const horas = parseFloat(horasMensais);

    if (!nome || isNaN(salarioNum) || isNaN(horas)) return alert('Preencha corretamente');

    const custoHora = salarioNum / horas;
    const custoMinuto = custoHora / 60;
    const custoSegundo = custoMinuto / 60;

    onAdd({
      nome,
      salario: salarioNum,
      horasMensais: horas,
      custoHora,
      custoMinuto,
      custoSegundo
    });

    setNome('');
    setSalario('');
    setHorasMensais(220);
  };

  return (
    <div style={{ background: '#fff', padding: 20, marginBottom: 20, borderRadius: 8 }}>
      <h2>Cadastro de Funcionário</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        type="number"
        placeholder="Salário mensal (R$)"
        value={salario}
        onChange={(e) => setSalario(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        type="number"
        placeholder="Horas mensais (padrão 220)"
        value={horasMensais}
        onChange={(e) => setHorasMensais(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <button onClick={handleAdd}>Cadastrar Funcionário</button>
    </div>
  );
}

export default FormFuncionario;
