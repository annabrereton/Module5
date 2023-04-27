import './header.css'
import Nav from "./Nav";
import Button from "../Button";

// Here header is the parent of Nav and Button
const Header = () => {
    return (
        <header>
            <Nav />
            <h1 className="header">This is the header <Button text="Click Me!"/></h1>
        </header>
    )
}

export default Header

