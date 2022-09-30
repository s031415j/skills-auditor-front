import React, { useState, useEffect } from "react";
import StaffList from "../../components/StaffList/StaffList";
import "./StaffPage.css";

const StaffPage = (props) => {
  const [searchedStaff, setSearchedStaff] = useState("");
  const [staffList, setStaff] = useState(props.staffRecords);

  useEffect(() => {}, [staffList]);

  const searchStaff = (firstname) => {
    if (!firstname) {
      setStaff(props.staffRecords);
      return;
    }

    const foundStaff = staffList.filter(
      (record) => record.firstname === firstname
    );
    console.log("Found Staff:", foundStaff);
    console.log("Firstname: ", firstname);

    setStaff(foundStaff);
  };

  return (
    <div className="staff-page">
      <div className="search">
        <input
          id="search-bar"
          value={searchedStaff}
          onChange={(e) => setSearchedStaff(e.target.value)}
          placeholder="Search staff by first name"
        />
        <img
          className="search-icon icon"
          src={`/images/search-icon.png`}
          alt="email-icon"
          onClick={() => searchStaff(searchedStaff)}
        />
      </div>

      <StaffList staffList={staffList} updateStaff={props.updateStaff} />
    </div>
  );
};

export default StaffPage;
