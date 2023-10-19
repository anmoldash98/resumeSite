/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 100 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anmol Dash",
  title: "Hi all, I'm Anmol",
  subTitle: emoji(
    "A passionate Software Developer/Data Engineer 🚀 having an experience of building Web and Mobile applications with Java / Spring / Python / Snowflake and some other cool libraries and frameworks."
  ),
  resumeLink:"", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/anmol-dash/",
  medium: "https://medium.com/@anmoldash98",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "B2B SaaS Developer, working on highly Scalabale Enterprise Ready Applications",
  skills: [
    emoji("⚡ Lead Tech Teams to drive completion of business goals"),
    emoji("⚡ Build Enterprise SaaS Applications using Java + Spring Boot"),
    emoji("⚡ Data Engineering Work using Snowflake, leveraging it as a Platform for new Apps")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fab fa-regular fa-snowflake"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fa-flower"
    },
    {
      skillName: "B2B ",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "SQL Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "DynamoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Maryland, Baltimore County",
      logo: require("./assets/images/UMBC-removebg.png"),
      subHeader: "Master of Science in Information Systems",
      duration: "June 2020 - December 2022"
    },
    {
      schoolName: "University of Maryland, Baltimore County",
      logo: require("./assets/images/UMBC-removebg.png"),
      subHeader: "Bachelor of Science in Information Systems",
      duration: "August 2016 - December 2019",
      descBullets: ["Entrepreneurship Minor", "Cyber Security Certificate", "Networking Certficiate"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Software Engineer",
      company: "Capital One",
      companylogo: require("./assets/images/capitalOneLogo.png"),
      date: "Jul 2023 – Present",
      desc: "Lead Software Engineer at Capital One. Working on a B2B SaaS Application.",
      descBullets: [
        "Lead App Developement Team to build features on Snowflake, leveraging it as a platform",
        "Lead Development effort with Partnered External Team, for cutting-edge features",
        "More to Come!"
      ]
    },
    {
      role: "Adjunct Professor",
      company: "UMBC",
      companylogo: require("./assets/images/UMBC-removebg.png"),
      date: "Feb 2022 – Present",
      desc: "Adjunct Professor, teaching students topics such as Databases and Java",
      descBullets: [
        "Teach IS 410/610 (Database Systems) and IS 147 (Introduction to Java) Courses at the University",
        "Improve the learning Experience by Introducing “Data Dictionaries” and “Java Jazz” which are Follow Along Worksheets which students can fill out",
        "Enhanced Learning and Receptiveness to content",
        "Made Class Interaction more dynamic as it pushed students to follow along and understand content on slides.",
        "Introduced Use of PollEverywhere to Reinforce Learning and create a fun and amicable environment encouraging students to Reinforce Concepts without Risk of Failure",
        "Create Exams, Slides, and Class Exercises for students to facilitate a continuous learning environment"
      ]
    },
    {
      role: "Principal Associate, Software Engineer",
      company: "Capital One",
      companylogo: require("./assets/images/capitalOneLogo.png"),
      date: "Feb 2022 – Jul 2023",
      desc: "Principal Associate Software Engineer at Capital One. Working on a B2B SaaS Application.",
      descBullets: [
        "Utilize Java 11 and Maven to design Microservices and Secure API’s for use in B2B Applications",
        "Create Tech Designs for multiple key features for B2B Application, Architecting technologies such as Spring Boot Microservices, Lambdas, Auth0, Dynamo, and Snowflake",
        "Lead team through 2 Pivotal Technology Shifts, from focusing on Microservice, moving towards Authentication platforms, and most recently Shifting to Snowflake Based Architecture",
        "Lead efforts for E2E Testing Automation, building out Pipelines to Conduct Cypress Tests on SauceLabs, Building out Test Data Loading and Generation tools",
        "Orchestrate Communication between Product, Design, and Tech to ensure requirements are clear and work is defined for Engineering team"
      ]
    },
    {
      role: "Senior Associate, Software Engineer",
      company: "Capital One",
      companylogo: require("./assets/images/capitalOneLogo.png"),
      date: "Mar 2021 – Feb 2022",
      desc: "Senior Associate Software Engineer at Capital One. Working on a B2B SaaS Application.",
      descBullets: [
        "Create Microservices that are core features of B2B App",
        "Introduce team to Sprint, Java, DynamoDB, and lead creation and design of services, and workflows"
      ]
    },
    {
      role: "Software Engineer",
      company: "General Dynamics, Mission Systems",
      companylogo: require("./assets/images/gdmsLogo.jpeg"),
      date: "Nov 2019 – Apr 2021",
      desc: "Software Engineer, working on Spring Boot",
      descBullets: [
        "Utilize Java 11 to develop REST applications based on the Spring Boot framework",
        "Design microservice application to monitor status of Kafka messages being passed and organizing messages into categories based on time and type of messages",
        "Create Microservices and REST endpoints to facilitate monitoring of application, and facilitate front-end access to back-end application information",
        "Implement Integration Tests, Unit Tests, and Dev server testing to ensure quality of software before being deployed to production environment",
        "Deploy code in a CI/CD pipeline, conducting code reviews for every new feature added, gathering and implementing feedback before merging code"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that I have taken and Obtained!",

  achievementsCards: [
    {
      title: "AWS Certified Developer Associate (Exp: Jul 2023)",
      subtitle:
        "Obtained my AWS Certification",
      image: require("./assets/images/awsCDA.png"),
      imageAlt: "AWS Certified Developer Associate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/aa6b5be0-ac19-43e9-9dc8-923c2ffd8962/linked_in_profile"
        }
      ]
    },
    {
      title: "Cisco Certified Networking Associate (Exp: May 2019)",
      subtitle:
        "Obtained my Cisco Certification",
      image: require("./assets/images/ccnaLogo.jpg"),
      imageAlt: "CCNA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://cp.certmetrics.com/cisco/en/public/verify/credential/425124169706JLYL"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Just some fun stuff I have wrote on Medium!",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Reach out on Linkedin!",
};

// Twitter Section

const twitterDetails = {
  userName: "adash98", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
