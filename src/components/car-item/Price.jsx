import React from "react"

const Price = ({price}) => {
    console.log('rerender')
    return (
        <p>
            {new Intl.NumberFormat('ru-RU',{
                style: 'currency',
                currency: 'USD'
            }).format(price)}
        </p>
    )
}

export default React.memo(Price)