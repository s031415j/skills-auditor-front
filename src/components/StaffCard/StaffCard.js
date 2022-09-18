import React from "react";
import "./StaffCard.css";

const StaffCard = ({
  staff: { id, firstname, surname, jobRole, email, phoneNumber},


}) => {
  return (
    <div className="staff-card" key={id}>
      <div className="top-section">
        <div className="profile-pic">
          <img className="profile-pic"
          src={`/images/staff-${id}.jpg`}
          alt={id}/>
        </div>
        <div className="staff-info">
          <h2 className="staff-name">{firstname} {surname}</h2>
          <h3>{jobRole}</h3>
        </div>
      </div>
      
      <div className="bottom-section">
        <div className="staff-contact-info">
          <div className="email-section">
            <img className="card-icon icon"src={`/images/email-icon.png`} alt="email-icon"/>
            <p>{email}</p>
          </div>
          <div className="phone-section">
           <img className="card-icon icon"src={`/images/phone-icon.png`} alt="phone-icon"/> 
           <p className="phone-info">{phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
