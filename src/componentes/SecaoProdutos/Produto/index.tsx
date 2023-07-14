import ModalProduto from './ModalProduto'
import styles from './Produto.module.scss'
import { useState } from 'react'


interface produtoProps {
    nome: string
    descricao: string
    preco: number
    imgURL: string
}

export default function Produto({nome, descricao, preco, imgURL}: produtoProps) {
    const precoFormatado = preco.toFixed(2).toString().replace(/\./g, ",");
    const [modalAberto, setModalAberto] = useState(false)

    return (
        <>
            <li className={styles['produto']}>
                <div className={styles['produto-imagem']} style={{backgroundImage: `url("/${imgURL}")`}}/>
                <div className={styles['produto-info']}>
                    <h3>{nome}</h3>
                    <p>{descricao}</p>
                    <h4>R$ {precoFormatado}</h4>
                    <button onClick={()=> setModalAberto(!modalAberto)}>Ver mais</button>
                </div>
                <ModalProduto 
                    setModalAberto={setModalAberto} 
                    modalAberto={modalAberto} 
                    imgURL={imgURL} 
                    nome={nome}
                    preco={preco}
                    descricao={descricao}
                />
            </li>
            
        </>

    )
}
