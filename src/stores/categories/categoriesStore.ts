import { action, makeObservable, observable } from "mobx";
import { ICategories } from "./types";



class CategoriesStore {
    categories: ICategories[] = []

    constructor(){
        makeObservable(this)
    }

   setCategories = (value: ICategories[]) => {
        this.categories = value
    }

    GetCategories = () => {
        const categories: any = []
        this.setCategories(categories)
    }
}

export const categoriesStore = new CategoriesStore()