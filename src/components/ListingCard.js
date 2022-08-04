import React from 'react'

function ListingCard({listing}) {
const {price} = listing



  return (
    <li className="listings_item">
      <div className="listing">
        <img className="listing_image"/>
          <div className="listing_content">
            <div>{price}</div>
          </div>
      </div>
    </li>
  )
}

export default ListingCard