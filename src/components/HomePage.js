import React from 'react'
import {Carousel} from 'react-bootstrap'
import "../stylesheets/Home.css"
import Banners from './Banners'

function Home() {
  return (
    <div id="home">
        <div className="carousel-container">
    <Carousel fade>
    <Carousel.Item interval={1700}>
        <img
        className="d-block w-100"
        src="https://photos.zillowstatic.com/fp/fe0e6d4cd07b333b35aed4f2b4aa262c-p_e.jpg"
        alt="First slide"
        />
        <Carousel.Caption>
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1700}>
        <img
          className="d-block w-100"
          src="https://photos.zillowstatic.com/fp/0c1099a1882a904acc8cedcd83ebd9dc-p_e.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1700}>
        <img
          className="d-block w-100"
          src="https://photos.zillowstatic.com/fp/b4eb3c24037bc261c842088c44076e18-p_e.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      <Carousel>
      <Carousel.Item interval={1700}>
        <text>
            <p>
                "This is the most beautiful home I've purchased" by Sarah J.
            </p>
        </text>
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1700}>
        <img
          className="d-block w-100"
          src="https://photos.zillowstatic.com/fp/0c1099a1882a904acc8cedcd83ebd9dc-p_e.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1700}>
        <img
          className="d-block w-100"
          src="https://photos.zillowstatic.com/fp/b4eb3c24037bc261c842088c44076e18-p_e.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </div>
      <div>
        <Banners/>
      </div>
    </div>
  )
}

export default Home