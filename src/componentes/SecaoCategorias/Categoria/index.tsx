import { useNavigate } from 'react-router-dom'
import styles from './Categoria.module.scss'

interface CategoriaProps {
    nome: string
    imagemURL: string 
}

export default function Categoria({nome, imagemURL}: CategoriaProps) {
  const navegacao = useNavigate()
  return (
    <li onClick={()=> navegacao(`/galeria-de-produtos/${nome}`)} className={styles.categoria}>
        <div className={styles['categoria-imagem']} style={{backgroundImage: `url('${imagemURL}')`}}></div>
        <div className={styles['categoria-legenda']}><p>{nome}</p></div>
    </li>
  )
}
