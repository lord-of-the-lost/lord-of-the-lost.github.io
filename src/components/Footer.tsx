import { content } from "../config/content"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>{content.footer.text}</p>
            </div>
        </footer>
    )
}

export default Footer
