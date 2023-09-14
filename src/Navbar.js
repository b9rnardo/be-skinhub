import { Link } from "react-router-dom";

function Navbar() {
    return ( 
<div className='Navbar'>
    <nav className="nav">
        <ul className="nav__menu">
            <li className="nav__menu-item">
            <Link className="Link" to="/">
                home
            </Link>
            </li>
            <li className="nav__menu-item">
                <Link className="Link" to="/skins">
                    skins
                </Link>
            </li>
        </ul>
    </nav>
</div>
    );
}
export default Navbar;