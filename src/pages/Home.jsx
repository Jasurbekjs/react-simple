import styles from './Home.module.css'

const Home = () => {
    return (
        <>
          <div>
            <h1>Cars Catalog</h1>  
            <div
                /* inline styles - bad practice */ 
                // style={{
                //     border: '1px solid red' 
                // }} 
                /**/

                /** ClassName - best practice */
                className={styles.item}
            >
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: 'url(/camry.jpg)'
                    }}
                />
                {/* <img src='/camry.jpg' alt='camry'/> */}
                <div className={styles.info}>
                    <h2>Car 1</h2>
                    <p>$100 000</p>
                    <button>Read more</button>
                </div>
            </div>
          </div>
        </>
    )
}

export default Home