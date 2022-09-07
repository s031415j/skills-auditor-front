import React, { useState, useEffect } from "react";
import StaffCard from "../../components/StaffCard/StaffCard";
import staffRecords from "../../Staff/staffRecords.json";
import './StaffPage.css';

const StaffPage = () => {
    const [searchedStaff, setSearchedStaff] = useState("");
    const [staffList, setStaff] = useState(staffRecords);

    useEffect(() => {
        
    }, [staffList])

    const searchStaff = (firstname) => {
        if(!firstname) {
            setStaff(staffRecords);
            return;
        } 

        //
        const foundStaff = staffRecords.filter(record => record.firstname === firstname);
        console.log("Found Staff:", foundStaff);
        console.log("Firstname: ", firstname);

        setStaff(foundStaff);
    };

    return (
        <div className="staffPage">
            <div className="search">
                <input
                value={searchedStaff}
                onChange={(e) => setSearchedStaff(e.target.value)}
                placeholder="Search staff by first name"
                />
                <img
                className="icon" src={`/images/search-icon.png`} alt="email-icon" onClick={() => searchStaff(searchedStaff)}
                />
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

export default StaffPage;