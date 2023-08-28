import { useState } from 'react'
import styles from './CarForm.module.css'

const CarForm = ({setCars}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const addNewCar = (e) => {
        e.preventDefault()
        setCars(prev=> [{id: prev.length+1, name, price, image}, ...prev ])
    }

    return (
        <>
            <form className={styles.form}>
                <input 
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    placeholder="Price" 
                    value={price}
                    onChange={e=>setPrice(e.target.value)}
                />
                <input 
                    placeholder="Image" 
                    value={image}
                    onChange={e=>setImage(e.target.value)}
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