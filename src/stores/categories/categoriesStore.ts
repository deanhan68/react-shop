import { action, makeObservable, observable } from "mobx";
import { ICategories } from "./types";
import { getCategories } from "../../api/data";



class CategoriesStore {
    categories: ICategories[] = []

    constructor(){
        makeObservable(this)
    }

   setCategories = (value: ICategories[]) => {
        this.categories = value
    }

    GetCategories = () => {
        const categories = getCategories()
        this.setCategories(categories)
    }
}

export const categoriesStore = new CategoriesStore()