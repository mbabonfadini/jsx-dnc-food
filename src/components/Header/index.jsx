import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styles from "./index.module.scss"
import logo from "./logo.svg"

export default function Header() {
    const paginas = ["Variedades", "Lanches", "Pizzas", "Doces", "Promoções"]
    return (
        <header className={styles.header}>
            <div>
                <div className={styles.header__logo}>
                    <img className= {styles.header__logo__img} src={logo} alt="logo dnc" />
                    <p className= {styles.header__logo__img}>Food</p>
                </div>
                <nav className={styles.header__nav}>
                    <ul>
                        {paginas.map(pagina => <li key={pagina}>{pagina}</li>)}
                    </ul>
                </nav>
            </div>
            <h5 className= {styles.header__carrinho}>Minhas Compras <AiOutlineShoppingCart  className= {styles.header__carrinho__icon}/> </h5>
        </header>
    )
}
