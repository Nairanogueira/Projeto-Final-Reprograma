import Header from "../components/Header"
import styles from '../styles/pages/cadastro.module.css'
import imgcadastro from '../assets/imgcadastro.png'
import { useState } from "react"

const Contato = () => {
  const [nome, setNome] = useState('')
  const [whats, setWhats] = useState ('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [rede, setRede] = useState('')
  const [show, setShow] = useState(false)

  function handleInputNome(e) {
    setNome(e.target.value)
  }

  function handleInputWhats(e) {
    setWhats(e.target.value)
  }

  function handleInputEmail(e) {
    setEmail(e.target.value)
  }

  function handleInputMensagem(e) {
    setMensagem(e.target.value)
  }

  function handleInputRede(e) {
    setRede(e.target.value)
  }

  function handleSubmit(e) {
      e.preventDefault()

      setNome('')
      setWhats('')
      setEmail('')
      setMensagem('')
      setRede('')
      setShow(true)

  }

  return (
    <>
      <Header 
        image={imgcadastro}
      />
      
      <main>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
          <input 
            className={styles.formInput}
            type="text"
            placeholder="Digite seu nome"
            onChange={handleInputNome}
            value={nome}  
          />
           <input 
            className={styles.formInput}
            type="whatsApp"
            placeholder="Digite seu telefone/WhatsApp"
            onChange={handleInputWhats}
            value={whats}
          />
          <input 
            className={styles.formInput}
            type="email"
            placeholder="Digite seu email"
            onChange={handleInputEmail}
            value={email}
          />
          <textarea 
            className={styles.formInput}
            placeholder="Informe qual o seu produto artesanal"
            onChange={handleInputMensagem}
            value={mensagem}
          />
          <textarea 
            className={styles.formInput}
            placeholder="Rede Social (Facebook, Instagram, Linkedin, etc.)"
            onChange={handleInputRede}
            value={rede}
          />

          </div>
          

          <button 
            className={styles.formButton} 
            type="submit">Cadastrar 
          </button>

         {show && (
           <div>
           <h6>Você está cadastrada! Fique de olho no seu e-mail.</h6>
           </div>
         )}
        
          </form> 

      </main>
    </>
  )
}

export default Contato