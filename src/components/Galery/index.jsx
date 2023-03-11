import React from 'react'
import Card from '../Card'
import styles from './index.module.scss'

export default function Galery({ imgs, click }) {
    return (
        <div className={styles.galery}>
            {
                imgs.map(img =>
                    <Card
                        id={img.id}
                        img={img.path}
                        nome={img.name}
                        key={img.id}
                        click={click} />)
            }
        </div>
    )
}
