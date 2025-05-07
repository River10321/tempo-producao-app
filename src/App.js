import React, { useState } from 'react';
import FormFuncionario from './components/FormFuncionario';

function App() {
  const [funcionarios, setFuncionarios] = useState([]);

  const adicionarFuncionario = (novo) => {
    setFuncionarios([...funcionarios, novo]);
  };

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center' }}>Sistema de Produção - Funcionários</h1>

      <FormFuncionario onAdd={adicionarFuncionario} />

      <h2>Funcionários cadastrados:</h2>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', background: '#fff' }}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Salário (R$)</th>
            <th>Horas/Mês</th>
            <th>Custo/Hora</th>
            <th>Custo/Min</th>
            <th>Custo/Seg</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((f, i) => (
            <tr key={i}>
              <td>{f.nome}</td>
              <td>R$ {f.salario.toFixed(2)}</td>
              <td>{f.horasMensais}</td>
              <td>R$ {f.custoHora.toFixed(2)}</td>
              <td>R$ {f.custoMinuto.toFixed(4)}</td>
              <td>R$ {f.custoSegundo.toFixed(6)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
