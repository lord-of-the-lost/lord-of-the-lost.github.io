import { Link } from "react-router-dom"

const NotFound = () => {
    return <section className="container page-404">
        <h2>404 — страница не найдена</h2>
        <Link to="/">На главную</Link>
    </section>
}

export default NotFound
