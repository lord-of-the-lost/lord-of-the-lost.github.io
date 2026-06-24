import { useTheme } from "../hooks/useTheme"
import { content } from "../config/content"

const Header = () => {
    const { theme, toggleTheme } = useTheme()
    const { logo, nav, themeLight, themeDark } = content.header

    return (
        <header className={`header ${theme}`}>
            <div className="container header-inner">
                <a href="#top" className="logo">{logo}</a>
                <nav className="nav">
                    {nav.map(link => (
                        <a key={link.href} href={link.href}>{link.label}</a>
                    ))}
                </nav>
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'theme-light' ? themeLight : themeDark}
                </button>
            </div>
        </header>
    )
}

export default Header
