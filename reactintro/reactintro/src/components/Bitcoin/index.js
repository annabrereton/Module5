// Create a new component that fetches and displays the price of bitcoin in GBP
// https://api.coindesk.com/v1/bpi/currentprice/gbp.json
// Stretch goal: Re-fetch the data every 30 seconds so your component live updates with the current value of BTC
// Stretch-stretch goal: Update the app to it is a convertor of BTC to Freddo bars (25p each)

import {useEffect, useState} from "react";
// Using set interval:
// https://rapidapi.com/guides/api-requests-intervals
// See notes on mounting, unmounting and useEffect
const DisplayBitcoin = () => {

    const [price, setPrice] = useState(0)
    const [time, setTime] = useState(0)
    const getBTCData = () => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then(res => res.json())
            .then(data => {
                setPrice(data.bpi.GBP.rate_float)
                setTime(data.time.updated)
            })
    }
// when you want to do something when a component mounts use .... When you
    // [] when a component is mounted React if the
    useEffect(() => {
        getBTCData()
        const timer = setInterval(getBTCData, 10000)
        return () => {
        clearInterval(timer)
       }
    }, [])

    return (
        <>
            <p>The price of Bitcoin on {time} is £{Math.floor(price)}</p>
            <p>You can buy {(price / 0.25)} Freddos with one Bitcoin!</p>
        </>
    )
}

export default DisplayBitcoin