import React from 'react'
import RentListingCard from './RentListingCard'

function RentListingContainer({listings}) {

const rentalList = listings.map(listing => {
  return <RentListingCard key={listing.id} listing={listing}/>
})


return (
    <main>
      <ul className="cards">
          {rentalList}
      </ul>
    </main>
  )
}

export default RentListingContainer