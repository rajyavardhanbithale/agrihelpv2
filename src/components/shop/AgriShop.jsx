import React from 'react';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './agrishop.css'
import Seed from './Seed';
function AgriShop() {
    const shopItems = [
        {
            title: 'Seeds Shop',
            image: '/shopImg/seeds.jpg',
            link: '/seed',
            description: "Buy",
        },
        {
            title: 'Fertilizer Shop',
            image: '/shopImg/fertilizer.jpg',
            link: '/fertilizer',
            description: "Buy",
        },
        {
            title: 'Agriculture Equipment',
            image: '/shopImg/tract.png',
            link: '/equipment',
            description: "Purchase ",
        },
    ];
    return (
        <>
            <main className='shopFrmt'>
                <section className="sec" style={{ backgroundColor: '#f6f9f6' }}>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        {shopItems.map((item) => (
                            <div className="col" key={item.title}>
                                <div className="card mb-4 rounded-3 shadow-lg">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">{item.title}</h4>
                                    </div>
                                    <div className="card-body">
                                        <img
                                            className="img-fluid"
                                            src={item.image}
                                            height="170px"
                                            width="360px"
                                            alt="picture"
                                        />
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>{item.description}</li>
                                        </ul>
                                        <Link className="custom-button" to={item.link}>
                                            <span>click here </span>  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default AgriShop;
