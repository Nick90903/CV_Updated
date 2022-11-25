import React, { useState, useEffect} from "react";
import '../Styles/GeneralInformation.css'

const General = () => {


    return (
        <div className="GeneralContainer FC">
            <div className="GeneralHeader">
                <p id="Name">Name</p>
                <p id="JobTitle">Job Title</p>
            </div>
            <div className="GeneralBody">
                <div className="GeneralLeft FC">
                    <p id="GeneralLeftHeader">Personal Details</p>
                    <p id="Address">Address:</p>
                    <p id="PhoneNumber">Phone Number:</p>
                    <p id="Email">Email:</p>
                </div>
                <div className="GeneralRight FC">
                    <p id="GeneralRightHeader">Description</p>
                    <p id="GeneralDescription">General Description</p>
                </div>
            </div>
        </div>
    );
};

export default General;