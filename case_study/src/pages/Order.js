import React, { useEffect, useState } from 'react';
import Master from '../layouts/Master';
import { Link } from 'react-router-dom';
import OrderModel from '../models/OrderModel';

function Order(props) {
    const [orders, setOrders] = useState({})
    let customerData = 
    useEffect(()=>{
        OrderModel.findwcus()
    })
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
                                <Link to="/cart">
                                    Cart Page
                                </Link>
                            </li>
                            <li className="current p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inte ml-3">
                                Order
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* End Page Title */}
            {/* cart section */}
            <section className="cart-section p_relative pt_140 pb_150">
                <div className="auto-container">
                    <div className="row clearfix">
                        @foreach($orders as $order) 
                            @foreach($order-&gt;orderdetail as $detail)
                            @endforeach 
                        @endforeach
                        <table className="table w-100">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>Subtotal</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th colSpan={6} className="text-left">
                                        Order ID : {"{"}
                                        {"{"}$order-&gt;id{"}"}
                                        {"}"}
                                        <br />
                                        Note : {"{"}
                                        {"{"}$order-&gt;note{"}"}
                                        {"}"}
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        {"{"}
                                        {"{"} $detail-&gt;product-&gt;name {"}"}
                                        {"}"}
                                    </td>
                                    <td>
                                        {"{"}
                                        {"{"} $detail-&gt;quantity {"}"}
                                        {"}"}
                                    </td>
                                    <td>
                                        {"{"}
                                        {"{"} number_format($detail-&gt;product-&gt;price).' VND' {"}"}
                                        {"}"}
                                    </td>
                                    <td>
                                        {"{"}
                                        {"{"} number_format($detail-&gt;product-&gt;discount).' %' {"}"}
                                        {"}"}
                                    </td>
                                    <td>
                                        {"{"}
                                        {"{"} number_format($detail-&gt;total).' VND' {"}"}
                                        {"}"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>
                                        @if($order-&gt;status == 1) complete @else in process... @endif
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Master>
    );
}

export default Order;