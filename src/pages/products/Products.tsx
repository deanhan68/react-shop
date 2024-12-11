import { useParams } from "react-router-dom"
import { ProductItem } from "./ProductItem"
import { useEffect, useState } from "react"
import { ICategories } from "../../stores/categories/types"
import { IProduct } from "../../stores/products/types"

export const Products = () => {

    const [categories, setCategories] = useState<ICategories[]>([])
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
      fetch("https://6759b537099e3090dbe2a885.mockapi.io/data")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setCategories(data)
        })
    }, [])

    useEffect(()=>{
        console.log('cats', categories);
        
        const products = categories
        .map(cat => {return cat.data })
        .flat(2)

        setProducts(products)
    }, [categories])

   

    
   

    return <div style={{
        marginTop: 20,
        display: 'flex',
        flexWrap: 'wrap',
        gap:15,
        justifyContent: 'center'

    }}>
        {
            products.map(product => {
                return <ProductItem {...product} />
            })
        }
    </div>
}