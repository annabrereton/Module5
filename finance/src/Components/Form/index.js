import './form.scss'
import {useState} from "react";

const Form = () => {
    const [financeData, setFinanceData] = useState({
        amount: "",
        salary: "",
        percentage: ""
    })

    const handleChange = (event) => {
        setFinanceData({ ...financeData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        setFinanceData({ amount: "", salary: "", percentage: "" })
        console.log(financeData);
        const amountEntry = parseInt(financeData.amount)
        console.log(amountEntry)
        const adminFee = parseInt(financeData.amount) * 0.05
        console.log(adminFee)
        const totalBorrowed = amountEntry + adminFee
        console.log(totalBorrowed)
        const salaryEntry = parseInt(financeData.salary)
        console.log(salaryEntry)
        const percentageEntry = parseInt(financeData.percentage)
        console.log(percentageEntry)
        const perMonth = ((salaryEntry / 12) * percentageEntry) / 100
        console.log(perMonth)
        const totalMonths = totalBorrowed / perMonth
        console.log(totalMonths)
    }


    // const [amount, setAmount] = useState(8000)
    // const [salary, setSalary] = useState(25000)
    // const [percentage, setPercentage] = useState(10)
    // const formElem = document.querySelector("form")


        // formElem.addEventListener("submit", (e) => {
        //     // on form submission, prevent default
        //     e.preventDefault();
        //
        //     // construct a FormData object, which fires the formdata event
        //     new FormData(formElem);
        // });

        // formElem.addEventListener("formdata", (e) => {
        //     console.log("formdata fired");

        //     // Get the form data from the event object
        //     const data = e.formData;
        //     for (const value of data.values()) {
        //         console.log(value);
        //     }
        // })
            // const handleSubmit = (event) => {
            // event.preventDefault()
        // console.log({amount}, {salary}, {percentage})
        // const form = event.target;
        // const formData = new FormData(form);
        // const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);
    // }

    // useEffect(() => {
    //     // const amountInt = parseInt({amount})
    //     const adminFee = amount * 0.05
    //     const totalAmount = adminFee + amount
    //     const perMonth = ((salary / 12) * percentage) / 100
    //     const monthsToPay = totalAmount / perMonth
    //     console.log(adminFee)
    //     }, [[amount], [percentage]]
    // )


    return(
        <>
            <form method="post" onSubmit={handleSubmit}>
            <label className="form-row">
                <div className="label-text">
                    <p>The amount you would like to borrow to pay for your course:</p>
                    <p className="label-sub-text">Must be between £1-£8000.</p>
                </div>
                <div className="input-box">
                    <span>£</span>
                    <input
                        type = "number"
                        min="1"
                        max="8000"
                        name="amount"
                        value = {financeData.amount}
                        onChange = {handleChange}
                    />
                </div>
            </label>

            <label className="form-row">
                <div className="label-text">
                    <p>Your expected salary:</p>
                    <p className="label-sub-text">Annual income after tax.</p>
                </div>
                <div className="input-box">
                    <span>£</span>
                    <input
                        type = "number"
                        min="1"
                        name="salary"
                        value = {financeData.salary}
                        onChange = {handleChange}
                        // onChange = {(e) => setFinanceData(e.target.value)}
                    />
                </div>
            </label>

            <label className="form-row">
                <div className="label-text">
                    <p>Monthly repayment percentage:</p>
                    <p className="label-sub-text">Must be between 10-100%.</p>
                </div>
                <div className="input-box">
                    <input
                        type = "number"
                        min="1"
                        max="100"
                        name="percentage"
                        value = {financeData.percentage}
                        onChange = {handleChange}
                        // onChange = {(e) => setFinanceData(e.target.value)}
                    />
                    <span>%</span>
                </div>
            </label>
            <input className="submit" type="submit"/>
        </form>


        {/*<p>The upfront admin fee is {financeData.amount * 0.05}.</p>*/}

        {/*<p>And the loan amount is {parseInt(financeData.amount)} which will take {(parseInt(financeData.amount) + (parseInt(financeData.amount) * 0.05)) / (((parseInt(financeData.salary / 12) * parseInt(financeData.percentage) / 100)} months to pay back.</p>*/}

        {/*<p>With a total cost of {parseInt(financeData.amount) + (parseInt(financeData.amount) * 0.05)}.</p>*/}
    </>
    )
}

export default Form
