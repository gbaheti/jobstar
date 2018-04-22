import { replaceAll, titleize, humanize, capitalize, truncate } from 'underscore.string';

const validate = (job) => {
  const template = job.job_template;
  const details = template.other_details;

  if(!details.Role || !details.Income || !template.company || !details.Timings || !details.location || !details.Channel || !details['Age Limit'] || !details['Languages known'] || !details['Job Benefits'] || !details.Skills || !Array.isArray(details.Skills))
    return null;

  const data = {
    category: details.Role,
    salary: details.Income.salary,
    salaryType: details.Income.type,
    employer: template.company.name,
    timings: details.Timings,
    location: details.location,
    channel: details.Channel,
    applicants: Math.floor(Math.random()*10),
    ageLimit: !(details['Age Limit'] === 'Not required'),
    minAge: 16,
    maxAge: 60,
    identity: details['Identity Proof'],
    languages: details['Languages known'],
    benefits: details['Job Benefits'],
    skills: details.Skills,
    description: template.description
  }
  
  data.category = titleize(humanize(data.category));
  data.salaryType = replaceAll(data.salaryType, "per_", "", true).toLowerCase();
  data.timings = capitalize(data.timings);
  data.location = truncate(titleize(data.location), 14);
  data.channel = truncate(data.channel, 14);

  return data;
};

export default validate;