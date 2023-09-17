import React from 'react';
import Master from '../layouts/Master';

function Login(props) {
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
                                        {/* @if(Session::has('login-fail'))
                                        <div className="login-fail">
                                            <p className="alert alert-danger">
                                                {"{"}
                                                {"{"} Session::get('login-fail') {"}"}
                                                {"}"}
                                            </p>
                                        </div>
                                        @endif */}
                                        <form
                                            className="user"
                                            action="{{ route('zipposhop.checkLogin') }}"
                                            method="POST"
                                        >
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control form-control-user"
                                                    placeholder="Enter Email Address..."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control form-control-user"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck"
                                                    >
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <input
                                                type="submit"
                                                className="btn btn-primary btn-user btn-block"
                                                defaultValue="Login"
                                            />
                                            <hr />
                                            <a
                                                href="{{ route('login.google') }}"
                                                className="btn btn-danger btn-user btn-block"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-google"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                </svg>
                                                Login with Google
                                            </a>
                                            <a href="#" className="btn btn-primary btn-user btn-block">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-facebook"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                Login with Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a
                                                className="small"
                                                href="{{ route('zipposhop.forgotpassword') }}"
                                            >
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="{{ route('zipposhop.create') }}">
                                                Create an Account!
                                            </a>
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