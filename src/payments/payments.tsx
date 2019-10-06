import React from 'react';
import './payments.css';
import { Link } from 'react-router-dom';

const paymentsPage: React.FC = () => {
    return (
        <div className="paymentDetails continer-fluid">
            <div className="containerAlign">
                <h3><u>Payment</u></h3>
                <div className="headaingDetails">
                    <h5>Billing Details</h5>
                </div>

                {/* First Name & Last Name */}
                <div className="form-group row inputAlign">
                    <div className="col-md-6">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext border-align" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lName" className="col-sm-4 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext border-align" id="lname" placeholder="Please enter your last name" />
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className="form-group row inputAlign">
                    <div className="col-md-10">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext border-align" id="fName" placeholder="Please enter your Address" />
                        </div><br></br>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext border-align" id="fName" placeholder="Address Line -2" />
                        </div>
                    </div>
                </div>

                {/* Street & ZipCode */}
                <div className="form-group row inputAlign">
                    <div className="col-md-4">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">Street</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext border-align" id="fName" placeholder="Street" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="lName" className="col-sm-4 col-form-label">ZipCode</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext border-align" id="lname" placeholder="ZipCode" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Credit Card Details */}
            <div className="containerAlign">
                <div className="headaingDetails">
                    <h5>Credit Card Details</h5>
                </div>

                {/* CC Number */}
                <div className="form-group row inputAlign">
                    <div className="col-md-10">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">Credit Card Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext border-align" id="fName" placeholder="Please Enter Your 11 Digit Credit Card Number" />
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className="form-group row inputAlign">
                    <div className="col-md-10">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">Expiry Date</label>
                        <div className="row">
                            <div className="col-md-6">
                                <select className="form-control col-sm-6 selectAlign">
                                    <option>State</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <select className="form-control col-sm-6">
                                    <option>State</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>

                {/* CVV */}
                <div className="form-group row inputAlign">
                    <div className="col-md-4">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">CVV</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext border-align" id="fName" placeholder="Street" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default paymentsPage;
