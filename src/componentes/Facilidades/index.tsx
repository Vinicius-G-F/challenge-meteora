import pixIMG from './x-diamond.svg'
import trocaPNG from './arrow-repeat.svg'
import sustentabilidadeIMG from './Subtract.svg'
import styles from './Facilidades.module.scss'
import classNames from 'classnames'

export default function Facilidades() {
  return (
    <div className={styles.facilidades}>
        <h2>Conheça todas as nossas facilidades</h2>
        <div className={classNames({
            [styles.facilidades__item]: true,
            [styles["facilidades__item--1"]]: true
            }) }>
            <img src={pixIMG} alt="pix" />
            <div>
                <h5>PAGUE PELO PIX</h5>
                <p>Ganhe 5% OFF em <br/> pagamentos via PIX</p>
            </div>
        </div>
        <div className={classNames({
            [styles.facilidades__item]: true,
            [styles["facilidades__item--2"]]: true
            }) }>
            <img src={trocaPNG} alt="troca" />
            <div>
                <h5>TROCA GRÁTIS</h5>
                <p>Fique livre para trocar em até 30 dias.</p>
            </div>
        </div>
        <div className={classNames({
            [styles.facilidades__item]: true,
            [styles["facilidades__item--3"]]: true
            }) }>
            <img src={sustentabilidadeIMG} alt="sustentabilidade" />
            <div>
                <h5>SUSTENTABILIDADE</h5>
                <p>Moda responsável, que respeita o meio ambiente.</p>
            </div>
        </div>
    </div>
  )
}
