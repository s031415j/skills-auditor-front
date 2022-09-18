import React, { useState, useEffect } from "react";
import StaffCard from "../../components/StaffCard/StaffCard";
import staffRecords from "../../Staff/staffRecords.json";
import './RemoveStaffPage.css';

const RemoveStaffPage = () => {
    const [staffId, setStaffId] = useState("");
    const [staffList, setStaff] = useState(staffRecords);

    const removeStaffById = (sList, id) => 
    sList.filter(staffList => staffList.id !== id);

        useEffect(() => {}, [staffList])

    return (
        <div className="remove-staff-page">
            <div className="remove">
                <input id="remove-input"
                    value={staffId}
                    placeholder="Enter staff id"
                    onChange={(e) => setStaffId(e.target.value)}
                    />
                <img
                    className="minus-icon icon" src={`/images/minus-icon.png`} alt="minus-icon" onClick={() => removeStaffById(staffRecords, staffId)}/>
            </div>


        {staffList?.length > 0 ? (
            <div className="staff-card-container">
                {staffList.map((staffMember) => (
                    <StaffCard staff={staffMember}/>
                ))}
            </div>
        ): (
            <div className="empty">
                <h2>No staff member was found</h2>
            </div>
        )}
        </div>
    );
};

export default RemoveStaffPage;

