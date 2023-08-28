import { useState } from 'react'
import styles from './CarForm.module.css'

const clearData = {
    name: '',
    price: '',
    image: ''
}

const CarForm = ({setCars}) => {
    const [data, setData] = useState(clearData)

    const addNewCar = (e) => {
        e.preventDefault()
        setCars(prev=> [
            {...data, id: prev.length+1}, 
            ...prev 
        ])
        setData(clearData)
    }

    return (
        <>
            <form className={styles.form}>
                <input 
                    placeholder="Name"
                    value={data.name}
                    onChange={e => setData( prev => (
                        {...prev, name: e.target.value}
                    ))}
                />
                <input 
                    placeholder="Price" 
                    value={data.price}
                    onChange={e => setData( prev => (
                        {...prev, price: e.target.value}
                    ))}
                />
                <input 
                    placeholder="Image" 
                    value={data.image}
                    onChange={e => setData( prev => (
                        {...prev, image: e.target.value}
                    ))}
                />
                <button
                    className='btn'
                    onClick={e=>addNewCar(e)} 
                >Add Car</button>
            </form>
        </>
    )
}

export default CarForm