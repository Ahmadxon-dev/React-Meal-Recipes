import {Link } from 'react-router-dom'
export default function Footer() {
    return(
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © 2014 Copyright Text
                    <Link className="grey-text text-lighten-4 right" to={'/'}>Repo</Link>
                </div>
            </div>
        </footer>
    )
}