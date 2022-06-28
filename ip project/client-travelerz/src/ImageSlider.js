import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../src/Destination/Destination.css';


function ImageSlider() {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/1200x320_MidSummerSale_Nepal_17June.jpg "
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/1200x320_MidSummerSale_Dubai_16June.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/1200x320_MidSummerSale_Singapore_11.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/1200x320_MidSummerSale_Kashmir_16June.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/1200x320_MidSummerSale_Thailand_17June.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/1200x320-Maldives-flashdeal.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/1200x320-Taj-Hol2-09062022.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/1200x320-August_new.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  )
}

export default ImageSlider