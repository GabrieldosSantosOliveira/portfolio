import React from 'react';
import { Link } from 'react-router-dom';
import './cabecalho.css'

export default function Cabecalho() {
  return (
    <div className="container">
      <div className='item'>Gabriel dos Santos Oliveira</div>
      <Link to="/"><div>Home</div></Link>
      <Link to="/Servicos"><div>Serviços</div></Link>
      <Link to="/Conhecimentos"><div>Conhecimentos</div></Link>
      <Link to="/Contato"><div>Contato</div></Link>

    </div>
  );
}

