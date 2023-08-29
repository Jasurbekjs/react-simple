import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CarService } from "../../services/car.service"
import { CarItem } from "../car-item/CarItem"

const CarDetail = () => {
    
    const {id} = useParams()
    const [car, setCar] = useState({})

    useEffect(()=>{
        const fetchData = async ()=> {
            const data = await CarService.getById(id)
            console.log(data)
            setCar(data)
        }
        fetchData()
    },[id])

    return (
        <div>
            <Link className="btn" to='/'> Back </Link>
            <br/>
            {!!car &&  <CarItem car={car}/>} 
            
        </div>
    )
}

export default CarDetail