import moment from "moment";
import { replaceAll, titleize, humanize, capitalize, truncate, dasherize } from "underscore.string";

export const generateShareableJobUrl = (id, category, location) => {
  const hashText = id + category + location;
  const hash = btoa(hashText.slice(0, 8));

  return `job/${id}${dasherize(category)}${dasherize(location)}-${hash}`;
};

export const normalizeJob = job => {
  const template = job.job_template;
  const details = template.other_details;

  if (
    !details ||
    !details.Role ||
    !details.Income ||
    !template.tags ||
    !details.Timings ||
    !details.location ||
    !details.Channel ||
    !details["Age Limit"] ||
    !details["Languages known"] ||
    !details["Job Benefits"] ||
    !details.Skills ||
    !template.category ||
    !Array.isArray(details.Skills)
  )
    return null;

  const data = {
    ids: job.ids || job.id,
    type: template.category,
    applied: job.applied || false,
    category: details.Role,
    salary: details.Income.salary,
    salaryType: details.Income.type,
    employer: template.tags[0],
    timings: details.Timings,
    location: details.location,
    channel: details.Channel,
    applicants: Math.floor(Math.random() * 10),
    ageLimit: !(details["Age Limit"] === "Not required"),
    minAge: 16,
    maxAge: 60,
    identity: details["Identity Proof"],
    languages: details["Languages known"],
    benefits: details["Job Benefits"],
    skills: details.Skills,
    description: template.description,
  };

  data.category = titleize(humanize(data.category));
  data.salaryType = replaceAll(data.salaryType, "per_", "", true).toLowerCase();
  data.timings = capitalize(data.timings);
  data.location = truncate(titleize(data.location), 14);
  data.channel = truncate(data.channel, 14);

  return data;
};

export const normalizeProfile = (profile, placeholder = "-") => {
  const dob = moment(profile.dob).format("DD/MM/YYYY");
  const name = profile.last_name ? profile.first_name + " " + profile.last_name : profile.first_name;

  return {
    avatar: profile.avatar || placeholder,
    name: name || placeholder,
    phone: profile.phone || placeholder,
    city: profile.city || placeholder,
    dob: dob || placeholder,
    dobDate: dob.split("/")[0] || placeholder,
    dobMonth: dob.split("/")[1] || placeholder,
    dobYear: dob.split("/")[2] || placeholder,
    email: profile.email || placeholder,
    lookingFor: profile.lookingFor || placeholder,
    gender: profile.gender || placeholder,
    aadhaar: profile.aadhaar || placeholder,
    bio: profile.bio || placeholder,
  };
};
