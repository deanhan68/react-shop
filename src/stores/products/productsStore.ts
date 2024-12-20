import { action, makeObservable, observable } from "mobx"
import { IProduct } from "./types"
import { categoriesService } from "../../services/categoriesService/categoriesService"
import { ICategories } from "../../stores/categories/types"



class ProductsStore {
    @observable products: IProduct[] = []
    @observable categories: ICategories[] = []

    @observable loading = false

    constructor(){
        makeObservable(this)
    }

    @action setProducts = (value: IProduct[]) => {
        this.products = value
    }

    GetProducts = async () => {
        this.setLoading(true)
        const cats = await categoriesService.GetCategories()
        if(cats?.data && cats?.data.length > 0 ){
            this.categories = cats.data
            const products = cats.data
                .map((cat: any) => {return cat.data })
                .flat(2)
            this.setProducts(products)
        }
        this.setLoading(false)
    }

    GetProductsByCategory = async (categoryId: string) => {

        await this.GetProducts()

        const findCategory = this.categories.find(item => {
            return item.id === categoryId
        })

        if(findCategory) {
            const products = findCategory.data
            this.setProducts(products)
        } else {
            this.setProducts([])
        }
    }

    GetProductsWithSale = async (sale: number) => {

        await this.GetProducts()

        const findProducts= this.products.filter(item => {
            return item.sale > sale
        })

        this.setProducts(findProducts)
    }

    @action setLoading = (value: boolean) => {
        this.loading = value
    }
}

export const productsStore = new ProductsStore()