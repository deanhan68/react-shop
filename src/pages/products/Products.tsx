import { observer } from "mobx-react"
import { productsStore } from "../../stores/products/productsStore"
import { ProductItem } from "./ProductItem"
import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"



export const Products = observer(() => {

    const params = useParams()
    const {pathname} = useLocation()
    

    useEffect(() => {
        if(params && params.cat) {
            productsStore.GetProductsByCategory(params.cat).then()
        } else if(pathname === '/products') {
            productsStore.GetProducts().then()
        }
    }, [params, pathname])
    

    return <div style={{
        marginTop: 20,
        display: 'flex',
        flexWrap: 'wrap',
        gap:15,
        justifyContent: 'center'

    }}>
        {
           productsStore.products.map(product => {
                return <ProductItem {...product} key={product.id}/>
            })
        }
    </div>
})