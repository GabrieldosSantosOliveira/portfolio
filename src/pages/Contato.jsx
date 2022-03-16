import React from 'react';
import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';
import './Home.css'
import image from './image (2).jpg'
function Home() {
  return (
    <div className="container-grid">
      <Cabecalho/>
      <aside>
        <img src={image} alt="Tela de código" />
        </aside>
      <mean>
      <h1>Contato</h1>
      <p>Pode me chamar pelo email:gabriel.oliveira16@estudante.ifms.edu.br
        ou pelo telefone (67) 99998-2019
      </p>
    

      </mean>
      <Rodape/>

    </div>

  );
}

export default Home;