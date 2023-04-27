import './home.scss';

const Home = () => {
    return (
        <div className="logo-name-cv">
            <div className="logo fade-in-image">
                <img src="images/logo.png" alt="Anna Brereton's logo"/>
            </div>
            <div>
                <h1>
                    Anna Brereton - Web developer
                </h1>
                <div className="cv">
                    <a href="CV.pdf">
                        <i className="fa-solid fa-download"></i></a>
                    <a className="cv-pdf">
                        CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home