import React from 'react'
import BuyListingCard from './BuyListingCard'

function BuyListingContainer({buyListings}) {

const buyList = buyListings.map(buyListing => {
return <BuyListingCard key={buyListing.id} buyListing={buyListing}/>
})


return (
    <div>
        {buyList}
    </div>
)
}

export default BuyListingContainer