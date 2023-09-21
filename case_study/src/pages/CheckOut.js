import React, { useEffect, useState } from 'react';
import Master from '../layouts/Master';
import { useDispatch, useSelector } from 'react-redux';
import { NumericFormat } from "react-number-format";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomerModel from '../models/CustomerModel';
import OrderModel from '../models/OrderModel';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { SET_CART } from "../redux/action";


const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Please insert name again'),
    address: Yup.string().required("Please insert address again !"),
    phone: Yup.number().required("Please insert phone number !"),

});

function CheckOut(props) {

    const carts = useSelector((state) => state.cart);
    const [cartTotal, setCartTotal] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [customer, setCustomer] = useState({
        name: "",
        phone: "",
        address: "",
        note: "",
    });
    const [note, setNote] = useState('');

    useEffect(() => {
        const customerCookie = CustomerModel.getCookie("customer");
        if (customerCookie) {
            const customerData = JSON.parse(customerCookie);
            customerData.note = note;
            setCustomer(customerData);
        } else {
            navigate("/");
            Swal.fire({
                icon: "error",
                title: "Please login",
                showConfirmButton: false,
                timer: 1500,
            });
        }
        let total = 0;
        carts.forEach((cartItem) => {
            total += cartItem.quantity * cartItem['product'].price * (1 - cartItem['product'].discount * 0.01);
        });
        setCartTotal(total);
    }, []);

    const initialValues = {
        name: customer.name,
        phone: customer.phone,
        address: customer.address,
    };



    const handleChange = (event) => {
        const { name, value } = event.target;
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: value,
        }));
    };
    const handleSubmit = () => {
        let data = customer;
        data.carts = carts;
        OrderModel.checkout(data)
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: "Order Success! Thank you <3",
                    showConfirmButton: false,
                    timer: 1500,
                });
                // set local, setcart
                localStorage.removeItem("cart");
                dispatch({ type: SET_CART, payload: [] });
                // chuyen huong
                navigate('/');
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Order Fail! Please try again",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };
    return (
        <Master>
            <section className="checkout-section p_relative pt_140 pb_150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                            <div className="inner-box">
                                <div className="billing-info p_relative d_block mb_55">
                                    <h4 className="sub-title d_block fs_30 lh_40 mb_25">
                                        Billing Details
                                    </h4>
                                    <Formik
                                        enableReinitialize={true}
                                        initialValues={initialValues}
                                        validationSchema={SignupSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        <Form
                                            className="billing-form p_relative d_block"
                                        >
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                                                        User Name*
                                                    </label>
                                                    <div className="field-input">
                                                        <Field
                                                            type="text"
                                                            name="name"
                                                            className="form-control"
                                                            value={customer.name}
                                                            onChange={handleChange}
                                                        />
                                                        <ErrorMessage name="name" className='btn btn-danger form-control form-control-user' component="div" />
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
                                                            value={customer.address}
                                                            onChange={handleChange}
                                                        />
                                                        <ErrorMessage name="address" className='btn btn-danger form-control form-control-user' component="div" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                                                        Phone Number*
                                                    </label>
                                                    <div className="field-input">
                                                        <Field
                                                            type="text"
                                                            name="phone"
                                                            className="form-control"
                                                            value={customer.phone}
                                                            onChange={handleChange}
                                                        />
                                                        <ErrorMessage name="phone" className='btn btn-danger form-control form-control-user' component="div" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label className="p_relative d_block fs_16 font_family_poppins color_black mb_2">
                                                        Note*
                                                    </label>
                                                    <div className="field-input">
                                                        <textarea
                                                            name="note"
                                                            cols={30}
                                                            rows={5}
                                                            className="form-control"
                                                            value={customer.note || ''}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
                                                    <div className="payment-info p_relative d_block pt_45 pr_50 pb_50 pl_50 bg-light">
                                                        <div className="btn-link">
                                                            <a
                                                                className="theme-btn theme-btn-eight" onClick={handleSubmit}
                                                            >
                                                                Order
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 right-column ">
                            <div className="inner-box">
                                <div className="order-info p_relative d_block pt_45 pr_50 pb_25 pl_50 mb_50 bg-light">
                                    <h4 className="sub-title d_block fs_24 lh_30 mb_25">Your Order</h4>
                                    <div className="order-product">
                                        <ul className="order-list clearfix">
                                            <li className="p_relative d_block clearfix pt_17 pb_16">
                                                <table
                                                    className="w-100"
                                                    style={{ paddingLeft: 0, paddingRight: 0 }}
                                                >
                                                    {carts.map((cart) => (
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-left">
                                                                    {cart.product.name}
                                                                </td>
                                                                <td className="text-center" >
                                                                    {cart.quantity}
                                                                </td>
                                                                <td className="text-right">
                                                                    <b>
                                                                        <NumericFormat
                                                                            value={cart.quantity * cart['product'].price * (1 - cart['product'].discount * 0.01)}
                                                                            allowLeadingZeros
                                                                            thousandSeparator="."
                                                                            decimalSeparator=","
                                                                            displayType="text"
                                                                        />
                                                                        VND
                                                                    </b>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    ))}
                                                </table>
                                            </li>
                                            <li className="order-total p_relative d_block clearfix pt_17 pb_16">
                                                <h6 className="fs_16 fw_bold lh_20 pull-left">Order Total</h6>
                                                <span className="p_relative d_block pull-right fs_15 fw_bold font_family_inter color_black">
                                                    <NumericFormat
                                                        value={cartTotal}
                                                        allowLeadingZeros
                                                        thousandSeparator="."
                                                        decimalSeparator=","
                                                        displayType="text"
                                                    />
                                                    VND
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Master>
    );
}

export default CheckOut;