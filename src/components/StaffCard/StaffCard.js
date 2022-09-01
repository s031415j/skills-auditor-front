import React from "react";

import "./StaffCard.css";

const StaffCard = ({
  staff: { id, firstname, surname, username, password },
}) => {
  return (
    <div className="staff" key={id}>
      <div style={{ backgroundColor: "pink" }}>
        <div>
          <p>
            {firstname} {surname}
          </p>
        </div>

        <div>
          <img
            src={`/images/staff-${id}.jpg`}
            alt={id}
            style={{ height: "100px" }}
          />
        </div>

        <div>
          <span>{username}</span>
          <h3>{password}</h3>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
