import React from 'react';
import Master from '../layouts/Master';
import RegisterForm from '../components/RegisterForm';
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
                                    <RegisterForm /> 
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