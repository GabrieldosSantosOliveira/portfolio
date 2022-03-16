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
      <h1>Serviços</h1>
      <p>Os serviços fitos por mim podem ser acessados no github:<a href='https://github.com/GabrieldosSantosOliveira'>https://github.com/GabrieldosSantosOliveira</a>
      </p>
      </mean>
      <Rodape/>

    </div>

  );
}

export default Home;