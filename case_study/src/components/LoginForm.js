import React from 'react';
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import CustomerModel from "../models/CustomerModel";

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Please insert email again')
        .required('Please insert email again'),
    password: Yup.string().required("Please insert password again !"),
});

const initialValues = {
    email: "",
    password: "",
};

function LoginForm(props) {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        Swal.fire({
            icon: "success",
            title: "Login Succes!",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const handleSubmit = (values) => {
        CustomerModel.login(values)
            .then((res) => {
                console.log(res);
                CustomerModel.setCookie("customer", JSON.stringify(res.customer), res.expires_in);
                localStorage.setItem("token", res.access_token);
                navigate("/");
                handleLoginSuccess();
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Have error when login!",
                    text: err.message,
                });
            });
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
        >
            <Form className="user">
                <div className="form-group">
                    <Field
                        type="email"
                        name="email"
                        className="form-control form-control-user"
                        placeholder="Enter Email Address..."
                    />
                    <ErrorMessage name="email" className='btn btn-danger form-control form-control-user' component="div" />
                </div>
                <div className="form-group">
                    <Field
                        type="password"
                        name="password"
                        className="form-control form-control-user"
                        placeholder="Password"
                    />
                    <ErrorMessage name="password" className='btn btn-danger form-control form-control-user' component="div" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox small">
                        <Field
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
                <button
                    type="submit"
                    className="btn btn-primary btn-user btn-block"
                >Login</button>
                {/* 
                <hr />
                <Link to='zipposhop/google'>
                    <a
                        className="btn btn-danger btn-user btn-block" style={{ color: 'white' }}
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
                </Link> */}
            </Form>
        </Formik >
    );
}

export default LoginForm;