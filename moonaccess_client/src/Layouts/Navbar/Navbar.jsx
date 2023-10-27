import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { BsBag } from 'react-icons/bs'

import './Navbar.scss'
const Navbar = () => {
    return (
        <div className='navbar'>


            <div className="container">
                <div className="left">
                    <img src="" alt="Logo" />
                    <h3>Moon Accessories</h3>
                </div>


                <div className="center">
                    <ul>
                        <li>HOME</li>
                        <li>CATEGORIES</li>
                        <li>STORE</li>
                    </ul>
                </div>

                <div className="right">
                    <ul>
                        <li><BiSearch /></li>
                        <li><AiOutlineMail /></li>
                    </ul>

                    <ul>
                        <li><MdOutlineFavoriteBorder /></li>
                        <li><BsBag /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar