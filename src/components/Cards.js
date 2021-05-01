import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Algumas funcionalidades do nosso sistema!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
            src="images/web1.jpg"
            text="Para ter uma boa gerência de acessos, PADARIA DELIVERY conta com um sistema de login integrado. "
            label='Web'
            path='servicos'
            />
             <CardItem
            src="images/web2.jpg"
            text="Tenha um maior controle a partir da tela gerenciar pedidos."
            label='Web'
            path='servicos'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
