import { useParams } from "react-router-dom"
import { getCategories } from "../../api/data"
import { ProductItem } from "./ProductItem"

export const Products = () => {

    const cats = getCategories()

    const params = useParams()

    console.log('p', params);
    

    const products = cats
    .map(cat => {return cat.data })
    .flat(2)

    return <div style={{
        marginTop: 20,
        display: 'flex',
        flexWrap: 'wrap',
        gap:15,
        justifyContent: 'center'

    }}>
        {
            products.map(card => {
                return <ProductItem {...card} />
            })
        }
    </div>
}