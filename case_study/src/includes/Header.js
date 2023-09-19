import React from "react";
import { Link } from "react-router-dom";
import Category_header from "../components/Category_header";
import HeaderUser from "../components/HeaderUser";

function Header(props) {
    return (
        <>
            <header className="main-header ex_shop_header header-style-one">
                {/* Header Top */}
                {/* <div class="header-top">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="left-column">
                                <ul class="contact-info">
                                    <li><a href="#0">About Us </a></li>
                                    <li><a href="#0">My account</a></li>
                                    <li><a href="#0">Order Tracking</a></li>
                                    <li><a href="#0">Wishlist</a></li>
                                </ul>
                            </div>
                            <div class="right-column">
                                <div class="help-info">
                                    Need help? <span> Call us: </span> <a href="tel:+8001234567890" class="help-info-number"> (+800)
                                        1234 5678 90</a> <span> or </span> <a href="mailto:info@company.com"> info@company.com</a>
                                </div>
                                <div class="curency">
                                    <div class="language">
                                        <span class="flag"><img src="%PUBLIC_URL%/assets/shop/images/icons/flag.png" alt="flag"></span>
                                        <select class="selectpicker" name="make">
                                            <option value="*">English</option>
                                            <option value=".category-1">Spanish</option>
                                            <option value=".category-3">French</option>
                                            <option value=".category-4">Chinese</option>
                                        </select>
                                    </div>
                                    <div class="currency">
                                        <select class="selectpicker" name="make">
                                            <option value="*">USD</option>
                                            <option value=".category-1">EURO</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  */}
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container col-12">
                            {/*Logo*/}
                            <div className="logo_menu col-10">
                                <div className="logo-box">
                                    <div className="logo">
                                        <div className="logo">
                                            <Link to="/">
                                                <img src="/assets/shop/images/logo-1.png" alt="logo" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-area clearfix">
                                    <nav className="main-menu clearfix navbar-expand-md navbar-light">
                                        <div
                                            className="collapse navbar-collapse show clearfix"
                                            id="navbarSupportedContent"
                                        >
                                            <ul className="navigation clearfix home-menu">
                                                <li>
                                                    <a href="#">Home </a>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="#">Products</a>
                                                    <ul className="sub-dropdown">
                                                        <li>
                                                            <a href="#">
                                                                <Category_header />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Knowledge</a>
                                                </li>
                                                <li>
                                                    <a href="#">Sell &amp; Check Out</a>
                                                </li>
                                                <li>
                                                    <a href="#">Contact </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <HeaderUser />
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* header-lower */}
                {/* <div class="header-lower">
                    <div class="auto-container">
                        <div class="outer-box">
                            <div class="menu-area clearfix">
                                <div class="shop-category"><a href="#"><span class="flaticon-menu"></span>Browse categories</a>
                                    <ul class="sidebar-dropdown">
                                        <li class="dropdown"><a href="#"><i class="icon-tair"></i> Fuel Parts</a>
                                            <ul>
                                                <li><a href="#"><i class="icon-shock-absorber"></i>Fuel Parts 01</a></li>
                                                <li><a href="#"><i class="icon-shock-absorber"></i>Fuel Parts 02</a></li>
                                                <li><a href="#"><i class="icon-shock-absorber"></i>Fuel Parts 03</a></li>
                                                <li><a href="#"><i class="icon-shock-absorber"></i>Fuel Parts 04</a></li>
                                                <li><a href="#"><i class="icon-shock-absorber"></i>Fuel Parts 05</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#"><i class="icon-shock-absorber"></i>Transmission Parts</a>
                                            <ul>
                                                <li><a href="#"><i class="icon-car-insurance"></i>Transmission Parts 01</a></li>
                                                <li><a href="#"><i class="icon-car-insurance"></i>Transmission Parts 02</a></li>
                                                <li><a href="#"><i class="icon-car-insurance"></i>Transmission Parts 03</a></li>
                                                <li><a href="#"><i class="icon-car-insurance"></i>Transmission Parts 04</a></li>
                                                <li><a href="#"><i class="icon-car-insurance"></i>Transmission Parts 05</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#"><i class="icon-repair"></i>Engine Parts</a>
                                            <ul>
                                                <li><a href="#"><i class="icon-car-battery"></i>Engine Parts 01</a></li>
                                                <li><a href="#"><i class="icon-car-battery"></i>Engine Parts 02</a></li>
                                                <li><a href="#"><i class="icon-car-battery"></i>Engine Parts 03</a></li>
                                                <li><a href="#"><i class="icon-car-battery"></i>Engine Parts 04</a></li>
                                                <li><a href="#"><i class="icon-car-battery"></i>Engine Parts 05</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#"><i class="icon-tair"></i>Wheels & Tires</a></li>
                                        <li><a href="#"><i class="icon-car-insurance"></i>Shock Absorber Sale</a></li>
                                        <li><a href="#"><i class="icon-car-battery"></i>Motorcycle Boots</a></li>
                                        <li class="dropdown">
                                            <a href="#"><i class="icon-shock-absorber"></i>Vehicle Types</a>
                                            <ul>
                                                <li><a href="#"><i class="icon-scooter"></i>Vehicle Types 01</a></li>
                                                <li><a href="#"><i class="icon-scooter"></i>Vehicle Types 02</a></li>
                                                <li><a href="#"><i class="icon-scooter"></i>Vehicle Types 03</a></li>
                                                <li><a href="#"><i class="icon-scooter"></i>Vehicle Types 04</a></li>
                                                <li><a href="#"><i class="icon-scooter"></i>Vehicle Types 05</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mobile-nav-toggler">
                                    <i class="icon-bar"></i>
                                    <i class="icon-bar"></i>
                                    <i class="icon-bar"></i>
                                </div>
                            </div>
                            <div class="search-box">
                                <form>
                                    <input type="search" placeholder="Search products">
                                        <button type="submit"><i class="icon-magnifing-glass"></i></button>
                                </form>
                            </div>
                            <div class="navbar-right-info">
                                <ul class="right-info">
                                    <li>
                                        <div class="shopping-cart"><i class="icon-heart"></i><span class="count">0</span></div>
                                    </li>
                                    <li class="search-toggler"><i class="icon-left-right-arrow"></i></li>
                                    <li><a href="#"><i class="icon-user"></i>
                                        <p>My Account <span>Hello, Sign in</span></p>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/*sticky Header*/}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <div className="logo">
                                    <a href="">
                                        <img src="/assets/shop/images/logo.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="menu-area clearfix">
                                <nav className="main-menu clearfix"></nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" />
                    <div className="close-btn">
                        <i className="fas fa-times" />
                    </div>
                    <nav className="menu-box">
                        <div className="nav-logo">
                            <a href="">
                                <img src="assets/shop/images/logo.png" alt="logo" title="" />
                            </a>
                        </div>
                        <div className="menu-outer"></div>
                        <div className="contact-info">
                            <h4>Contact Info</h4>
                            <ul>
                                <li>Chicago 12, Melborne City, USA</li>
                                <li>
                                    <a href="tel:+8801682648101">+88 01682648101</a>
                                </li>
                                <li>
                                    <a href="mailto:info@example.com">info@example.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="social-links">
                            <ul className="clearfix">
                                <li>
                                    <a href="#0">
                                        <span className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <span className="fab fa-facebook-square" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <span className="fab fa-pinterest-p" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <span className="fab fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <span className="fab fa-youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* End Mobile Menu */}
            </header>
        </>
    );
}

export default Header;