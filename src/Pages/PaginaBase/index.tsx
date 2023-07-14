import { Outlet } from "react-router-dom"
import '../../estilosGlobais/estilosGlobais.scss'
import styles from './PaginaBase.module.scss'
import Cabecalho from "../../componentes/Cabecalho"
import Rodape from "../../componentes/Rodape"

export default function PaginaBase (){
    return(
        <div className={styles.PaginaBase}>
            <Cabecalho />
            <main>
                <Outlet />
            </main>
            <Rodape />
        </div>
    )
}