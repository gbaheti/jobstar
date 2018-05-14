import moment from "moment";
import {
  replaceAll,
  titleize,
  humanize,
  capitalize,
  truncate,
  dasherize
} from "underscore.string";

export const generateShareableJobUrl = (id, category, location) => {
  const hashText = id + category + location;
  const hash = btoa(hashText.slice(0, 8));

  return `job/${id}${dasherize(category)}${dasherize(location)}-${hash}`;
};

export const normalizeJob = job => {
  const template = job.job_template;
  const details = template.other_details;

  if (!template || !details || !details.income || !Array.isArray(details.skills))
    return null;

  const data = {
    ids: job.ids || job.id,
    type: template.category,
    applied: job.applied || false,
    category: details.role,
    salary: details.income.salary,
    salaryType: details.income.type,
    employer: template.tags[0],
    timings: details.timings,
    location: details.location,
    channel: details.channel,
    applicants: Math.floor(Math.random() * 10),
    ageLimit: !(details.age_limit === "Not required"),
    minAge: 16,
    maxAge: 60,
    identity: details.identity_proof,
    languages: details.languages_known,
    benefits: details.job_benefits,
    skills: details.skills,
    description: template.description
  };

  data.category = titleize(humanize(data.category));
  data.salaryType = replaceAll(data.salaryType, "per_", "", true).toLowerCase();
  data.timings = capitalize(data.timings);
  data.location = truncate(titleize(data.location), 14);
  data.channel = truncate(data.channel, 14);

  return data;
};

export const normalizeProfile = (profile, placeholder = "-") => {
  const dob = profile.dob
    ? moment(profile.dob).format("DD/MM/YYYY")
    : "//";
  const name = profile.last_name
    ? profile.first_name + " " + profile.last_name
    : profile.first_name;

  return {
    avatar: profile.avatar || placeholder,
    name: name || placeholder,
    phone: profile.phone || placeholder,
    city: profile.city || placeholder,
    dob: dob !== "//"
      ? dob
      : placeholder,
    dobDate: dob.split("/")[0] || placeholder,
    dobMonth: dob.split("/")[1] || placeholder,
    dobYear: dob.split("/")[2] || placeholder,
    email: profile.email || placeholder,
    lookingFor: profile.lookingFor || placeholder,
    gender: profile.gender || placeholder,
    aadhaar: profile.aadhaar || placeholder,
    bio: profile.bio || placeholder
  };
};
