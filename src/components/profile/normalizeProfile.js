const normalizeProfile = (profile, placeholder = "-") => {
  return {
    name: profile.first_name + " " + profile.last_name || placeholder,
    phone: profile.phone || placeholder,
    location: profile.city || placeholder,
    dob: new Date(profile.dob).toLocaleDateString() || placeholder,
    email: profile.email || placeholder,
    lookingFor: placeholder,
    gender: profile.gender || placeholder,
    aadhaar: placeholder,
    about: profile.bio || placeholder,
  };
};

export default normalizeProfile;
