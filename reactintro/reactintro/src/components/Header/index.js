import './header.css'
import Nav from "./Nav";
import Button from "../Button";
const Header = () => {
    return (
        <header>
            <Nav />
            <h1 class="header">This is the header <Button /></h1>
        </header>
)
}

export default Header