import Popup from '../Popup'
import styles from './EnviarEmail.module.scss'
import { useState } from 'react'

export default function EnviarEmail() {
  const [popupAberto, setPopupAberto] = useState(false)
  const [campoEmail, setCampoEmail] = useState('')
  function aoSubmeter ( evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault()
    setPopupAberto(true)
    setCampoEmail('')
    setTimeout(()=> setPopupAberto(false), 5000)
  }
  return (
    <>
      <form onSubmit={aoSubmeter} className={styles.enviarEmail}>
          <label htmlFor="email">Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</label>
          <div>
              <input required onChange={evento=> setCampoEmail(evento.target.value)} value={campoEmail} id='email' type="email" placeholder='Digite seu email' />
              <button type='submit'>Enviar</button>
          </div>
      </form>
      <Popup popupAberto={popupAberto} setPopupAberto={setPopupAberto} titulo='E-mail cadastrado com sucesso!' mensagem='Em breve você receberá novidades exclusivas da Meteora.' />
    </>

  )
}
