import React from 'react';

const ProfileDetails = () => {
  return (
    <div className="profile">
      <div className="profile__form-grp">
        <label>What’s your name?</label>
        <input type="text" name="name" placeholder="Enter name" />
      </div>
      <div className="profile__form-grp">
        <label>Date of Birth</label>
        <div className="profile__input-grp">
          <input type="text" name="date" placeholder="DD" />
          <span>/</span>
          <input type="text" name="month" placeholder="MM" />
          <span>/</span>
          <input type="text" name="year" placeholder="YYYY" />
        </div>
      </div>
      <div className="profile__form-grp">
        <label>Select city</label>
        <input type="text" name="city" placeholder="Enter city name" />
      </div>
    </div>
  );
}

export default ProfileDetails;