const data = {
  location: 'Delhi',
  count: 22,
  jobs: []
};

const profiles = ['Delivery / Pickup Driver', 'Cleaner / Helper', 'BPO / Data Entry', 'Receptionist', 'Security', 'Teaching', 'Waiter'];
const companies = ['Reliance Retail', 'Spars Studio', 'Tata Group', 'Future Retail', 'Paytm', 'Aditya Birla Fashion & Retail', 'Provogue', 'V-Mart'];
const shifts = ['Morning', 'Evening', 'Night'];

for(let i=0; i < 22; ++i) {
  data.jobs.push({
    id: Math.round(Math.random()*10000),
    profile: profiles[Math.floor(Math.random()*profiles.length)],
    salary: Math.round(Math.random()*100)*100,
    employer: companies[Math.floor(Math.random()*companies.length)],
    shift: shifts[Math.floor(Math.random()*shifts.length)],
    area: 'Pritampura',
    type: 'Onsite',
    applicants: Math.round(Math.random()*100),
    verified: true,
    description: 'Paytm is looking for Freelance Field Specialists to join Paytm Force. What is Paytm Force? Paytm Force is a team of on-field specialists who will on-board merchants on Paytm Wallet and guide them use it. Note: This is not a  work-from-home opportunity',
    requirements: {
      age_limit: true,
      max_age: 60,
      min_age: 21,
      languages: ['Hindi', 'English'],
      identity: null,
      benefits: ['Flexible work', 'Travel expense paid'],
      skills: ['Sales', 'Marketing'],
    }
  })
}

export default data;