import React, { useState } from 'react';
import FormFuncionario from './components/FormFuncionario';
import FormProduto from './components/FormProduto';

function App() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const adicionarFuncionario = (novo) => {
    setFuncionarios([...funcionarios, novo]);
  };

  const adicionarProduto = (novoProduto) => {
    setProdutos([...produtos, novoProduto]);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Sistema de Produção</h1>

      <FormFuncionario onAdd={adicionarFuncionario} />
      <FormProduto onAdd={adicionarProduto} />

      <h2>Funcionários Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Salário</th>
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

      <h2>Produtos Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Tempo Total</th>
            <th>Processos</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((prod, i) => (
            <tr key={i}>
              <td>{prod.nome}</td>
              <td>
                {Math.floor(prod.tempoTotalSegundos / 60)}min {prod.tempoTotalSegundos % 60}s
              </td>
              <td>
                <ul>
                  {prod.processos.map((p, j) => (
                    <li key={j}>
                      {p.nome} - {Math.floor(p.tempoSegundos / 60)}min {p.tempoSegundos % 60}s - Máquina: {p.maquina}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
