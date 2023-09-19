import React, { useEffect, useState } from 'react';
import Master from '../layouts/Master';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { NumericFormat } from 'react-number-format';
import { SET_CART } from '../redux/action'
import swal from 'sweetalert';
import CustomerModel from '../models/CustomerModel';

function Cart(props) {
    const carts = useSelector((state) => state.cart);
    const [cartTotal, setCartTotal] = useState(0);
    const dispatch = useDispatch();
    const image = 'http://127.0.0.1:8000/';
    const navigate = useNavigate();

    useEffect(() => {
        let total = 0;
        carts.forEach((cartItem) => {
            total += cartItem.quantity * cartItem['product'].price * (1 - cartItem['product'].discount * 0.01);
        });
        setCartTotal(total);
    }, [carts]);

    const handleQuantityChange = (e) => {
        const id = e.target.id;
        const qty = e.target.value;
        const newCart = [...carts];
        newCart.map((cartItem) => {
            if (cartItem.id == id) {
                if (cartItem.product.quantity < qty) {
                    swal({
                        title: "Warning",
                        text: "Product is not enough!",
                        icon: "warning",
                        button: "Thanks",
                    });

                } else {
                    cartItem.quantity = qty;
                    localStorage.setItem("cart", JSON.stringify(newCart));
                    dispatch({
                        type: SET_CART,
                        payload: newCart,
                    });
                }
            }
        })
    };
    const handleRemove = (index) => {
        const newCart = [...carts];
        newCart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(newCart));
        dispatch({
            type: SET_CART,
            payload: newCart,
        });
    };
    const handCheckOut = () => {
        let customer = CustomerModel.getCookie("customer");
        customer = customer ? JSON.parse(customer) : "";
        if (customer) {
            navigate('/checkout');
        } else {
            swal({
                title: "Warning",
                text: "You hadn't been login, Please Login before CheckOut ",
                icon: "warning",
                button: "Thanks",
            });
            navigate('/login');
        }
    }
    return (
        <Master>
            <section className="page-title p_relative centred">
                <div className="auto-container">
                    <div className="content-box">
                        <h1 className="d_block fs_60 lh_70 fw_bold mb_10">Cart Page</h1>
                        <ul className="bread-crumb p_relative d_block mb_8 clearfix">
                            <li className="p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inte mr_20">
                                <Link to="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li className="current p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inte">
                                Cart Page
                            </li>
                            <li className="current p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inte ml-3">
                                <Link to="/order">
                                    Order
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="cart-section p_relative pt_140 pb_150">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 table-column">
                            <div className="table-outer">
                                <table className="cart-table w-100 text-center">
                                    <thead className="cart-header">
                                        <tr>
                                            <th className="text-center">Image</th>
                                            <th>&nbsp;</th>
                                            <th className="text-center">Product Name</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th className="quantity">Quantity</th>
                                            <th>Subtotal</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carts.map((cart, index) => (
                                            <tr key={index}>
                                                <td className="w-25">
                                                    <img
                                                        className="img-thumbnail w-50"
                                                        style={{ marginLeft: "25%", objectFit: "cover" }}
                                                        src={image + cart.product.image}
                                                        alt="parts"
                                                    />
                                                </td>
                                                <td colSpan={4} className="prod-column text-center">
                                                    <div className="column-box">
                                                        <div className="prod-title">
                                                            {cart['product'].name}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="data-price">
                                                    <NumericFormat
                                                        style={{ color: "red" }}
                                                        value={cart['product'].price}
                                                        displayType="text"
                                                        thousandSeparator={true}
                                                        suffix=" VNĐ"
                                                    />
                                                </td>
                                                <td
                                                    className="data-discount"
                                                >
                                                    {cart['product'].discount}%
                                                </td>
                                                <td className="qty">
                                                    <div className="item-quantity">
                                                        <input
                                                            min={1}
                                                            type="number"
                                                            id={cart.id}
                                                            className="form-control form-control-sm bg-light border-0 text-center"
                                                            defaultValue={cart.quantity}
                                                            onChange={handleQuantityChange}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="sub-total">
                                                    <NumericFormat
                                                        value={cart.quantity * cart['product'].price * (1 - cart['product'].discount * 0.01)}
                                                        allowLeadingZeros
                                                        thousandSeparator="."
                                                        decimalSeparator=","
                                                        displayType="text"
                                                    />
                                                    VND
                                                </td>
                                                <td className="actions" data-th="">
                                                    <button
                                                        className="btn btn-outline-danger btn-sm remove-from-cart" onClick={() => handleRemove(index)}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="bi bi-x-lg"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {!carts ? '' :
                        <div className="cart-total">
                            <div className="row">
                                <div className="col-xl-5 col-lg-12 col-md-12 offset-xl-7 cart-column">
                                    <div
                                        className="total-cart-box clearfix text-right"
                                        style={{ lineHeight: "200%" }}
                                    >
                                        <h3 className="fs_24 fw_sbold lh_30 d_block m-3">Order Total :</h3>
                                        <ul className="list clearfix mb_30">
                                            <li>
                                                <h5>
                                                    <NumericFormat
                                                        value={cartTotal}
                                                        allowLeadingZeros
                                                        thousandSeparator="."
                                                        decimalSeparator=","
                                                        displayType="text"
                                                    />
                                                    VND
                                                </h5>
                                            </li>
                                        </ul>
                                        <a
                                            className="theme-btn theme-btn-eight" onClick={handCheckOut}
                                        >
                                            Proceed to Checkout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </Master>
    );
}
export default Cart;