import React from 'react';
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import CustomerModel from "../models/CustomerModel";

const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Please insert email again'),
    day_of_birth: Yup.date().required('Please insert date again'),
    address: Yup.string().required('Please insert address again'),
    email: Yup.string().email('Please insert email again').required("Please insert email again !"),
    phone: Yup.string().required("Please insert phone again !"),
    gender: Yup.string().required("Please insert gender again !"),
    password: Yup.string().required("Please insert password again !"),
    repeatpassword: Yup.string().required("Please insert password again !"),
});

const initialValues = {
    name: "",
    day_of_birth: "",
    address: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    repeatpassword: ""
};
function RegisterForm(props) {
    const navigate = useNavigate();

    const handleRegisterSuccess = () => {
        Swal.fire({
            icon: "success",
            title: "Success register account!",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const handleSubmit = (values) => {
        CustomerModel.register(values)
            .then((res) => {
                CustomerModel.setCookie("customer", JSON.stringify(res.customer), res.expires_in);
                localStorage.setItem("token", res.access_token);
                navigate("/");
                handleRegisterSuccess();
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Fail register account!",
                    text: err.message,
                });
            });
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
        >
            <Form
                className="billing-form p_relative d_block"
            >
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                            User Name*
                        </label>
                        <div className="field-input">
                            <Field type="text" name="name" className="form-control" />
                            <ErrorMessage name="name" className='btn btn-danger form-control form-control-user' component="div" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                            Day of Birth*
                        </label>
                        <div className="field-input">
                            <Field type="date" name="day_of_birth" />
                            <ErrorMessage name="day_of_birth" className='btn btn-danger form-control form-control-user' component="div" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                            Address*
                        </label>
                        <div className="field-input">
                            <Field
                                type="text"
                                name="address"
                                className="col-12 form-control"
                            />
                            <ErrorMessage name="address" className='btn btn-danger form-control form-control-user' component="div" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                            Email*
                        </label>
                        <div className="field-input">
                            <Field
                                type="email"
                                name="email"
                                className="col-12 form-control"
                            />
                            <ErrorMessage name="email" className='btn btn-danger form-control form-control-user' component="div" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                            Phone Number*
                        </label>
                        <div className="field-input">
                            <Field type="text" name="phone" className="form-control" />
                            <ErrorMessage name="phone" className='btn btn-danger form-control form-control-user' component="div" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                            Gender*
                        </label>
                        <div className="select-column select-box">
                            <Field as="select" className="selectmenu" name="gender">
                                <option selected="selected">Select Gender</option>
                                <option value='1'>Male</option>
                                <option value='2'>Female</option>
                                <option value='0'>Another</option>
                            </Field>
                        </div>
                        <div className="field-input">
                            <ErrorMessage name="gender" className='btn btn-danger form-control form-control-user' component="div" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                            Password*
                        </label>
                        <div className="field-input">
                            <Field
                                type="password"
                                name="password"
                                className="col-12 form-control"
                            />
                            <ErrorMessage name="password" className='btn btn-danger form-control form-control-user' component="div" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                            Repeat Password*
                        </label>
                        <div className="field-input">
                            <Field
                                type="password"
                                name="repeatpassword"
                                className="col-12 form-control"
                            />
                        </div>
                        <ErrorMessage name="repeatpassword" className='btn btn-danger form-control form-control-user' component="div" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn btn-primary w-50"
                        >Create</button>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default RegisterForm;