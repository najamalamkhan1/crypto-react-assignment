import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Crypto() {
    const [currency, setCurrency] = useState([])

    useEffect(() => {

        axios.get('https://api.coingecko.com/api/v3/coins/').then(
            (res) => {
                setCurrency(res.data)
                console.log(res.data)
            }
        ).catch(
            (err) => { console.log(err) }
        )
    }, [])

    return (
        <>

            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Coin</th>
                            <th>ID</th>
                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th>1 year</th>
                            <th>Mkt Cap</th>
                            <th>Last 7d</th>
                        </tr>
                    </thead>
                    {currency.map((item, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <th>{index + 1}</th>
                                    <Link to={`${item.id}`}> <td><img src={item.image.small} alt={item.name} /><h6 className='text-dark'>{item.name}</h6>
                                    </td>
                                    </Link>
                                    <td >{item.id}</td>
                                    <td>{item.symbol}</td>
                                    <td>{item.name}</td>
                                    <td>${item.market_data.current_price.usd}</td>
                                    <td>%{item.market_data.price_change_percentage_1h_in_currency.usd}%</td>
                                    <td>%{item.market_data.price_change_24h_in_currency.usd}</td>
                                    <td>%{item.market_data.price_change_percentage_7d_in_currency.usd}</td>
                                    <td>%{item.market_data.price_change_percentage_1y_in_currency.usd}</td>
                                    <td>${item.market_data.market_cap.usd}</td>
                                    <td><img src={`https://www.coingecko.com/coins/${index}/sparkline`} /></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>

        </>
    )
}

export default Crypto