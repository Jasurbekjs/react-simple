import { Link } from 'react-router-dom'
import styles from '../../pages/Home.module.css'
import Price from './Price'
import { useState } from 'react'

export const CarItem = ({car: item}) =>{
    
    const [count, setCount] = useState(0)

    return (
        <div
            /* inline styles - bad practice */ 
            // style={{
            //     border: '1px solid red' 
            // }} 
            /**/

            /** ClassName - best practice */
            className={styles.item}
            key={item.id}
        >
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${item.image})`
                }}
            />
            {/* <img src='/camry.jpg' alt='camry'/> */}
            <div className={styles.info}>
                <h2>{item.name}</h2>
                <button 
                    onClick={()=>setCount(prev=>prev+1)}
                    > 
                    Counter {count}
                </button>
                <Price price={item.price} />
                <Link className='btn' to={`/car/${item.id}`}>Read more</Link>
            </div>
        </div>
    )
}