import React from 'react';

function Footer(props) {
    return (
        <>
            <footer className="main-footer-one">
                <div className="upper-box">
                    <div className="auto-container">
                        <div className="outer-box">
                            <p>FREE Delivery over $49. Fulfilled by Bosch. </p>
                            <p>Super discount for your first purchase </p>
                        </div>
                    </div>
                </div>
                <div className="lower-box">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget footer-logo-widget">
                                    <div className="footer-logo">
                                        <img src="assets/shop/images/logo-2.png" alt="logo" />
                                    </div>
                                    <p>
                                        I have been a loyal customer of this auto parts company for years
                                        and I cannot recommend them enough.{" "}
                                    </p>
                                    <ul className="social-icon">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-dribbble" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 offset-lg-1">
                                <div className="footer-widget footer-links-widget">
                                    <h4 className="footer-widget-title">Useful Links</h4>
                                    <ul className="lsit">
                                        <li>
                                            <a href="#">All properties</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ’s</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">Sign up</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget footer-services-links-widget">
                                    <h4 className="footer-widget-title">Why buy from us</h4>
                                    <ul className="lsit">
                                        <li>
                                            <a href="#">Business Planning </a>
                                        </li>
                                        <li>
                                            <a href="#">Human Resources</a>
                                        </li>
                                        <li>
                                            <a href="#">Bonds &amp; Com modities</a>
                                        </li>
                                        <li>
                                            <a href="#">Financial Projections</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget footer-contact-widget">
                                    <h4 className="footer-widget-title">Get In Touch</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="tel:(+123)45678900" className="footer-contact-info">
                                                (+123) 456789 00
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="mailto:sample@example.com"
                                                className="footer-contact-info"
                                            >
                                                Youremail@info.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">Our Address:</a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                4140 Parker Rd. Allentown, New <br /> Mexico 31134
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-one">
                    <div className="auto-container">
                        <div className="row m-0 align-items-center justify-content-between">
                            <div className="copyright-text">
                                Copyright © 2023 <span>Bosch</span>. All rights reserved.
                            </div>
                            <div className="copyright-card">
                                <h6>We accept :</h6>
                                <a href="#">
                                    <img src="assets/shop/images/icons/card-1.png" alt="card" />
                                </a>
                                <a href="#">
                                    <img src="assets/shop/images/icons/card-2.png" alt="card" />
                                </a>
                                <a href="#">
                                    <img src="assets/shop/images/icons/card-3.png" alt="card" />
                                </a>
                                <a href="#">
                                    <img src="assets/shop/images/icons/card-4.png" alt="card" />
                                </a>
                            </div>
                            <ul className="menu">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">FAQ’s</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;