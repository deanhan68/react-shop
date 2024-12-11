import './Products.css'
interface ICard {
    id: string
    title: string
    price: number
    urlImg:string
    sale: number
}
export const ProductItem = (card: ICard) => {

    console.log('card', card);
    

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