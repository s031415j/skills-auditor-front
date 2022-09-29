import React, { useState } from "react";
import StaffCard from "../../components/StaffCard/StaffCard";

const StaffList = (props) => {
  const [staffList, setStaffList] = useState(props.staffList);

  const updateStaffList = (index, newValue) => {
    const staffListCopy = [...staffList];
    staffListCopy.splice(index, 1, newValue);
    setStaffList(staffListCopy);
  };

  return (
    <>
      {staffList.length > 0 ? (
        <div className="staff-card-container">
          {staffList.map((staffMember, index) => (
            <StaffCard
              staff={staffMember}
              updateStaff={(value) => updateStaffList(index, value)}
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