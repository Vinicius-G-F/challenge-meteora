import SecaoProdutos from '../../componentes/SecaoProdutos'
import Facilidades from '../../componentes/Facilidades'
import EnviarEmail from '../../componentes/EnviarEmail'

export default function GaleriaDeProdutos() {
  return (
    <div>
        <SecaoProdutos titulo="Galeria de produtos" />
        <Facilidades />
        <EnviarEmail />
    </div>
  )
}
