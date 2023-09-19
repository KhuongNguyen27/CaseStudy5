import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CustomerModel from "../models/CustomerModel";
import Swal from "sweetalert2";

function HeaderUser(props) {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const handleLogout = () => {
        CustomerModel.logout()
            .then((response) => {
                CustomerModel.deleteCookie("customer");
                Swal.fire({
                    icon: "success",
                    title: "Logout Success",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    navigate("/");
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Logout Fail",
                });
            });
    };
    let customer = CustomerModel.getCookie("customer");
    customer = customer ? JSON.parse(customer) : "";
    return (
        <ul
            className="right-info col-2"
            style={{ paddingRight: 0, paddingLeft: 0 }}
        >
            <li>
                <Link to="/cart">
                    <div className="shopping-cart" style={{ color: 'red' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-basket"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <span className="count cart-quantity">
                            {cart.length}
                        </span>
                    </div>
                </Link>
            </li>
            <li>
                {customer ? (
                    <button
                        className="col-12"
                        style={{
                            marginLeft: 10,
                            textAlign: "center",
                            position: "inherit"
                        }}
                    >
                        <a style={{ color: "red" }} onClick={handleLogout}>
                            {customer.name}
                        </a>
                    </button>
                ) : (
                    <button
                        className="col-12"
                        style={{
                            marginLeft: 10,
                            textAlign: "center",
                            position: "inherit"
                        }}
                    >
                        <Link style={{ color: "black" }} to='/login'>Login</Link>
                    </button>
                )}
            </li>
        </ul>
    );
}

export default HeaderUser;