import { content } from "../config/content"

const Home = () => {
    const { hero, about, skills, contacts } = content

    return (
        <>
            {/* Hero */}
            <section id="top" className="hero container">
                <p className="hero-greeting">{hero.greeting}</p>
                <h1 className="hero-name">{hero.name}</h1>
                <h2 className="hero-role">{hero.role}</h2>
                <p className="hero-tagline">{hero.tagline}</p>
                <div className="hero-actions">
                    <a className="btn btn-primary" href={hero.ctaPrimary.href}>
                        {hero.ctaPrimary.label}
                    </a>
                    <a className="btn btn-ghost" href={hero.ctaSecondary.href}>
                        {hero.ctaSecondary.label}
                    </a>
                </div>
            </section>

            {/* About */}
            <section id="about" className="section container">
                <h2 className="section-title">{about.heading}</h2>
                {about.paragraphs.map((text, i) => (
                    <p key={i} className="section-text">{text}</p>
                ))}
            </section>

            {/* Skills */}
            <section id="skills" className="section container">
                <h2 className="section-title">{skills.heading}</h2>
                <div className="skills">
                    {skills.items.map(skill => (
                        <article key={skill.title} className="skill-card">
                            <span className="skill-level">{skill.level}</span>
                            <h3 className="skill-title">{skill.title}</h3>
                            <p className="skill-desc">{skill.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Contacts */}
            <section id="contacts" className="section container">
                <h2 className="section-title">{contacts.heading}</h2>
                <p className="section-text">{contacts.subtitle}</p>
                <ul className="contacts">
                    {contacts.items.map(contact => (
                        <li key={contact.label} className="contact-item">
                            <span className="contact-label">{contact.label}</span>
                            <a
                                className="contact-link"
                                href={contact.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {contact.value}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Home
