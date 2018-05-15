import React, { Component } from "react";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login";

import { isMobile } from "../../utils";
import { normalizeProfile } from "../../helpers";
import { saveProfile, facebookLogin } from "../../actions";

import "./styles.css";
import "react-select/dist/react-select.css";
import fbLogo from "../../assets/fb.png";
import Button from "../button";

class EditProfile extends Component {
  state = {
    user: null,
    jobTypes: [{ value: "full_time", label: "Full time" }, { value: "internship", label: "Internship" }],
  };

  componentDidMount() {
    this.setState({
      user: normalizeProfile(this.props.profile, ""),
    });
  }

  fbLoginCb = response => {
    console.log(response);
  };

  onFbLoginResponse = res => {
    if (res != null && res.name) {
      console.log("CB:", res);

      this.props.facebookLogin(res);
    }
  };

  handleImageUpload = e => {
    const { name } = e.target;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        this.setState({
          user: Object.assign({}, this.state.user, {
            [name]: reader.result,
          }),
        });
      },
      false,
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  handleSelectInput = o => {
    this.setState({
      user: Object.assign({}, this.state.user, {
        lookingFor: o,
      }),
    });
  };

  handleTextInput = e => {
    const { value, name } = e.target;

    this.setState({
      user: Object.assign({}, this.state.user, {
        [name]: value,
      }),
    });
  };

  saveProfile = () => {
    const { user } = this.state;
    const profile = Object.assign({}, user, {
      dob: `${user.dobDate}/${user.dobMonth}/${user.dobYear}`,
    });

    delete profile.dobDate;
    delete profile.dobMonth;
    delete profile.dobYear;

    this.props.saveProfile(profile);
  };

  render() {
    const { user } = this.state;

    return (
      user && (
        <div className="edit-profile-wrapper">
          <div className="edit-profile card">
            <h4>Please fill the details</h4>
            <div className="edit-profile__form">
              <div className="edit-profile__input-grp">
                <label>Social Profiles</label>
                <div className="edit-profile__field">
                  <FacebookLogin
                    appId="164437664237055"
                    fields="name,email,gender"
                    callback={this.fbLoginCb}
                    isMobile={isMobile()}
                    disableMobileRedirect={true}
                    cssClass="input-grp register__fb"
                    textButton="Continue with facebook"
                    scope="public_profile,email"
                    icon={<img src={fbLogo} alt="fb-logo" />}
                  />
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>Your Photo</label>
                <div className="edit-profile__field">
                  <div className="file-input">
                    <p className="file-input__label">Click here to upload</p>
                    <input type="file" name="avatar" onChange={this.handleImageUpload} />
                  </div>
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>Name</label>
                <div className="edit-profile__field">
                  <input type="text" name="name" placeholder="Enter a name" value={user.name} onChange={this.handleTextInput} />
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>Phone Number</label>
                <div className="edit-profile__field">
                  <input type="text" name="phone" placeholder="Enter phone number" value={user.phone} onChange={this.handleTextInput} />
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>DOB</label>
                <div className="edit-profile__field edit-profile__field--dob">
                  <input type="text" name="dobDate" placeholder="DD" value={user.dobDate} onChange={this.handleTextInput} />
                  <span>/</span>
                  <input type="text" name="dobMonth" placeholder="MM" value={user.dobMonth} onChange={this.handleTextInput} />
                  <span>/</span>
                  <input type="text" name="dobYear" placeholder="YYYY" value={user.dobYear} onChange={this.handleTextInput} />
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>Email</label>
                <div className="edit-profile__field">
                  <input type="email" name="email" placeholder="you@gmail.com" value={user.email} onChange={this.handleTextInput} />
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>Your City</label>
                <div className="edit-profile__field">
                  <input type="text" name="city" placeholder="Enter city name" value={user.city} onChange={this.handleTextInput} />
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>Gender</label>
                <div className="edit-profile__field edit-profile__filed--radio">
                  <div className="radio-grp flex">
                    <input type="radio" name="gender" value="male" checked={user.gender === "male"} onChange={this.handleTextInput} />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="radio-grp flex">
                    <input type="radio" name="gender" value="female" checked={user.gender === "female"} onChange={this.handleTextInput} />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>Aadhar ID</label>
                <div className="edit-profile__field">
                  <div className="file-input">
                    <p className="file-input__label">Click here to upload</p>
                    <input type="file" name="aadhaar" onChange={this.handleImageUpload} />
                  </div>
                </div>
              </div>
              <div className="edit-profile__input-grp">
                <label>About yourself</label>
                <div className="edit-profile__field">
                  <textarea placeholder="Why should someone hire you?" name="bio" value={user.bio} onChange={this.handleTextInput} />
                </div>
              </div>
            </div>
            <Button type="primary" text="save profile" clickHandler={this.saveProfile} />
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

const mapDispatchToProps = dispatch => {
  return {
    facebookLogin: (details) => dispatch(facebookLogin(details)),
    saveProfile: profile => dispatch(saveProfile(profile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
