import { IProduct } from "stores/products/types";

export interface ICartProduct extends IProduct {
    count: number
}