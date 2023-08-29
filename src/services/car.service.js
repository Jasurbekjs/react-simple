import { cars } from "../pages/cars.data"

export const CarService = {
    async getAll(){
        return cars
    },
    async getById(id){
        return cars.find(item=> Number(item.id) === Number(id))
    }
}