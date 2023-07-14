import Modal from 'react-modal';
import CabecalhoModal from '../CabecaModal';
import styles from './Popup.module.scss'

interface PopupProps {
    popupAberto: boolean
    setPopupAberto: React.Dispatch<React.SetStateAction<boolean>>
    titulo: string
    mensagem: string
}

export default function Popup({popupAberto, setPopupAberto, titulo, mensagem}: PopupProps) {

  return (
    <Modal
        isOpen={popupAberto}
        onRequestClose={()=> setPopupAberto(!popupAberto)}
        contentLabel="popup"
        className={styles['react-modal-popup']}
        style={{overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0)', 
            backdropFilter: 'none'
    }
    }}
    >
        <CabecalhoModal setModalAberto={setPopupAberto} modalAberto={popupAberto} titulo={titulo} />
        <div className={styles.mensagem}>
            <p>{mensagem}</p>
        </div>
    </Modal>
  )
}
