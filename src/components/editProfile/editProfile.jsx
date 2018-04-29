import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import "react-select/dist/react-select.css";

import normalizeProfile from "../profile/normalizeProfile";

import "./styles.css";
import fbLogo from "../../assets/fb.png";
import Button from "../button";

class EditProfile extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState(
      {
        user: normalizeProfile(this.props.profile, null),
      },
      () => {
        const [dobDate, dobMonth, dobYear] = this.state.user.dob.split("/");

        this.setState({
          user: Object.assign({}, this.state.user, {
            dobDate,
            dobMonth,
            dobYear,
          }),
        });
      },
    );
  }

  onProfileImageUpload = e => {
    console.log(e.target);
  };

  render() {
    // const { profile } = this.props;
    // const user = normalizeProfile(profile, null);
    const { user } = this.state;

    console.log(user);

    return (
      user && (
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
                    <input
                      type="file"
                      name="profile-photo"
                      onChange={this.onProfileImageUpload}
                    />
                  </div>
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>Name</label>
                <div className="edit-profile__field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter a name"
                    value={user.name}
                  />
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>DOB</label>
                <div className="edit-profile__field edit-profile__field--dob">
                  <input
                    type="text"
                    name="date"
                    placeholder="DD"
                    value={user.dobMonth}
                  />
                  <span>/</span>
                  <input
                    type="text"
                    name="month"
                    placeholder="MM"
                    value={user.dobDate}
                  />
                  <span>/</span>
                  <input
                    type="text"
                    name="year"
                    placeholder="YYYY"
                    value={user.dobYear}
                  />
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>Email</label>
                <div className="edit-profile__field">
                  <input
                    type="email"
                    name="email"
                    placeholder="you@gmail.com"
                    value={user.email}
                  />
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>Your City</label>
                <div className="edit-profile__field">
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter city name"
                    value={user.location}
                  />
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
                      { value: "yay", label: "Full time" },
                      { value: "nay", label: "Internship" },
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
                  <textarea
                    placeholder="Why should someone hire you?"
                    value={user.about}
                  />
                </div>
              </div>
            </div>
            <Button type="primary" text="save profile" />
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.user.profile,
  };
};

export default connect(mapStateToProps)(EditProfile);
