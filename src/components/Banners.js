import React from 'react'
import Card from 'react-bootstrap/Card';
import "../stylesheets/Card.css"
import {Link} from "react-router-dom"
import { Nav } from 'react-bootstrap';

function Banners() {
return (
<div>
<div className='card-container'>
<Nav.Link as={Link} to={"/buy"}>
<Card>
<Card.Img variant="top" src="https://www.thelinehotel.com/los-angeles/wp-content/uploads/sites/2/2022/04/dtla.jpg"/>
<Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
</Card>
</Nav.Link>
<Card>
<Nav.Link as={Link} to={"/rent"}>
<Card.Img variant="top" src="https://park.marmaranyc.com/hubfs/Blog%20Pictures/nycinjune.jpg" /></Nav.Link>
</Card>
</div>
</div>
  )
}

export default Banners