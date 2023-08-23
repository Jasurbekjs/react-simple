import { CarItem } from '../components/car-item/CarItem'
import { cars } from './cars.data'

const Home = () => {
    return (
        <>
          <div>
            <h1>Cars Catalog</h1>  
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