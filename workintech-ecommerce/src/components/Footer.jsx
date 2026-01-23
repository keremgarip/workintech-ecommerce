export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerMain">
                <h3>Consulting Agency For Your Business</h3>
                <p>We provide expert business consulting services to help you achieve your goals and drive growth.</p>
                <div className="btn-contact">
                    <button>Contact Us</button>
                </div>
            </div>
            <div className="footerQuickLinks">
                <div className="companyInfo">
                    <h5>Company Info</h5>
                    <ul className="companyInfoMenus">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Carrier</a></li>
                        <li><a href="#">We are hiring</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="legal">
                    <h5>Legal</h5>
                    <ul className="legalMenus">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Data Protection</a></li>
                    </ul>
                </div>
                <div className="features">
                    <h5>Features</h5>
                    <ul className="featuresMenus">
                        <li><a href="#">Business Marketing</a></li>
                        <li><a href="#">User Analytic</a></li>
                        <li><a href="#">Live Chat</a></li>
                        <li><a href="#">Unlimited Support</a></li>
                    </ul>
                </div>
                <div className="resources">
                    <h5>Resources</h5>
                    <ul className="resourcesMenus">
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">API Status</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h5>Get In Touch</h5>
                    <div className="contactInfo">
                        <div className="phone">
                            <i className="fa-solid fa-phone"></i>
                            <span>(480) 555-01-03</span>
                        </div>
                        <div className="location">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>4517 Washington Ave.</span>
                        </div>
                        <div className="email">
                            <i className="fa-solid fa-envelope"></i>
                            <span>kerem@kerem.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <h6>&copy; 2023 Your Company Name. All rights reserved.</h6>
                <div className="socialMediaIcons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}