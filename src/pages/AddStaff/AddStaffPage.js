import React, { useState, useEffect } from "react";
import StaffCard from "../../components/StaffCard/StaffCard";
import AddStaffFields from "../../components/AddStaff/AddStaffFields";
import staffRecords from "../../Staff/staffRecords.json";
import "./AddStaffPage.css";

const AddStaffPage = () => {

    const [staffList, setStaff] = useState(staffRecords);

    useEffect(() => {}, [staffList])

    return (
        
        <div className="add-staff-page">
            <div>
                <AddStaffFields/>
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

export default AddStaffPage;

