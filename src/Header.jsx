import React, {useState, useEffect, useRef} from 'react'

import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {RiAliensFill} from 'react-icons/ri'
import {FiMenu} from 'react-icons/fi'

import logo from './logo.svg'

import './Header.css'

export default function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const linksContainer = useRef('')
    const linksNav = useRef('')
    console.log(isMenuActive)

    useEffect(() =>{
        const linksHeight = linksNav.current.getBoundingClientRect().height
        if(isMenuActive){
            linksContainer.current.style.height = `${linksHeight}px`
        } else{
            linksContainer.current.style.height = "0px"
        }

        
        
    },[isMenuActive])
    
    return (
        <header className={`header`}>
            <img className="header-logo" src={logo} alt="logo" />

            <nav ref={linksContainer} className="header-nav">
                <ul ref={linksNav} className="nav-list"
                  >
                    <li>
                        <a href="">home</a>
                    </li>
                    <li>
                        <a href="">about</a>
                    </li>
                    <li>
                        <a href="">project</a>
                    </li>
                    <li>
                        <a href="">contact</a>
                    </li>
                    <li>
                        <a href="">profile</a>
                    </li>
                </ul>
            </nav>

            <button onClick={() => setIsMenuActive(!isMenuActive)} className="menu">
                <FiMenu/>
            </button>
            
            <div className="icons">
                <BsFacebook/>
                <AiOutlineTwitter/>
                <AiFillLinkedin/>
                <RiAliensFill/>
            </div>
        </header>
    )
}
