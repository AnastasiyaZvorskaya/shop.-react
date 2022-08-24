import React from 'react';
import '../components/style.css';
import { NavLink } from 'react-router-dom';
import Image from "./Image"


const Nav_Link = [
    { id: 1, name: "All PRODUCT", to: "/" },
    { id: 2, name: "SOLUTION", to: "/solution" },
    { id: 3, name: "ABOUT", to: "/about" },
    { id: 4, name: "SUPPORT", to: "/support" },
]


const NavLinks = () => {

    return (<div className='header'>

        <div className='header_logo'>

            <Image src={require('../Image/logo.png')} />
        </div>
        <div>
            <ul className='header_ul'>
                {Nav_Link.map((item) => {
                    if (item.id === 2) {
                        return (
                            <form>
                                <select className="menu_form">
                                    <option className="option">SOLUTION</option>
                                    <option>Products</option>
                                    <option>Shops</option>
                                </select>
                            </form>
                        );
                    } else
                        return (<li key={item.id} className="link_heder">
                            <NavLink to={item.to} className="link_heder">{item.name}</NavLink>
                        </li>

                        )

                }

                )
                }

            </ul>
        </div>
        <div className='header_img'>
            <Image src={require('../Image/search.png')} />
            <Image src={require('../Image/basket.png')} />
        </div>
    </div>

    )

}

export default NavLinks;