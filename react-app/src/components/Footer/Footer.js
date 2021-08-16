import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-header">
                    {"Developed by the following group with Flask & React/Redux:"}
                </div>
                <div className="footer-name">
                    <div className="footer-name-text">
                        Kagen Hearn
                    </div>
                    <a className="footer-github-container" href="https://github.com/KagenLH">
                        <i class="fab fa-github"></i>
                    </a>
                    <a className="footer-linkedin-container" href="https://www.linkedin.com/in/kagen-hearn-228b96130/">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="footer-name">
                    <div className="footer-name-text">
                        Mark Vasquez
                    </div>
                    <a className="footer-github-container" href="https://github.com/Mark-Vasquez">
                        <i class="fab fa-github"></i>
                    </a>
                    <a className="footer-linkedin-container" href="https://www.linkedin.com/in/mark-vasquez-439858212/">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="footer-name">
                    <div className="footer-name-text">
                        Noah Medoff
                    </div>
                    <a className="footer-github-container" href="https://github.com/NoahNim">
                        <i class="fab fa-github"></i>
                    </a>
                    <a className="footer-linkedin-container" href="https://www.linkedin.com/in/noah-medoff-6a5490116/">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="footer-name">
                    <div className="footer-name-text">
                        Dechon Ryan
                    </div>
                    <a className="footer-github-container" href="https://github.com/dech0n">
                        <i class="fab fa-github"></i>
                    </a>
                    <a className="footer-linkedin-container" href="https://www.linkedin.com/in/dechon-r-1230097b/">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="footer-repo-info">
                    <div className="footer-repo-text">
                        Project Code and Documentation:
                    </div>
                    <a className="footer-github-container-repo" href="https://github.com/KagenLH/forme-app">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}