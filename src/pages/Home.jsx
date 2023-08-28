import { useState } from 'react'
import CarForm from '../components/car-form/CarForm'
import { CarItem } from '../components/car-item/CarItem'
import { cars as carsData } from './cars.data'

const Home = () => {

    const [cars, setCars] = useState(carsData)

    return (
        <>
          <div>
            <h1>Cars Catalog</h1>  
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