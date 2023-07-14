import { useState } from "react"
import styles from "./Cabecalho.module.scss"
import { Link, useNavigate } from "react-router-dom"
import classNames from "classnames"

export default function Cabecalho() {
    const [linksAbertos, setLinksAbertos] = useState(false)
    const [campoBusca, setCampoBusca] = useState("")
    const navegacao = useNavigate();
    function AoSubmeterBusca (evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evento.preventDefault()
        navegacao(`galeria-de-produtos/${campoBusca}`)
    }
    return (
        <header>
            <div className={styles["cabecalho-logo-e-menu"]}>
                <img src="/assets/imagens/Logo.png" alt="logo" />
                <div className={styles["menu-hamburguer"]}>
                    <button onClick={()=>{setLinksAbertos(true)}} className={styles["botao-hamburguer"]} />
                    <nav className={classNames({
                        [styles["lista-flutuante"]]: true,
                        [styles["lista-flutuante--esconder"]]: !linksAbertos,
                        [styles["lista-flutuante--mostrar"]]: linksAbertos
                    })}>
                        <button onClick={()=>{setLinksAbertos(false)}} className={styles['botao-esconder-links']} />
                        <div className={styles.links}>
                            <Link to='/'>Home</Link>
                            <Link to='/'>Nossas Lojas</Link>
                            <Link to='/'>Novidades</Link>
                            <Link to='/'>Promoções</Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={styles['cabecalho-campo-busca']}>
                <form>
                    <input onChange={evento => setCampoBusca(evento.target.value)} type="text" placeholder="Digite o produto" />
                    <button onClick={AoSubmeterBusca} type="submit"></button>
                </form>
            </div>
        </header>
  )
}
