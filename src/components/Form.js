import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik';
import api from '../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

function Formulario() {
  const [mensagem, setMensagem] = useState([])
  const [filteredMensagem, setFilteredMensagem] = useState([])
  const [selected, setSelected] = useState('')


  const notifySuccess = (mensagem) => toast.success(mensagem);
  const notifyError = (mensagem) => toast.error(mensagem);


  const submit = async (values) => {
    const { email, nome, mensagem, assunto } = values

    const dados = {
      host: "smtp.gmail.com",
      porta: 465,
      usuario: "projetointegrador500@gmail.com",
      senha: "qwe102030",
      nome: nome,
      mensagem: mensagem,
      anexo: false,
      assunto: "assunto",
      remetente: email,
      destinatario: [
        "projetointegrador500+frontend@gmail.com",

      ]
    }
    const { data, status } = await api.post('/enviar-email', dados)
    if (status == 200) {
      notifySuccess(data.mensagem)
      notifySuccess("Em breve um dos nossos representantes entrará em contato!")
    } else {
      notifyError("Erro ao enviar! Tente Novamente")
    }
  }

  async function getMensagem() {
    const { data } = await api.get('/mensagens');
    setMensagem(data)
    setFilteredMensagem(data)
  }

  async function setEmail(data) {

  }

  useEffect(() => {
    getMensagem()
  }, [])


  console.log(selected)
  const handleChange = (selected) => {
    setSelected(selected)
  }
  return (
    <div className="contato__container" id="produtos">
      <h1>Entre em contato com a equipe de suporte!</h1>
      <Formik
        initialValues={{ email: '', nome: '', mensagem: '', assunto: '' }}
        onSubmit={(values, actions) => {
          submit(values)

        }}
      >
        <Form>
          <div className="contato__item__container">
            <Field className="contato__item" type="text" name="nome" placeholder="Nome" />
            <br />
          </div>
          <div className="contato__item__container">
            <Field className="contato__item" type="email" name="email" placeholder="Email" />
            <br />
          </div>

          <div className="contato__item__container"></div>

          <select className="contato__item" name="select" value={selected} onChange={handleChange}>
            {filteredMensagem.map((x) => (
              <option selected value={x.id}>{x.assunto}</option>
            ))}
            <option value='outros'>Outros</option>
          </select>

          <div className="contato__item__container">
            <Field className="contato__item" type="text" name="mensagem" placeholder="Mensagem" />
            <br />
          </div>

          <div className="contato__item__container">
            <button className="contato__item" type="submit">Enviar</button>
          </div>


        </Form>

      </Formik >
      <ToastContainer />
    </div >
  )
}

export default Formulario
