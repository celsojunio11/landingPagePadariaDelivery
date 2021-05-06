import React from 'react'
import {Button} from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Venha comer aquele pão de queijo quentinho com um café feito na hora!
        </p>
        <p className="footer-subscription-teste">
          Abertos de 06:00AM à 20:00pm.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Seu email" className="footer-input" />
            <Button buttonStyle='btn--outline' type="submit">Enviar</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Footer
