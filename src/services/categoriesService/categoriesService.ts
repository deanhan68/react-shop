import {DataService} from "../dataService/dataService.ts"
import {VITE_BASIC_API_ROUTES} from "../../config/ApiRoutes.ts"


const {requestPoint, data} = VITE_BASIC_API_ROUTES

class CategoriesService extends DataService{
    GetCategories = async () => {
        const categories = await this.Get(requestPoint + data)
        return categories ? categories : null
    }
}

export const categoriesService = new CategoriesService()

