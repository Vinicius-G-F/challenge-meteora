import Carrossel from '../../componentes/Carrossel'
import EnviarEmail from '../../componentes/EnviarEmail'
import Facilidades from '../../componentes/Facilidades'
import SecaoCategorias from '../../componentes/SecaoCategorias'
import SecaoProdutos from '../../componentes/SecaoProdutos'

export default function Home (){

    return(
        <div>
            <Carrossel />
            <SecaoCategorias />
            <SecaoProdutos titulo="Produtos que estão bombando!" />
            <Facilidades />
            <EnviarEmail />
        </div>
    )
}