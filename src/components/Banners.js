import React from 'react'
import Card from 'react-bootstrap/Card';
import "../stylesheets/Card.css"
import {Link} from "react-router-dom"
import { Nav } from 'react-bootstrap';

function Banners() {
return (
<div>
<div className='card-container'>
<Card>
<Nav.Link as={Link} to={"/buy"}>
<Card.Img variant="top" src="https://www.thelinehotel.com/los-angeles/wp-content/uploads/sites/2/2022/04/dtla.jpg"/></Nav.Link>
</Card>
<Card>
<Nav.Link as={Link} to={"/rent"}>
<Card.Img variant="top" src="https://park.marmaranyc.com/hubfs/Blog%20Pictures/nycinjune.jpg" /></Nav.Link>
</Card>
</div>
</div>
  )
}

export default Banners