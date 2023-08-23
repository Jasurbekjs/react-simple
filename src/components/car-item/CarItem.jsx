import styles from '../../pages/Home.module.css'

export const CarItem = ({car: item}) => (
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
            <p>{new Intl.NumberFormat('ru-RU',{
                style: 'currency',
                currency: 'USD'
            }).format(item.price)}</p>
            <button>Read more</button>
        </div>
    </div>
)