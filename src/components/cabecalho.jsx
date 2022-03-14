import React from 'react';
import { Link } from 'react-router-dom';


export default function Cabecalho() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/Servicos">Serviços</Link>
      <Link to="/Conhecimentos">Conhecimetnos</Link>
      <Link to="/Contato">Contato</Link>

    </div>
  );
}

