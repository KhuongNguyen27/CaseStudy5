import React from 'react';
import Master from '../layouts/Master';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login(props) {
    const url = 'http://127.0.0.1:8000/';
    return (
        <Master>
            <div className="row justify-content-center bg-light">
                <div className="col-xl-9 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block">
                                    <img
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        src="assets/shop/images/banner/banner-3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <LoginForm />
                                        <hr />
                                        <div className="text-center">
                                            <Link to="/forgotpassword">
                                                <a
                                                    className="small"
                                                >
                                                    Forgot Password?
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="text-center">
                                            <Link to="/register">
                                                <a className="small">
                                                    Create an Account!
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Master>

    );
}

export default Login;