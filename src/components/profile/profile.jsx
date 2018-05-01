import React from "react";
import { connect } from "react-redux";

import { normalizeProfile } from "../../helpers";

import "./styles.css";
import checked from "../../assets/checked.svg";

const Profile = props => {
  const user = normalizeProfile(props.profile);

  return (
    <div className="profile-wrapper">
      <div className="profile card">
        <div className="profile__head">
          <img src="" alt="" />
          <div className="profile__name">
            <h4>{user.name}</h4>
            <div className="profile__badge">
              <img src={checked} alt="" />
              <p>Phone Verified</p>
            </div>
          </div>
        </div>
        <div className="profile__detail">
          <label className="profile__label">phone</label>
          <p className="profile__value">{user.phone}</p>
        </div>
        <div className="profile__detail">
          <label className="profile__label">location</label>
          <p className="profile__value">{user.city}</p>
        </div>
        <div className="profile__detail">
          <label className="profile__label">date of birth</label>
          <p className="profile__value">{user.dob}</p>
        </div>
        <div className="profile__detail">
          <label className="profile__label">email</label>
          <p className="profile__value">{user.email}</p>
        </div>
        <div className="profile__detail">
          <label className="profile__label">looking for</label>
          <p className="profile__value">{user.lookingFor}</p>
        </div>
        <div className="profile__detail">
          <label className="profile__label">gender</label>
          <p className="profile__value">{user.gender}</p>
        </div>
        <div className="profile__detail">
          <label className="profile__label">aadhaar</label>
          <p className="profile__value">{user.aadhaar}</p>
        </div>
        <div className="profile__detail">
          <label className="profile__label">about yourself</label>
          <p className="profile__value">{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.user.profile,
  };
};

export default connect(mapStateToProps)(Profile);
