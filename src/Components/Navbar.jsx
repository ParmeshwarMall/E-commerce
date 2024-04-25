import { useEffect, useState } from 'react';
import "/public/style.css"
import {
    Brand,
    BrandImage,
    Container,
    NavLink,
    Menu,
    MenuItems,
    Nav,
    MobileMenu,
    MobileMenuContainer,
    MobileMenuHover,
} from './NavbarStyle';
import { NavbarData } from './NavbarData';

export default function Navbar() {
    const screenSize = 580;
    const [menu, setMenu] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    window.addEventListener('resize', (e) => {
        if (e.target.innerWidth < screenSize) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    });

    useEffect(() => {
        if (window.innerWidth < screenSize) setMenu(true);
    }, []);

    return (
        <div>
            <Nav>
                <Container ss={screenSize}>
                    <div className='navlogo'>
                        <img src="https://putatoe.com/static/media/logo.aa9da4f6375a03f8abbe.png" className='logo' alt="logo" />
                        <h2 className='logohead'>Putatoe</h2>
                    </div>
                    <MobileMenuContainer
                        menu={menu}
                        onClick={() => setToggleMenu(!toggleMenu)}
                    >
                        <MobileMenu />
                        <MobileMenuHover />
                    </MobileMenuContainer>
                    <Menu toggleMenu={toggleMenu} ss={screenSize}>
                        {NavbarData.map((item, index) => (
                            <MenuItems key={index} toggleMenu={toggleMenu} ss={screenSize}>
                                <NavLink to={item.link}>{item.title}</NavLink>
                            </MenuItems>
                        ))}
                    </Menu>
                </Container>
            </Nav>
        </div>
    );
}