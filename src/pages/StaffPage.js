import React, { useState, useEffect } from "react";
import StaffCard from "../components/StaffCard/StaffCard";
import SearchIcon from "../search.svg"
import staffRecords from "../Staff/staffRecords.json";

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
            <h1>Directory</h1>

            <div className="search">
                <input
                value={searchedStaff}
                onChange={(e) => setSearchedStaff(e.target.value)}
                placeholder="Search staff by first name"
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchStaff(searchedStaff)}
                style={{width:"20px"}}
                />
            </div>

            {staffList?.length > 0 ? (
                <div className="container">
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