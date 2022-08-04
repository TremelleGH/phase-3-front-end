import React from 'react'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {Row} from 'react-bootstrap'



function RentListingCard({listing}) {
const {price, picture_url, built, sqrft, bath, bed, laundry, addy,} = listing

return (
  <div className='rent-container'>
      {Array.from({ length: 1 }).map((_, idx) => (
        <div className='rent-child'>
        <Col>
          <Card>
            <Card.Img variant="top" src={picture_url}/>
            <Card.Body>
              <Card.Title>{addy}</Card.Title>
              <Card.Text>
                <ol>
                <li>Cost Per Month : ${price}</li>
                <li>Year Built : {built}</li>
                <li>Dimensions : {sqrft} square ft</li>
                <li>Number Of Bedrooms : {bed}</li>
                <li>Number Of Bathrooms : {bath}</li>
                </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </div>
      ))}
    </div>
  );
}

export default RentListingCard