import React from 'react';
import './landingPage.css';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {


function handleChange(event:any){
    var target = event.target;
    console.log(target, event)
    if(event.target.value >= 2){
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}
    return (
        <div className="landingPage">
            <div className="landingPage container">
                {/* Firstname and Lastname */}
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control border-align" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lName" className="col-sm-4 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control border-align" id="lname" placeholder="Please enter your last name" />
                        </div>
                    </div>
                </div>

                {/* Address and DOB  */}
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="address" className="col-sm-4 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control border-align" id="address" placeholder="Please enter your address" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="dob" className="col-sm-4 col-form-label">Date Of Birth</label>
                        <div className="row rowAlign">
                        <div className="col-sm-2">
                            <input type="number" onChange={handleChange}  min="0" max="2" className="form-control border-align" id="dob" placeholder="MM" />
                        </div>
                        <div className="col-sm-2">
                            <input type="number" min="0" max="2" className="form-control border-align" id="dob" placeholder="DD" />
                        </div>
                        <div className="col-sm-3">
                            <input type="number" className="form-control border-align" id="dob" placeholder="YYYY" />
                        </div>
                        </div>
                        
                        
                    </div>
                </div>

                {/* Email ID and Phone Number */}
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="email" className="col-sm-4 col-form-label">Email ID</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control border-align" id="email" placeholder="Please enter your email ID" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="pnumber" className="col-sm-4 col-form-label">Phone Number</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control border-align" id="pnumber" placeholder="Please enter your phone number" />
                        </div>
                    </div>
                </div>

                {/* Password and Confirm Password */}
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control border-align" id="password" placeholder="Please enter your password" />
                        </div>
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="password" className="col-sm-4 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control border-align" id="exampleInputPassword1" placeholder="Confirm Password"/>
                        </div>
                    </div>
                    </div>

                    {/* Button */}
                    <div className="wrapper">
                        <Link type="button" to="/vehicleDetails" className="btn button">Submit Button</Link>
                    </div>

                </div>
            </div>

            );
        }
        
        export default LandingPage;
