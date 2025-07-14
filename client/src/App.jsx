import { useState,  useRef } from 'react';
import axios from 'axios';
import NotaPedido from './components/NotaPedido';

function App() {
  const [cliente, setCliente] = useState({ nome:'', rua:'', numero:'', bairro:'', cidade:'' });
  const [itens, setItens] = useState([]);
  const notaRef = useRef();

  const addItem = () => setItens([...itens, { quant:0, codigo:'', desc:'', total:0 }]);
  const saveNota = async () => {
    const total = itens.reduce((a,i)=>a+i.total,0);
    const resp = await axios.post('http://localhost:4000/notas', { cliente, itens, total });
    alert('Nota salva! ID = ' + resp.data.id);
    <h3>Total Geral: R$ {itens.reduce((a, i) => a + i.total, 0).toFixed(2)}</h3>

  };

  return (
    <div>
      {/* Formulário de dados do cliente */}
      <input placeholder="Nome" value={cliente.nome} onChange={e => setCliente({ ...cliente, nome: e.target.value })} />
      <input placeholder="Rua" value={cliente.rua} onChange={e => setCliente({...cliente, rua: e.target.value})} />
<input placeholder="Número" value={cliente.numero} onChange={e => setCliente({...cliente, numero: e.target.value})} />
<input placeholder="Bairro" value={cliente.bairro} onChange={e => setCliente({...cliente, bairro: e.target.value})} />
<input placeholder="Cidade" value={cliente.cidade} onChange={e => setCliente({...cliente, cidade: e.target.value})} />

      {/* ... campos adicionais ... */}

      {/* Itens da nota */}
      <button onClick={addItem}>Adicionar Item</button>
      {itens.map((i, idx) => (
        <div key={idx}>
          <input
  placeholder="Quantidade"
  type="number"
  value={i.quant}
  onChange={e => {
    const novos = [...itens];
    novos[idx].quant = parseInt(e.target.value);
    novos[idx].total = novos[idx].quant * (novos[idx].preco || 0);
    setItens(novos);
  }}
/>
<input
  placeholder="Código"
  value={i.codigo}
  onChange={e => {
    const novos = [...itens];
    novos[idx].codigo = e.target.value;
    setItens(novos);
  }}
/>
<input
  placeholder="Discriminação"
  value={i.desc}
  onChange={e => {
    const novos = [...itens];
    novos[idx].desc = e.target.value;
    setItens(novos);
  }}
/>
<input
  placeholder="Preço unitário"
  type="number"
  value={i.preco || ''}
  onChange={e => {
    const novos = [...itens];
    novos[idx].preco = parseFloat(e.target.value);
    novos[idx].total = novos[idx].quant * novos[idx].preco;
    setItens(novos);
  }}
/>
<span>Total: R$ {i.total?.toFixed(2)}</span>

          {/* ... outros campos ... */}
        </div>
      ))}

      <button onClick={saveNota}>💾 Salvar Nota</button>

      <div ref={notaRef}>
        <NotaPedido cliente={cliente} itens={itens} />
      </div>
    </div>
  );
}

export default App;
