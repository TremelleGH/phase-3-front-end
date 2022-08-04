import React from 'react'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {Row} from 'react-bootstrap'


function BuyListingCard({buyListing}) {
const {price, picture_url, built, sqrft, bath, bed, laundry, addy,} = buyListing

return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
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
      ))}
    </Row>
  );
}

export default BuyListingCard