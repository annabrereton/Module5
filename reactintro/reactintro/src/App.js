import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./Footer";
import Content from "./components/Content";

// Any component can only return a single element. We get around this by having a single parent element \
// which can have any number of child elements - React still sees this as one element
// Below - to save adding an unnecessary <div> elements we can use empty tags <> </>
const App = () => {
  return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
  )
}

export default App
