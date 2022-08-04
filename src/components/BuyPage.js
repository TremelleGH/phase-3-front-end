import React, {useState, useEffect} from 'react'
import BuyListingContainer from './BuyListingContainer'

function BuyPage() {

const [buyListings, setBuyListings] = useState([])

useEffect(() => {
  fetch('http://localhost:9292/listing/buy')
  .then(r => r.json())
  .then(buyListings => {
      setBuyListings(buyListings)
  })
},[]);


  return (
    <div>
      <BuyListingContainer buyListings={buyListings}/>
    </div>
  )
}

export default BuyPage