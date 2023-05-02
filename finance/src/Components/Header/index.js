import './header.scss'

const Header = () => {
    return (
        <div className="header-container">
            <h1>Finance Calculator</h1>
            <p className="sub-heading">Fill out the form below and we will calculate exactly what you will pay
               for your tuition at Mayden Academy and how long it will take to pay that back
            </p>
            <div className="rules">
                <p>You may borrow any amount between £1-£8000.</p>
                <p>If you borrow above £6400 an additional charge of £500 will be made.</p>
                <p>If you borrow above £7200 a further additional charge of £500 will be made.</p>
                <p>An admin fee of 5% will also be charged.</p>
            </div>
        </div>
    )
}

export default Header