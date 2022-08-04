import React from 'react'
import {Carousel} from 'react-bootstrap'
import "../stylesheets/Home.css"
import Banners from './Banners'

function Home() {
  return (
    <div id="home">
        <div className="carousel-container">
    <Carousel fade>
    <Carousel.Item interval={5000} className="box">
        <img
        className="d-block w-100"
        src="https://photos.zillowstatic.com/fp/fe0e6d4cd07b333b35aed4f2b4aa262c-p_e.jpg"
        alt="First slide"
        />
        <Carousel.Caption>
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://photos.zillowstatic.com/fp/0c1099a1882a904acc8cedcd83ebd9dc-p_e.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
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
      <Carousel.Item interval={5000}>
        <text>
          <header>Testimonials
            <p>
                <ol>
                  <ol>"Namas Casas helped me sell my mansion at the end of the show" - Uncle Phil</ol>
                  <ol>"Namas Casas helped my family find our forever home. The selections of homes  here is unmatched!” - Maja Family</ol>
                  <ol>“With an interface that’s more welcoming and intuitive than all of their competitors - Namas Casas is the future of online home searching” -   Kuca Family</ol>
                </ol>
            </p>
            </header>
        </text>
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <text>
          <header>Testimonials</header>
            <p>
              <ol>
                <ol>
                  "Namas Casa is the greatest company that I have ever worked with! Maybe I'll buy it one day." - Jeff Bezos
                </ol>
                  <ol>
                  "If it weren't for Linda's help in finding my property, I would be living in a million dollar mansion instead of on my 150 million dollar private island" - Faiz
                  </ol>
              </ol>
            </p>
        </text>
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://i.gifer.com/hx.gif"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://i.gifer.com/hx.gif"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      </div>
      <div>
        <Banners/>
      </div>
    </div>
  )
}

export default Home