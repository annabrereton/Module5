import './nav.scss';

const Nav = () => {
    return (
        <div className="nav-container">
            <nav aria-label="main navigation">
                <ul className="menu-buttons">
                    <li>
                        <a className="menu-item" href="#" aria-label="home">
                            <i className="fa-solid fa-house"></i>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item" href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="menu-item" href="#">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a className="menu-item" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav