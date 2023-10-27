import React, { useEffect, useState } from 'react'
import Navbar from '../../Layouts/Navbar/Navbar'
import './Home.scss'
import { BsArrowRight, BsCart } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

import IMG from '../../Assets/Images/pexels-jose-ricardo-barraza-morachis-1454166.jpg'
import Scrollbar from 'smooth-scrollbar';
import sanityClient from '../../sanityClient';


import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
    return builder.image(source)
}



const options = {
    damping: .1,
}

const Home = () => {

    const [top_products, setTopProducts] = useState([]);
    const [promotion, setPromotion] = useState({});


    useEffect(() => {
        Scrollbar.init(document.body, options);

        fetchTopSelled();
        fetchPromotion();
    }, []);



    const fetchPromotion = async () => {

        // Fetch promotion from Sanity
        await sanityClient.fetch('*[_type == "promotion"]')
            .then((data) => {
                setPromotion(data[0]);
                console.log(data[0]);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }


    const fetchTopSelled = async () => {

        // Fetch products from Sanity
        await sanityClient.fetch('*[_type == "product" && top_selled == true]') // 'product' should match your Sanity schema type name
            .then((data) => {
                setTopProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }

    return (
        <>
            <Navbar />

            <div className='home'>
                <div className="home-container">
                    <div className="center-title">
                        <div className="title">
                            <h4>JEWRLY</h4>
                            <h1>NEW WAY OF BEAUTY</h1>
                            <p>Get your hands on our new collection</p>
                        </div>
                        <button>SHOP NOW</button>
                    </div>
                </div>



                <div className="promo-container">
                    <div className="left">
                        <img src={urlFor(promotion.image).url()} alt="promo-pic-product" />
                        <h2>{promotion.precentage}% OFF</h2>
                    </div>

                    <div className="right">
                        <div className="cont">
                            <h2>PROMOTION</h2>
                            <h3>{promotion.title}</h3>

                            <p>{promotion.description}</p>

                            <a href="">BUY NOW <BsArrowRight /></a>

                            <h4>{promotion.precentage}%</h4>
                        </div>
                    </div>
                </div>


                <div className="categories-container">
                    <div className="cards">
                        <div className="card">
                            <div className="text-container">
                                <h2>NECKLACES</h2>

                                <a href="">SHOW MORE <FaArrowRight /></a>
                            </div>

                            <img src={IMG} alt="promo-pic-product" />

                        </div>
                        <div className="card">
                            <div className="text-container">
                                <h2>BRACELETS</h2>

                                <a href="">SHOW MORE <FaArrowRight /></a>
                            </div>

                            <img src={IMG} alt="promo-pic-product" />

                        </div>
                        <div className="card">
                            <div className="text-container">
                                <h2>RINGS</h2>

                                <a href="">SHOW MORE <FaArrowRight /></a>
                            </div>

                            <img src={IMG} alt="promo-pic-product" />

                        </div>
                        <div className="card">
                            <div className="text-container">
                                <h2>MATCHING</h2>

                                <a href="">SHOW MORE <FaArrowRight /></a>
                            </div>

                            <img src={IMG} alt="promo-pic-product" />

                        </div>
                    </div>
                </div>

                <div className="top-selled">
                    <h2>TOP SELLED <span>JEWRLY</span></h2>


                    <div className="cards">

                        <div className="card">
                            <img src={IMG} alt="promo-pic-product" />

                            <div className="body">

                                <div className="upper">
                                    <div className="text">
                                        <h3>Title of product <span>Available <MdVerified /></span></h3>
                                        <p>Lorem ipsum just to make sure.</p>
                                    </div>

                                    <div className="price">
                                        <h4>30 MAD</h4>
                                    </div>
                                </div>

                                <button>BUY NOW <BsCart /></button>

                            </div>

                        </div>


                    </div>


                    <a href="" className='show_all'>SHOW ALL</a>
                </div>
            </div>

        </>

    )
}

export default Home