import React, {useState, useEffect} from 'react'
import RentListingContainer from './RentListingContainer';


function RentPage() {

const [listings, setListings] = useState([])

useEffect(() => {
    fetch('http://localhost:9292/listing/rent')
    .then(r => r.json())
    .then(listings => {
        setListings(listings)
    })
},[]);



  return (
    <div>
        <RentListingContainer listings={listings}/>
    </div>
  )
}

export default RentPage