import { IProduct } from '../../stores/products/types'

import './Products.css'



export const ProductItem = (card: IProduct) => {

    return <>
        <div className="item-card">
            <div className="card-image">
                <img src={card.urlImg} alt={card.title} />
            </div>
            <h3> {card.title} </h3>
            <p>Цена: {card.price} руб.</p>
            <button>Заказать</button>
        </div>
    </>
} 