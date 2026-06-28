import Card from "./Card";
const User = () => {
 const jobListings = [
  
  {
    logo: "https://cdn.simpleicons.org/google",
    name: "Google",
    days: "2 days ago",
    title: "Frontend Developer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$140k",
    location: "Bangalore, India"
  },
  {
    logo: "https://cdn.simpleicons.org/apple",
    name: "Apple",
    days: "1 day ago",
    title: "Product Designer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$180k",
    location: "Hyderabad, India"
  },
  
  {
    logo: "https://cdn.simpleicons.org/meta",
    name: "Meta",
    days: "3 days ago",
    title: "UX Researcher",
    type: "Remote",
    level: "Lead",
    salary: "$190k",
    location: "Remote"
  },
  {
    logo: "https://cdn.simpleicons.org/netflix",
    name: "Netflix",
    days: "5 days ago",
    title: "UI Designer",
    type: "Remote",
    level: "Senior Level",
    salary: "$170k",
    location: "Pune, India"
  },
  {
    logo: "https://cdn.simpleicons.org/spotify",
    name: "Spotify",
    days: "7 days ago",
    title: "Motion Designer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$130k",
    location: "Delhi, India"
  },
  
  {
    logo: "https://cdn.simpleicons.org/figma",
    name: "Figma",
    days: "5 days ago",
    title: "UX Designer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$150k",
    location: "Bangalore, India"
  },
  {
    logo: "https://cdn.simpleicons.org/github",
    name: "GitHub",
    days: "10 days ago",
    title: "Frontend Engineer",
    type: "Remote",
    level: "Senior Level",
    salary: "$165k",
    location: "Remote"
  },
  {
    logo: "https://cdn.simpleicons.org/shopify",
    name: "Shopify",
    days: "12 days ago",
    title: "UI Engineer",
    type: "Remote",
    level: "Mid Level",
    salary: "$145k",
    location: "Remote"
  },
  {
    logo: "https://cdn.simpleicons.org/airbnb",
    name: "Airbnb",
    days: "14 days ago",
    title: "Product Designer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$170k",
    location: "Goa, India"
  },

  {
    logo: "https://cdn.simpleicons.org/paypal",
    name: "PayPal",
    days: "11 days ago",
    title: "UX Designer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$145k",
    location: "Hyderabad, India"
  },
  
  {
    logo: "https://cdn.simpleicons.org/intel",
    name: "Intel",
    days: "15 days ago",
    title: "Design Engineer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$175k",
    location: "Chennai, India"
  },
  {
    logo: "https://cdn.simpleicons.org/nvidia",
    name: "NVIDIA",
    days: "2 days ago",
    title: "AI Product Designer",
    type: "Full-Time",
    level: "Lead",
    salary: "$220k",
    location: "Pune, India"
  },
  {
    logo: "https://cdn.simpleicons.org/salesforce",
    name: "Salesforce",
    days: "18 days ago",
    title: "UX Architect",
    type: "Remote",
    level: "Lead",
    salary: "$210k",
    location: "Remote"
  },
 
  {
    logo: "https://cdn.simpleicons.org/atlassian",
    name: "Atlassian",
    days: "4 days ago",
    title: "Senior Product Designer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$195k",
    location: "Bangalore, India"
  }
];
  return (
    <>
      {jobListings.map((job,index) => (
        <Card
         key={index}
          logo={job.logo}
          name={job.name}
          days={job.days}
          title={job.title}
          type={job.type}
          level={job.level}
          salary={job.salary}
          location={job.location}
        />
      ))}
    </>
  );
};

export default User;