import { action, computed, makeObservable, observable } from "mobx"
import { ICartProduct } from "./types"
import { IProduct } from "stores/products/types"


class CartStore {
    @observable products: ICartProduct[] = []

    constructor(){
        makeObservable(this)
    }

    @action setProducts = (card: IProduct) => {

        const existedCard = this.products.find(c => c.id === card.id)

        if(existedCard){
            existedCard.count += 1
        } else {
            const preparedCard: ICartProduct = {
                ...card,
                count: 1
            }
            
            this.products = [...this.products, preparedCard]
        }
        
    }

    deleteCard = (card: ICartProduct) => {
        const productsAfterDeleting = this.products.filter(item => item.id !== card.id)

        this.products = productsAfterDeleting
    }

    @action minusTo = (card: ICartProduct) => {
       const findCard = this.products.find(item => item.id === card.id) 

       if(findCard) {
        findCard.count -= 1
       }

    }

    @action plusTo = (card: ICartProduct) => {
        const findCard = this.products.find(item => item.id === card.id)

        if(findCard) {
            findCard.count += 1
        }
    }

    @computed get total() {
        const { totalCount, totalPrice } = this.products.reduce((acc, item) => {
            acc.totalCount+=item.count
            acc.totalPrice+=(item.price * item.count)
            return acc
        }, {
            totalPrice: 0,
            totalCount: 0
        })

        return {
            totalPrice,
            totalCount
        }
    }
}

export const cartStore = new CartStore()
