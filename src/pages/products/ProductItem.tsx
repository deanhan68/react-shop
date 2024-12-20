import { observer } from 'mobx-react'
import { DEFINE_SALE } from '../../config/constants'
import { IProduct } from '../../stores/products/types'

import { cartStore } from '../../stores/cartStore/cartStore'

import './Products.css'
import { PlusOutlined } from '@ant-design/icons'


export const ProductItem = observer((card: IProduct) => {

    const addToCart = (card: IProduct) => {
        cartStore.setProducts(card)
    }

    return <>
        <div className="item-card">
            <div className="card-image">
                <img src={card.urlImg} alt={card.title} />
            </div>
            <h3 > {card.title} </h3>
            <p>Цена: {card.price} руб.  
            <span style={{color: 'green'}}> -{card.sale > DEFINE_SALE ? card.sale : ''}</span>
            </p>
            <button onClick={() => addToCart(card)}><PlusOutlined />  Добавить в корзину</button>
        </div>
    </>
})