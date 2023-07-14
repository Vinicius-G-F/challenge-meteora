import { useLocation, useParams } from 'react-router-dom'
import Produto from './Produto'
import produtos from './produtos.json'
import styles from './SecaoProdutos.module.scss'

interface SecaoProdutosProps {
  titulo: string
}

export default function SecaoProdutos({ titulo }: SecaoProdutosProps) {
  const {id} = useParams()
  const {pathname} = useLocation()

  
  if (id){
    const produtosFiltrados = produtos.filter(item=>{
      return item.nome == id || item.categoria.nome == id
    })
    return (
      <section className={styles.secaoProdutos}>
        <h2 className={styles["secaoProdutos__titulo--galeria"]}>Resultado da sua busca por "{id}":</h2>
        {produtosFiltrados.length ? "" : 
        <h2 style={{color: "red"}}>Produto não encontrado =/</h2>
        }
        <div>
            <ul>
                {produtosFiltrados.map((produto)=>{
                    return <Produto key={produto.id} imgURL={produto.imgURL} nome={produto.nome} descricao={produto.descricao} preco={produto.preco} />
                })}
            </ul>
        </div>
    </section>
    )
  }

  return (
    <section className={styles.secaoProdutos}>
        <h2 className={pathname=="/galeria-de-produtos/" ? styles["secaoProdutos__titulo--galeria"]: ''}>{titulo}</h2>
        <div>
            <ul>
                {produtos.map((produto)=>{
                    return <Produto key={produto.id} imgURL={produto.imgURL} nome={produto.nome} descricao={produto.descricao} preco={produto.preco} />
                })}
            </ul>
        </div>
    </section>
  )
}
