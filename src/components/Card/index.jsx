import React from 'react'
import styles from './index.module.scss'

export default function Card({img,nome,id, click}) {
    return (
        <div className={styles.card}>
            <img className={styles.card__imagem} src={img} alt={nome} />
            <div className={styles.card__info}>
                <p>{nome}</p>
                <button onClick={()=>click(id)}>Adicionar</button>
            </div>
        </div>
    )
}
