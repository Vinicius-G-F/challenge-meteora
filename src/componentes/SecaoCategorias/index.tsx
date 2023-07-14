import Categoria from "./Categoria"
import styles from './SecaoCategorias.module.scss'

export default function SecaoCategorias() {
    const categorias = [
        {
            nome: 'Camisetas', imgURL:'assets/imagens/categorias/Camisetas.png'
        },
        {
            nome: 'Bolsas', imgURL:'assets/imagens/categorias/Bolsas.png'
        },
        {
            nome: 'Calçados', imgURL:'assets/imagens/categorias/Calçados.png'
        },
        {
            nome: 'Calças', imgURL:'assets/imagens/categorias/Calças.png'
        },
        {
            nome: 'Casacos', imgURL:'assets/imagens/categorias/Casacos.png'
        },
        {
            nome: 'Óculos', imgURL:'assets/imagens/categorias/Óculos.png'
        }
    ]
  return (
    <section className={styles.secaoCategorias}>
        <h1>Busque por categoria:</h1>
        <ul className={styles["lista-categorias"]}>
            {categorias.map((categoria, id)=>{
                return <Categoria key={id} nome={categoria.nome} imagemURL={categoria.imgURL} />
            })}
        </ul>
    </section>
  )
}
