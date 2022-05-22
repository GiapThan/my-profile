import './Home.css'
import { useState } from 'react'

export default function Home() {
    const [isActive, setisActive] = useState(false)

    function ImageClick() {
        if (isActive) {
            setisActive(false)
        } else {
            setisActive(true)
        }
    }

    return (
        <div className={`container ${isActive ? 'back-black' : ''}`}>
            <div className={`card ${isActive ? 'black' : ''}`}>
                <div className="top_part">
                    <div className="icons">
                        <i
                            onClick={ImageClick}
                            className={`fa fa-sun-o font_icons`}
                            style={{ display: `${isActive ? 'inline-block' : 'none'}` }}
                        ></i>
                        <i
                            onClick={ImageClick}
                            className="fa fa-moon-o"
                            style={{ display: `${isActive ? 'none' : 'inline-block'}` }}
                        ></i>
                    </div>
                </div>

                <div className="circle">
                    <span>
                        <img src="https://i.imgur.com/ASrY1NH.jpg" />
                    </span>
                    <h2>Dang Giap Than</h2>
                    <h6>High School Students</h6>
                </div>

                <div id="social">
                    <a href="https://www.facebook.com/dg.than.29/">
                        <i className={`fa-brands fa-facebook ${isActive ? 'black' : ''}`}></i>
                    </a>
                    <a href="https://www.instagram.com/dgth296/">
                        <i className={`fa-brands fa-instagram ${isActive ? 'black' : ''}`}></i>
                    </a>
                    <a href="https://www.tiktok.com/@gthan296/">
                        <i className={`fa-brands fa-tiktok ${isActive ? 'black' : ''}`}></i>
                    </a>
                </div>

                <div id='infor'>
                    <div className='infor-item'>
                        <span className='icon'><i class="fa-solid fa-location-dot"></i></span>
                        <span className='text'>Lam San, Cam My, Dong Nai</span>
                    </div>
                    <div className='infor-item'>
                        <span className='icon'><i class="fa-solid fa-phone"></i></span>
                        <span className='text'>0367.090.553</span>
                    </div>
                    <div className='infor-item'>
                        <span className='icon'><i class="fa-solid fa-envelope"></i></span>
                        <span className='text'>giapthan0604@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
