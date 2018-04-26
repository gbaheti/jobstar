import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import checked from '../../assets/checked.svg';

const normalizeProfile = (profile) => {
  const placeholder = '-';

  return {
    name: profile.first_name + ' ' + profile.last_name || placeholder,
    phone: profile.phone || placeholder,
    location: profile.city || placeholder,
    dob: new Date(profile.dob).toLocaleDateString() || placeholder,
    email: profile.email || placeholder,
    lookingFor: placeholder,
    gender: profile.gender || placeholder,
    aadhaar: placeholder,
    about: profile.bio || placeholder
  };
};

const Profile = (props) => {
  const { profile } = props;

  console.log(profile);

  const user = normalizeProfile(profile);

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
          <p className="profile__value">{user.location}</p>
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
          <p className="profile__value">{user.about}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  };
};

export default connect(mapStateToProps)(Profile);