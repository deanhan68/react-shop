import { observer } from 'mobx-react'
import { DEFINE_SALE } from '../../config/constants'
import { IProduct } from '../../stores/products/types'

import './Products.css'



export const ProductItem = observer((card: IProduct) => {

    return <>
        <div className="item-card">
            <div className="card-image">
                <img src={card.urlImg} alt={card.title} />
            </div>
            <h3> {card.title} </h3>
            <p>Цена: {card.price} руб. 
            <span style={{color: 'grey'}}>{card.sale > DEFINE_SALE ? card.sale : ''}</span>
            </p>
            <button>Заказать</button>
        </div>
    </>
})