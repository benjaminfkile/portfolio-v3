import { FunctionComponent, useState } from "react"
import OutsideClickHandler from 'react-outside-click-handler'
import { Link } from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu'
import "./MobileMenu.css"

interface MobileMenuProps {
    theme: string
    toggleTheme: Function
}

const MobileMenu: FunctionComponent<MobileMenuProps> = (props: MobileMenuProps) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="MobileMenu">
            {!menuOpen && <div onClick={toggleMenu} className="MobileMenuMenuBtn" id={`mobile-menu-menu-btn-${props.theme}`}>
                <MenuIcon />
            </div>}
            {menuOpen && <OutsideClickHandler onOutsideClick={() => { setMenuOpen(false) }}>
                <div className="MobileMenuContent" id="mobile-menu-content-dark">
                    <div className="MobileMenuContentRoute" tabIndex={1} onClick={toggleMenu}>
                        <Link to='/about'>
                            <div className="MobileMenuRouteBtn">
                                <p>About</p>
                            </div>
                        </Link>
                    </div>
                    <div className="MobileMenuContentRoute" onClick={toggleMenu}>
                        <Link to='/skills'>
                            <div className="MobileMenuRouteBtn">
                                <p>Skills</p>
                            </div>
                        </Link>
                    </div>
                    <div className="MobileMenuContentRoute" onClick={toggleMenu}>
                        <Link to='/work'>
                            <div className="MobileMenuRouteBtn">
                                <p>Work</p>
                            </div>
                        </Link>
                    </div>
                    <div className="MobileMenuContentRoute" onClick={toggleMenu}>
                        <Link to='/contact'>
                            <div className="MobileMenuRouteBtn">
                                <p>Contact</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </OutsideClickHandler>}
        </div>
    )
}

export default MobileMenu;