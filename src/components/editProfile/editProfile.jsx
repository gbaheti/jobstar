import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './styles.css';
import fbLogo from '../../assets/fb.png';
import Button from '../button';

class EditProfile extends Component {
  onProfileImageUpload = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div className="edit-profile-wrapper">
        <div className="edit-profile card">
          <h4>Please fill the details</h4>
          <div className="edit-profile__form">
            <div className="edit-profile__input-grp">
              <label>Social Profiles</label>
              <div className="edit-profile__field">
                <button className="input-grp register__fb">
                  <img src={fbLogo} alt="fb-logo" />
                  continue with facebook
                </button>
              </div>
            </div>
            <div className="edit-profile__input-grp">
              <label>Your Photo</label>
              <div className="edit-profile__field">
                <div className="file-input">
                  <p className="file-input__label">Click here to upload</p>
                  <input type="file" name="profile-photo" onChange={this.onProfileImageUpload}/>
                </div>
              </div>
            </div>
            <div className="edit-profile__input-grp">
              <label>Name</label>
              <div className="edit-profile__field">
                <input type="text" name="name" placeholder="Enter a name"/>
              </div>
            </div>
            <div className="edit-profile__input-grp">
              <label>DOB</label>
              <div className="edit-profile__field">
                <input type="text" name="name" placeholder="Enter a name"/>
              </div>
            </div>
            <div className="edit-profile__input-grp">
              <label>Email</label>
              <div className="edit-profile__field">
                <input type="email" name="email" placeholder="you@gmail.com"/>
              </div>
            </div>
            <div className="edit-profile__input-grp">
              <label>Your City</label>
              <div className="edit-profile__field">
                <input type="text" name="city" placeholder="Enter city name"/>
              </div>
            </div>
            <div className="edit-profile__input-grp">
              <label>Gender</label>
              <div className="edit-profile__field edit-profile__filed--radio">
                <div className="radio-grp flex">
                  <input type="radio" name="gender" value="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="radio-grp flex">
                  <input type="radio" name="gender" value="female" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            <div className="edit-profile__input-grp">
              <label>Job Type</label>
              <div className="edit-profile__field">
                <Select
                  name="job-type"
                  placeholder="Select job type"
                  options={[
                    { value: 'yay', label: 'Full time' },
                    { value: 'nay', label: 'Internship' },
                  ]}
                />
              </div>
            </div>
            <div className="edit-profile__input-grp">
              <label>Aadhar ID</label>
              <div className="edit-profile__field">
                <div className="file-input">
                  <p className="file-input__label">Click here to upload</p>
                  <input type="file" name="photo" />
                </div>
              </div>
            </div>
            <div className="edit-profile__input-grp">
              <label>About yourself</label>
              <div className="edit-profile__field">
                <textarea placeholder="Why should someone hire you?" />
              </div>
            </div>
          </div>
          <Button type="primary" text="save profile" />
        </div>
      </div>
    );
  }
}

export default EditProfile;