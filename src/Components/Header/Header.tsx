import "./Header.css"

function Header() {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src="src/assets/LOGO_SAUVER_DES_VIES.jpg" alt="Logo de votre site" />
                </div>
                <ul className="menu">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/">Thématiques</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>

        </>
    );
}

export default Header

