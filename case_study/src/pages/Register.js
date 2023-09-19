import React from 'react';
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import CustomerModel from "../models/CustomerModel";
import Master from '../layouts/Master';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Please insert email again')
        .required('Please insert email again'),
    password: Yup.string().required("Please insert password again !"),
});

const initialValues = {
    email: "",
    password: "",
};

function Register(props) {
    const url = 'http://127.0.0.1:8000/';
    return (
        <Master>
            <section className="checkout-section p_relative pt_80 pb_150 ">
                <div className="container">
                    <h2
                        className="suxb-title d_block fs_30 lh_40 mb_25 text-center"
                        style={{ fontSize: 45 }}
                    >
                        Register
                    </h2>
                    <div className="row">
                        <div className="col-3" />
                        <div className="col-lg-7 col-md-12 col-sm-12 bg-light p-5 rounded">
                            <div className="inner-box">
                                <div className="billing-info p_relative d_block">
                                    <form
                                        className="billing-form p_relative d_block"
                                    >
                                        <div className="row">
                                            @if (Session::has('register-fail'))
                                            <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                                                <div className="register-fail">
                                                    <p className="alert alert-primary">
                                                        {"{"}
                                                        {"{"} Session::get('register-fail') {"}"}
                                                        {"}"}
                                                    </p>
                                                </div>
                                            </div>
                                            @endif
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                                                    User Name*
                                                </label>
                                                <div className="field-input">
                                                    <input type="text" name="name" className="form-control" />
                                                    @error('name')
                                                    <div className="alert alert-danger mb-3 ">
                                                        {"{"}
                                                        {"{"} $message {"}"}
                                                        {"}"}
                                                    </div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                                                    {" "}
                                                    Day of Birth*
                                                </label>
                                                <div className="field-input">
                                                    <input type="date" name="day_of_birth" />
                                                    @error('day_of_birth')
                                                    <div className="alert alert-danger mb-3 ">
                                                        {"{"}
                                                        {"{"} $message {"}"}
                                                        {"}"}
                                                    </div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                                                    Address*
                                                </label>
                                                <div className="field-input">
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        className="col-12 form-control"
                                                    />
                                                    @error('address')
                                                    <div className="alert alert-danger mb-3 ">
                                                        {"{"}
                                                        {"{"} $message {"}"}
                                                        {"}"}
                                                    </div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                                                    Email*
                                                </label>
                                                <div className="field-input">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="col-12 form-control"
                                                    />
                                                    @error('email')
                                                    <div className="alert alert-danger mb-3 ">
                                                        {"{"}
                                                        {"{"} $message {"}"}
                                                        {"}"}
                                                    </div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                                                    Phone Number*
                                                </label>
                                                <div className="field-input">
                                                    <input type="text" name="phone" className="form-control" />
                                                    @error('phone')
                                                    <div className="alert alert-danger mb-3 ">
                                                        {"{"}
                                                        {"{"} $message {"}"}
                                                        {"}"}
                                                    </div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                                                    Gender*
                                                </label>
                                                <div className="select-column select-box">
                                                    <select className="selectmenu" name="gender">
                                                        <option selected="selected">Select Gender</option>
                                                        <option value={1}>Male</option>
                                                        <option value={2}>Female</option>
                                                        <option value={0}>Another</option>
                                                    </select>
                                                </div>
                                                <div className="field-input">
                                                    @error('gender')
                                                    <div className="alert alert-danger mb-3 ">
                                                        {"{"}
                                                        {"{"} $message {"}"}
                                                        {"}"}
                                                    </div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                                                    Password*
                                                </label>
                                                <div className="field-input">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="col-12 form-control"
                                                    />
                                                    @error('password')
                                                    <div className="alert alert-danger mb-3 ">
                                                        {"{"}
                                                        {"{"} $message {"}"}
                                                        {"}"}
                                                    </div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                                                    Repeat Password*
                                                </label>
                                                <div className="field-input">
                                                    <input
                                                        type="password"
                                                        name="repeatpassword"
                                                        className="col-12 form-control"
                                                    />
                                                    @error('repeatpassword')
                                                    <div className="alert alert-danger mb-3 ">
                                                        {"{"}
                                                        {"{"} $message {"}"}
                                                        {"}"}
                                                    </div>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group d-flex justify-content-center">
                                                <input
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    defaultValue="Create Account"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-2" />
                    </div>
                </div>
            </section>
        </Master>
    );
}

export default Register;