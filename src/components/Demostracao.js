import React from 'react'
import CardItem from './CardItem';
import './Demostracao.css';


export function Demostracao() {
  return (
    <div class="container">
      <header>
        <h1>Demostracao</h1>
      </header>
      <main>
        <p>trocar mapa pelo sistema web</p>
        <base target="_blank" />
        <iframe width="100%" height="100%" frameborder="0"
          scrolling="no" marginheight="0" marginwidth="0"
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235203.81500692177!2d-43.58841988251077!3d-22.9111720903467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio+de+Janeiro%2C+RJ!5e0!3m2!1spt-BR!2sbr!4v1476880758681'
        ></iframe><br /><small>
        </small>
      </main>
      <aside>
        <p>lembrar de conectar ao app</p>

        <base target="_blank" />
        <iframe width="100%" height="100%" frameborder="0"
          scrolling="no" marginheight="0" marginwidth="0"
          src='https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=false&debug=true&device=nexus5&deviceColor=black&embed=true&launchUrl=exp%3A%2F%2Fexp.host%2F%40snack%2Fsdk.41.0.0-jNHW0PP6Bi&orientation=portrait&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexp.host%2F%40snack%2Fsdk.41.0.0-jNHW0PP6Bi%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D'
        ></iframe><br /><small>
        </small>
      </aside>

    </div>
  )
}