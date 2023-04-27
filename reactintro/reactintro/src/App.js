import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./Footer";
import Content from "./components/Content";
import CoinToss from "./components/CoinToss";
import List from "./components/List";
import Button from "./components/Button";
import Character from "./components/Character";
import DisplayBitcoin from "./components/Bitcoin";

// Any component can only return a single element. We get around this by having a single parent element \
// which can have any number of child elements - React still sees this as one element
// Below - to save adding an unnecessary <div> elements we can use empty tags <> </>
const App = () => {
  return (
      <>
        <DisplayBitcoin />
        {/*<Character />*/}
        {/*<CoinToss />*/}
        {/*<Header />*/}
        {/*<Content />*/}
        {/*<Footer />*/}
        {/*<List />*/}
        {/*<Button />*/}
        {/*<Button text="Contact Me"/>  {//can only pass props from parent to child - here App is the parent//}*/}
        {/*<Button text="Home"/>*/}
        {/*<Button text="Greyhounds"/>*/}
      </>
  )
}

export default App
