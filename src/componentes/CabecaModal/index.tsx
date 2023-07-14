import styles from './CabecalhoModal.module.scss'
import checkCircleIMG from './check-circle.svg'
import fecharIMG from './fechar.svg'

interface CabecalhoModalProps {
    setModalAberto: React.Dispatch<React.SetStateAction<boolean>>
    modalAberto: boolean
    titulo: string
}

export default function CabecalhoModal({setModalAberto, modalAberto, titulo}: CabecalhoModalProps) {
  return (
    <div className={styles["modal-cabecalho"]}>
        <img src={checkCircleIMG} alt="circulo amarelo" />
        <h2>{titulo}</h2>
        <img className={styles["modal-cabecalho-fechar"]} src={fecharIMG} alt="fechar modal" onClick={()=> setModalAberto(!modalAberto)} />
    </div>
  )
}
