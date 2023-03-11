import React from 'react'
import styles from './index.module.scss'

export default function Modal({ img, click }) {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__item}>
                <div className={styles.modal__item__left}>
                    <div >
                        <img src={img.path} alt={img.name} />
                        <p>{img.name}</p>
                    </div>
                    <strong >{img.description}</strong>
                </div>
                <div className={styles.modal__item__right}>
                    <div>
                        <h2>Minha Sacola</h2>
                        <h1>{img.name}</h1>
                        <h3>R$ {img.price}</h3>
                    </div>
                    <div className={styles.modal__item__button}>
                        <button onClick={() => click()}>Continuar Comprando</button>
                        <button onClick={() => click()}>Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
