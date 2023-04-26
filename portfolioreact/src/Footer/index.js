import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <p className="footer">
                Copyright Anna Brereton
            </p>
            <div className="media-links" aria-label="contact-links">
                <a href="#" aria-label="email">
                    <i className="fa-solid fa-envelope">
                    </i>
                </a>
                <a href="https://github.com/annabrereton" aria-label="github">
                    <i className="fa-brands fa-github">
                    </i>
                </a>
                <a href="https://uk.linkedin.com/" aria-label="linkedin">
                    <i className="fa-brands fa-linkedin">
                    </i>
                </a>
            </div>
        </footer>
    )
}

export default Footer