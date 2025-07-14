import logo from '../assets/logo.png';
import './NotaPedido.css';
import PropTypes from 'prop-types';

export default function NotaPedido({ cliente, itens }) {
  const totalGeral = itens.reduce((acc, i) => acc + i.total, 0);

  return (
    <div className="nota-pedido">
<header>
  <div className="logo">
    <img src={logo} alt="Marl & Freitas" />
  </div>
  <div className="contato">
    Av. dos Trabalhadores, nº 16.744<br />
    S. Sebastião – P. Grande – SP<br />
    (13) 3481‑1113
  </div>
  <div className="telefone-marcado">3481‑2074</div>
</header>


      <section className="dados-cliente">
        <div><label>Nome:</label><span>{cliente.nome}</span></div>
        <div>
          <label>Rua:</label><span>{cliente.rua}</span>
          <label>Nº:</label><span>{cliente.numero}</span>
        </div>
        <div>
          <label>Bairro:</label><span>{cliente.bairro}</span>
          <label>Cidade:</label><span>{cliente.cidade}</span>
        </div>
      </section>

      <table className="itens">
        <thead>
          <tr>
            <th>Quant.</th>
            <th>Código</th>
            <th>Discriminação</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((i, idx) => (
            <tr key={idx}>
              <td>{i.quant}</td>
              <td>{i.codigo}</td>
              <td>{i.desc}</td>
              <td>R$ {i.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer>
        <div className="atencao">ATENÇÃO: Não colocamos Blocos p/ dentro da obra</div>
        <div className="total-geral">TOTAL GERAL: R$ {totalGeral.toFixed(2)}</div>
        <div className="assinatura">Assinatura: ____________________</div>
      </footer>
    </div>
  );
}

NotaPedido.propTypes = {
  cliente: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    rua: PropTypes.string,
    numero: PropTypes.string,
    bairro: PropTypes.string,
    cidade: PropTypes.string,
  }).isRequired,
  itens: PropTypes.arrayOf(
    PropTypes.shape({
      quant: PropTypes.number.isRequired,
      codigo: PropTypes.string,
      desc: PropTypes.string,
      total: PropTypes.number.isRequired,
    })
  ).isRequired,
};
