import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './agrishop.css'

function Seed() {
  const shopItems = [
    {
      image: '/shopImg/seedbasket.png',
      alt: 'seedbasket logo',
      text: 'Seed basket (seed seller website)',
      link: 'https://www.seedbasket.in/',
    },
    {
      image: '/shopImg/ugaoo.png',
      alt: 'seed',
      text: 'uggaoo (seed seller)',
      link: 'https://www.ugaoo.com/collections/seeds',
    },
    {
      image: '/shopImg/urjaseed.jpg',
      alt: 'seed',
      text: 'Urja seed (seeds seller)',
      link: 'https://urjaseeds.com/',
    },
    {
      image: '/shopImg/NSC.png',
      alt: 'seed',
      text: 'National seed corporation',
      link: 'https://www.indiaseeds.com/',
    },
    {
      image: '/shopImg/ankur nurseru.jpg',
      alt: 'seed',
      text: 'Ankurnursery',
      link: 'https://www.ankurnursery.com/store/category/19/seeds/sub-category/26/vegetable-seeds',
    },
    {
      image: '/shopImg/mybagecha.jpg',
      alt: 'seed',
      text: 'mybagecha (seed seller)',
      link: 'https://mybageecha.com/collections/buy-vegetable-seeds-online',
    },
  ];

  return (
    <>
      <main className='shopfrmt'>
      
        <p class="h1 m-5">Seed Shop</p>

        <div className="album py-5 bg-body-tertiary">
          <div className="backDiv m-3">
            <Link to="/shop" className="custom-button-back">
              <i class="fas fa-arrow-alt-circle-left "></i>
              <span>  Back to Shop</span>

            </Link>
          </div>

          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {shopItems.map((item, index) => (
                <div className="col" key={index}>
                  <Card className="h-100 d-flex flex-column justify-content-between"> {/* Add d-flex and flex-column classes */}
                    <Card.Img src={item.image} alt={item.alt} className="card-img-top" />
                    <Card.Body>
                      <Card.Title>{item.text}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="bg-white">
                      <Button href={item.link} className="custom-button" target="_blank" >  View <i className="fas fa-arrow-circle-right ml-1"></i> </Button>
                    </Card.Footer>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Seed;
