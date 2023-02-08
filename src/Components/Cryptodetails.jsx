import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function Cryptodetails() {
    // state Variable
    const [data, setdata] = useState([])
    const params = useParams()

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${params.cryptodetails}`).then(
            (res) => {
                console.log(res.data)
                setdata(res.data)
            }
        ).catch(
            (err) => { console.log(err) }
        )
    })
    return (
        <>
            <div className="container">
                <h1 className="display-4 mt-5">Wellcome to {data.name}</h1>
            </div >
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>1h</th>
                        <th>24h</th>
                        <th>7d</th>
                        <th>1 year</th>
                        <th>Mkt Cap</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {data.id}
                        </td>
                        <td>
                            {data.symbol}
                        </td>
                        <td>
                            {data.name}
                        </td>
                        <td>
                            ${data.market_data.current_price.usd}
                        </td>
                        <td>
                            %{data.market_data.price_change_percentage_1h_in_currency.usd}
                        </td>
                        <td>
                            %{data.market_data.price_change_24h_in_currency.usd}
                        </td>
                        <td>
                            %{data.market_data.price_change_percentage_7d_in_currency.usd}
                        </td>
                        <td>
                            %{data.market_data.price_change_percentage_1y_in_currency.usd}
                        </td>
                        <td>
                            {data.market_data.market_cap.usd}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Cryptodetails