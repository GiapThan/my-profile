import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
    const [active, setActive] = useState('/')

    return (
        <div id="nav-container">
            <ul id="menu">
                <li onClick={(e) => setActive('/')}>
                    <Link id="1" to="/" className={`${active == '/' ? 'active' : ''}`}>
                        <i className="fa-solid fa-user"></i>
                    </Link>
                </li>
                <li onClick={(e) => setActive('/about')}>
                    <Link id="2" to="/about" className={`${active == '/about' ? 'active' : ''}`}>
                        <i className="fa-solid fa-address-card"></i>
                    </Link>
                </li>
                <li onClick={(e) => setActive('/contact')}>
                    <Link id="3" to="/contact" className={`${active == '/contact' ? 'active' : ''}`}>
                        <i className="fa-solid fa-comments"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
