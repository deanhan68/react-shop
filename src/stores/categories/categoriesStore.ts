import { action, makeObservable, observable } from "mobx"
import {categoriesService} from "../../services/categoriesService/categoriesService.ts"
import { ICategories } from "./types"



class CategoriesStore {
    @observable categories: ICategories[] = []

    constructor(){
        makeObservable(this)
    }

   @action setCategories = (value: ICategories[]) => {
        this.categories = value
    }

   GetCategories = async () => {
       const response = await categoriesService.GetCategories()

       if(response && response.data){
           this.setCategories(response.data)
       }

   }
}

export const categoriesStore = new CategoriesStore()
