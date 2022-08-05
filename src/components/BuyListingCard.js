import React from 'react'
import { Card } from 'react-bootstrap'



function BuyListingCard({buyListing}) {
const {price, picture_url, built, sqrft, bath, bed, addy,} = buyListing


function handleDelete (id) {
  fetch(`http://localhost:9292/listing/${id}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json",
    },
  })
  .then(res=> res.json())
  .then(data=> (console.log(data)))
}

return (
  <div className='float-container'>
      {Array.from({ length: 1 }).map((_, idx) => (
        <div className='float-child'>
          <Card>
            <Card.Img className='image' variant="top" src={picture_url}/>
            <Card.Body>
              <Card.Title>{addy}</Card.Title>
              <Card.Text>
                <ol>
                <li>Cost: ${price}</li>
                <li>Year Built : {built}</li>
                <li>Dimensions : {sqrft} square ft</li>
                <li>Number Of Bedrooms : {bed}</li>
                <li>Number Of Bathrooms : {bath}</li>
                </ol>
                <button onClick={(e) => {
                  e.preventDefault()
                  handleDelete(buyListing.id)}}>
                    Delete</button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default BuyListingCard