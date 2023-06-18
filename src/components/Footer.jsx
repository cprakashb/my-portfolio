import React from "react"
import "../scss/footer.scss"
import downloadFile from '../../Chandra+Prakash+Resume_Canada_Web+developer+.pdf';

const Footer = () => {
    return (<footer className="footer mt-4 ">
        <div className="social-links container">
            <ul class="social-links-list  d-flex align-items-center gap-4">
                <li>
                    <a href="https://ca.linkedin.com/in/chandraprakashb" target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
                <li>
                    <a href={downloadFile} target="_blank" rel="noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    </footer>)

}
export default Footer;