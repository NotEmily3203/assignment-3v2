import React from 'react';
const UserProfile = ({userName, memberSince}) => {
    return(
        <div>
            <p>User Profile</p>
            <p>Username : {userName}</p>
            <p>Member Since : {memberSince}</p>
        </div>
    )
}
export default UserProfile;