import React, { useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import imagens from '../../assets/products.mock'
import Galery from '../../components/Galery'
import Modal from '../../components/Modal'

export default function Home() {

    const [selecao,setSelecao] = useState('')
    const [modal,setModal] = useState(false)

    function click(value){
        imagens.map(img=>img.id===value?setSelecao(img):'')
        setModal(!modal)
    }

    return (
        <div>
            <Header/>
            <Galery imgs={imagens} click={click}/>
            {modal?<Modal img={selecao} click={()=>setModal(!modal)}/>:""}
        </div>
    )
}
