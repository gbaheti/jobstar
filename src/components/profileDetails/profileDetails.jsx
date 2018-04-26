import React from 'react';

const ProfileDetails = (props) => {
  const { handleNameInput, handleDateInput, handleMonthInput, handleYearInput, handleCityInput, error } = props;

  return (
    <div className="profile-details">
      <div className="profile-details__form-grp">
        <label>What’s your name?</label>
        <input type="text" name="name" placeholder="Enter name" onChange={handleNameInput} />
      </div>
      <div className="profile-details__form-grp">
        <label>Date of Birth</label>
        <div className="profile-details__input-grp">
          <input type="text" name="date" placeholder="DD" onChange={handleDateInput} />
          <span>/</span>
          <input type="text" name="month" placeholder="MM" onChange={handleMonthInput} />
          <span>/</span>
          <input type="text" name="year" placeholder="YYYY" onChange={handleYearInput} />
        </div>
      </div>
      <div className="profile-details__form-grp">
        <label>Select city</label>
        <input type="text" name="city" placeholder="Enter city name" onChange={handleCityInput} />
      </div>
      { error && <p className="text--error">{error}</p> }
    </div>
  );
}

export default ProfileDetails;