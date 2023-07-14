import Modal from 'react-modal';
import styles from './ModalProduto.module.scss'
import CabecalhoModal from '../../../CabecaModal';
import { useState } from 'react'
import Popup from '../../../Popup';


interface ModalProdutoProps {
    setModalAberto: React.Dispatch<React.SetStateAction<boolean>>
    modalAberto: boolean
    imgURL: string
    nome: string
    descricao: string
    preco: number
}

export default function ModalProduto({setModalAberto, modalAberto, imgURL, nome, descricao, preco}
    :ModalProdutoProps) 
    {

    const precoFormatado = preco.toFixed(2).toString().replace(/\./g, ",");
    const [popupAberto, setPopupAberto] = useState(false)

    function aoSubmeterFormulario (evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault()
        setModalAberto(false)
        setPopupAberto(true)
        setTimeout(()=> setPopupAberto(false), 5000)
    }

    return (
        <>
            <Modal
                isOpen={modalAberto}
                onRequestClose={()=> setModalAberto(!modalAberto)}
                contentLabel="janela de compra"

                className={styles['react-modal']}
            >
                <CabecalhoModal setModalAberto={setModalAberto} modalAberto={modalAberto} titulo="Confira detalhes sobre o produto" />
                
                <div className={styles["modal-corpo"]}>
                    <img src={`/${imgURL}`} alt={nome} />
                    <div>
                        <h3>{nome}</h3>
                        <p className={styles.descricao}>{descricao}</p>
                        <h4>R$ {precoFormatado}</h4>
                        <p className={styles.entrega}>Vendido e entregue por Riachuelo</p>
                        <form onSubmit={aoSubmeterFormulario}>
                            <div className={styles.cores}>
                                <h5>Cores:</h5>
                                <div>
                                    <input required type="radio" name="cores" id="azul" />
                                    <label htmlFor="azul">Azul claro</label>
                                </div>
                                <div>
                                    <input type="radio" name="cores" id="branco" />
                                    <label htmlFor="branco">Offwhite</label>
                                </div>
                                <div>
                                    <input type="radio" name="cores" id="preto" />
                                    <label htmlFor="preto">Preto</label>
                                </div>
                            </div>
                            <div className={styles.tamanho}>
                                <h5>Tamanho:</h5>
                                <div>
                                    <input required type="radio" name="tamanho" id="P" />
                                    <label htmlFor="P">P</label>
                                </div>
                                <div>
                                    <input type="radio" name="tamanho" id="PP" />
                                    <label htmlFor="PP">PP</label>
                                </div>
                                <div>
                                    <input type="radio" name="tamanho" id="M" />
                                    <label htmlFor="M">M</label>
                                </div>
                                <div>
                                    <input type="radio" name="tamanho" id="G" />
                                    <label htmlFor="G">G</label>
                                </div>
                                <div>
                                    <input type="radio" name="tamanho" id="GG" />
                                    <label htmlFor="GG">GG</label>
                                </div>
                            </div>
                            <button type="submit">Adicionar à sacola</button>
                        </form>
                    </div>
                </div>
            </Modal>
            <Popup popupAberto={popupAberto} setPopupAberto={setPopupAberto} titulo="Produto adicionado a sacola!"
            mensagem="Seu produto foi adicionado a sacola com sucesso, fique a vontade para continuar comprando ou finalizar a compra." />
        </>
  )
}
