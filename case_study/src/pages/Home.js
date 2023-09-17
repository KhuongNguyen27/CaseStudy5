import React from 'react';
import Master from '../layouts/Master';
import Product_home from './Product_home';
function Home(props) {
    return (
        <Master>
            <section className="banner banner-one">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="banner-left-container">
                                <div className="banner-carousel owl-carousel owl-theme">
                                    <div className="banner-item">
                                        <div className="banner-content">
                                            <h6>This Week Only for World Premier</h6>
                                            <h2>
                                                New Top Product <br /> High Quality
                                            </h2>
                                            <div className="btn-box clearfix">
                                                <a href="#" className="theme-btn btn-style-one">
                                                    Shop Now
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-cart"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="banner-item">
                                        <div className="banner-content">
                                            <h6>This Week Only for World Premier</h6>
                                            <h2>
                                                Luxury <br /> High Quality
                                            </h2>
                                            <div className="btn-box clearfix">
                                                <a href="#" className="theme-btn btn-style-one">
                                                    Shop Now
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-cart"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-xl-3">
                                <div class="banner-right-container">
                                    <div class="banner-right-container-top">
                                        <div class="banner-right-car">
                                            <img src="{{ asset('shop/images/icons/car-1.png') }}') }}" alt="car">
                                        </div>
                                        <div class="banner-right-title">
                                            <h6>Over 22500 Zippo.</h6>
                                            <h5>Find Your Auto Parts</h5>
                                        </div>
                                    </div>
                                    <div class="select-container">
                                        <select name="make">
                                            <option value="*">Select Make </option>
                                            <option value=".category-1">Make 01</option>
                                            <option value=".category-2">Make 02</option>
                                            <option value=".category-3">Make 03</option>
                                        </select>
                                        <select name="make">
                                            <option value="*">Select Model </option>
                                            <option value=".category-1">Make 01</option>
                                            <option value=".category-2">Make 02</option>
                                            <option value=".category-3">Make 03</option>
                                        </select>
                                        <select name="make">
                                            <option value="*">Select Year </option>
                                            <option value=".category-1">Make 01</option>
                                            <option value=".category-2">Make 02</option>
                                            <option value=".category-3">Make 03</option>
                                        </select>
                                        <select name="make">
                                            <option value="*">Select Options </option>
                                            <option value=".category-1">Make 01</option>
                                            <option value=".category-2">Make 02</option>
                                            <option value=".category-3">Make 03</option>
                                        </select>
                                    </div>
                                    <div class="select-btn">
                                        <a href="#" class="theme-btn btn-style-one d-flex justify-content-center">Find Auto Parts<i
                                            class="flaticon-right-arrow"></i></a>
                                    </div>
                                    <div class="select-shape">
                                        <img src="{{ asset('shop/images/shape/select-shape.png') }}') }}" alt="shape">
                                    </div>
                                </div>
                            </div> */}
                    </div>
                </div>
            </section>
            {/* banner */}
            <div className="row row-collapse align-center m-5">
                <div className="col medium-4 large-4">
                    <div className="col-inner text-center">
                        <div
                            className="icon-box featured-box icon-box-left text-left is-small d-flex"
                            style={{ margin: "0px 0px 0px 16px" }}
                        >
                            <div className="icon-box-img" style={{ width: 42 }}>
                                <div className="icon">
                                    <div className="icon-inner">
                                        <img
                                            width={42}
                                            height={38}
                                            src="https://www.zippovn.vn/wp-content/uploads/2018/06/srv_1111.png"
                                            className="attachment-medium size-medium entered lazyloaded"
                                            alt="xe máy"
                                            decoding="async"
                                            data-lazy-src="https://www.zippovn.vn/wp-content/uploads/2018/06/srv_1111.png"
                                            data-ll-status="loaded"
                                        />
                                        <noscript>
                                            &lt;img width="42" height="38"
                                            src="https://www.zippovn.vn/wp-content/uploads/2018/06/srv_1111.png"
                                            class="attachment-medium size-medium" alt="xe máy"
                                            decoding="async" /&gt;
                                        </noscript>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-box-text last-reset ml-3">
                                <p style={{ fontSize: 16, color: "#550000" }}>
                                    Nationwide delivery
                                </p>
                                <p style={{ fontSize: 14 }}>
                                    Inspect before paying for new merchandise
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col medium-4 large-4">
                    <div className="col-inner">
                        <div
                            className="icon-box featured-box icon-box-left text-left is-small d-flex"
                            style={{ margin: "0px 0px 0px 16px" }}
                        >
                            <div className="icon-box-img" style={{ width: 42 }}>
                                <div className="icon">
                                    <div className="icon-inner">
                                        <img
                                            width={42}
                                            height={38}
                                            src="https://www.zippovn.vn/wp-content/uploads/2018/06/srv_2111.png"
                                            className="attachment-medium size-medium entered lazyloaded"
                                            alt="điện thoại"
                                            decoding="async"
                                            data-lazy-src="https://www.zippovn.vn/wp-content/uploads/2018/06/srv_2111.png"
                                            data-ll-status="loaded"
                                        />
                                        <noscript>
                                            &lt;img width="42" height="38"
                                            src="https://www.zippovn.vn/wp-content/uploads/2018/06/srv_2111.png"
                                            class="attachment-medium size-medium" alt="điện thoại"
                                            decoding="async" /&gt;
                                        </noscript>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-box-text last-reset  ml-3">
                                <p style={{ fontSize: 16, color: "#550000" }}>
                                    Super-fast ordering
                                </p>
                                <p style={{ fontSize: 14 }}>
                                    Call now:{" "}
                                    <span style={{ color: "#ed1c24" }}>
                                        <strong>0947.964.559</strong>
                                    </span>{" "}
                                    order and receive advice
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col medium-4 large-4">
                    <div className="col-inner">
                        <div
                            className="icon-box featured-box icon-box-left text-left is-small d-flex"
                            style={{ margin: "0px 0px 0px 16px" }}
                        >
                            <div className="icon-box-img" style={{ width: 50 }}>
                                <div className="icon">
                                    <div className="icon-inner">
                                        <img
                                            width={50}
                                            height={38}
                                            src="https://www.zippovn.vn/wp-content/uploads/2018/06/srv_3111.png"
                                            className="attachment-medium size-medium entered lazyloaded"
                                            alt="chính sách"
                                            decoding="async"
                                            data-lazy-src="https://www.zippovn.vn/wp-content/uploads/2018/06/srv_3111.png"
                                            data-ll-status="loaded"
                                        />
                                        <noscript>
                                            &lt;img width="42" height="38"
                                            src="https://www.zippovn.vn/wp-content/uploads/2018/06/srv_3111.png"
                                            class="attachment-medium size-medium" alt="chính sách"
                                            decoding="async" /&gt;
                                        </noscript>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-box-text last-reset ml-3">
                                <p style={{ fontSize: 16, color: "#550000" }}>Genuine Zippo</p>
                                <p style={{ fontSize: 14 }}>Money-back if Zippo is detected</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cta */}
            <section className="cta">
                <div className="auto-container">
                    <div className="cta-container">
                        <div className="cta five-item-carousel owl-carousel owl-theme">
                            @foreach($categories as $category)
                            <div className="cta-content">
                                <div className="cta-image">
                                    <img
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        src="{{ asset($category->image) }}"
                                        alt="parts"
                                    />
                                </div>
                                <div className="cta-info">
                                    <h5>
                                        {"{"}
                                        {"{"} $category-&gt;name {"}"}
                                        {"}"}
                                    </h5>
                                    {/* <h6>4 devices</h6> */}
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </section>
            {/* cta */}
            <div id="data-wrapper">
                <div className="col-12 text-center m-5">
                    <h2>Products</h2>
                </div>
                <Product_home />
            </div>
            <div className="col-12 text-center m-3">
                <button className="btn btn-success load-more-product">Show more</button>
            </div>
            <div className="auto-load text-center ml-3" style={{ display: "none" }}>
                <div className="d-flex justify-content-center">
                    <div role="status">
                        <span>Loading...</span>
                    </div>
                </div>
            </div>
        </Master>
    );
}

export default Home;