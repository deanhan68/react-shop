import { IProduct } from "../products/types"

export interface ICategories {
  id: string 
  name: string 
  urlImg: string
  data: IProduct[]
}