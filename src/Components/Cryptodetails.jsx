import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Cryptodetails(props) {
    let myitem = props.myData
    // state Variable
    const [data, setData] = useState({})
    const params = useParams()

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/' + params.id).then(
            (item) => {
                console.log(item.data)
                setData(item.data)
            }
        ).catch(
            (err) => { console.log(err) }
        )
    })
    return (

        <div className="container">
       <h3 className="display-2">Wellcome {myitem}</h3>
        </div >
    )
}

export default Cryptodetails