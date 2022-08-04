import React from 'react'
import ListingCard from './ListingCard'

function ListingsContainer({listings}) {

const rentalList = listings.map(listing => {
  return <ListingCard key={listing.id} listing={listing}/>
})


return (
    <main>
      <ul className="cards">
          {rentalList}
      </ul>
    </main>
  )
}

export default ListingsContainer