import { useCallback, useEffect, useState } from 'react'
import CarForm from '../components/car-form/CarForm'
import { CarItem } from '../components/car-item/CarItem'
import { cars as carsData } from './cars.data'
import { CarService } from '../services/car.service'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [cars, setCars] = useState([])

    // const clearCars = useCallback(()=> ()=>{
    //     setCars([])
    // }, [cars]) 

    useEffect(()=>{
        const fetchData = async () => {
            const data = await CarService.getAll()
            setCars(data)
        }
        fetchData()

        // return clearCars
    }, [])

    /* useNavigate */
    // const nav = useNavigate() 
    
    return (
        <>
          <div>
            <h1>Cars Catalog</h1>
            {/* <button onClick={()=>nav('car/2')} >go</button>   */}
            <CarForm setCars={setCars}/>
            { cars.length ? cars.map(item=> {
                return (
                    <CarItem car={item} key={item.id} />
                )
                })
            : 
                <p>No Data</p>
            }
            
          </div>
        </>
    )
}

export default Home