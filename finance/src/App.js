import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Form from "./Components/Form";
import {useState} from "react";

const App = () => {

    // here we create an array state to store the contact form data
    const [financeDataset, updateFinanceDataset] = useState([]);

    const addFinanceDataset = (financeData) => {
        updateFinanceDataset([...financeDataset, financeData]);
    };
    console.log(financeDataset)

  return (
    <>
      <Header />
      <Form addFinanceDataset={addFinanceDataset}/>
    </>
  )
}

export default App
