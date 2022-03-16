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
      <h1>Gabriel dos Santos Oliveira</h1>
      <p>Eu nasci em Nova Andradina e tenho 16 anos estudei na Escola Estadual Marechal Rondon,
        eu gosto de games embora não tenha um pc ou console para roda-los, o que me cativa é principalmente a história
      </p>
     
      </mean>
      <Rodape/>

    </div>

  );
}

export default Home;