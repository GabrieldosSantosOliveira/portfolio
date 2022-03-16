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
      <h1>Conhecimentos</h1>
      <p>Eu comecei a programar no curso de informatica do IFMS foi quando eu aprendi, o que é uma
        linguagem de programação e como usala para fazer sites.
      </p>
      <p>Eu aprendi a utilizar o: React, Javascript, HTML, CSS. Dessas a que eu mais gosto é o Javascript
        que eu achei um pouco mais facil de entender nas aulas do professor Rodrgo Duran
      </p>
      </mean>
      <Rodape/>

    </div>

  );
}

export default Home;