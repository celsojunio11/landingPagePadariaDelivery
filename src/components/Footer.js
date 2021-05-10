import { React } from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Venha comer aquele pão de queijo quentinho com um café feito na hora!
        </p>
        <p className="footer-subscription-teste">
          Funcionamento: 06:00am à 20:00pm.
        </p>
        <div className="input-areas">
          <form>
            {/*
            
           <input type="email" name="email" placeholder="Seu email" className="footer-input" />
            <Button buttonStyle='btn--outline' type="submit">Enviar</Button>
            */}
          </form>
        </div>
      </section>

      <div>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            {/*  
          <div className="footer-link-items">
            
            <h2>Tenha uma demonstração do nosso App</h2>
              <Link to = '/'>Conheça nosso sistema!</Link>
            </div>
          */}
          </div>
          <div className="footer-link-items">
            <h2>Contato</h2>
            <Link to='/'>Email: padariadelivery@gmail.com</Link>
            <Link to='/'>Telefone:: (34)3818-0000</Link>
            <Link to='/'>Endereço: Rua Major Gote, 1, Patos de Minas - MG</Link>
          </div>
          {/*
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
          */}
          <div class='footer-link-items1'>
            <h2></h2>
            <div class="col-lg-12">
                    <div class="contact-map mt-60">
                        <div class="gmap_canvas">
                            <iframe id="gmap_canvas"
                                src="https://www.google.com/maps/d/u/0/embed?mid=10xN5cou5-s_E5pkplgJ9FzJeCNvHKcwv"
                                width="640" height="480" frameborder="0" scrolling="no" marginheight="0"
                                marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
          </div>
        </div>

       
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PADARIA DELIVERY
              <i class='fas fa coffe' />
            </Link>
          </div>
          <small class='website-rights'>PADARIA DELIVERY © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/search/top?q=Padaria'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
         
        </div>
      </section>
      


    </div>
  )
}

export default Footer
