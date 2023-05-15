import React from "react";
import StaffCard from "../StaffCard/StaffCard";

const StaffList = (props) => {

  return (
    <>
      {props.staffList.length > 0 ? (
        <div className="staff-card-container">
          {props.staffList.map((staffMember, index) => (
            <StaffCard
              staff={staffMember}
              updateStaff={(value) => props.updateStaff(index, value)}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No staff member was found</h2>
        </div>
      )}
    </>
  );
};

export default StaffList;