const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Waleed Gul | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions ",
  og: {
    title: "Waleed Gul",
    type: "website",
    url: "https://portfolio-site-four-liard.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Waleed Gul",
  logo_name: "Waleed Gul",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/waleedgul92",
    },

    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/waleedgul/",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#323754",
      },
      profileLink: "https://leetcode.com/u/hwaleed0035/",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/waleedgul92/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects(T5-Transformer & OpenAI)",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis) & Voice Cloning",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "orange",
            // color:"#f8f8f8"
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Data Analysis",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
        "⚡ Creating application backend in Node, Flask & Streamlit",
        "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "Powerbi",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#F2C811",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "My SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            // color: "#CC6699",
          },
        },
      ],
    },
    {
      title: "MLOps",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "DVC",
          fontAwesomeClassname: "simple-icons:dvc",
          style: {
            color: "2B85FF",
          },
        },
        {
          skillName: "MLflow",
          fontAwesomeClassname: "simple-icons:mlflow",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2fa3f7",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Universal Subtitle Generator",
      img_path: "project-06.png",
      description:
        "A Tool to generate either original audio subtitle file or translated into prefered language",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      // link: "https://teath.herokuapp.com ",
      code: "https://github.com/waleedgul92/Universal-Subtitle-Generator",
      linkcolor: "white",
    },

    {
      title: "Cold Compose AI",
      img_path: "voice.gif",
      description:
        "A LLM based solution to generate cold emails based on job description and your skills",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "https://github.com/waleedgul92/ColdComposeAI",
      linkcolor: "white",
    },
    {
      title: "DocWeaver",
      img_path: "neural.gif",
      description: "A RAG based LLM to QA based on PDFs and URLs",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/rohankokkula/neuralviz",
      linkcolor: "white",
    },
    {
      title: "OCR for captcha",
      img_path: "project-03.png",
      description: "Fined tuned LLM model to capture text from captcha images",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code:
        "https://github.com/waleedgul92/OCR-using-Fine-Tuning-LLM-on-custom-datatset",
      linkcolor: "white",
    },
    {
      title: "HRInsight",
      img_path: "project-02.png",
      description:
        "A dashboard built to analyze the performance of employees in an organization",
      tags: [
        {
          lang: "internal project",
          color: "red",
        },
        {
          lang: "youtube v3 api",
          color: "red",
        },
      ],
      link: "",
      code: "https://github.com/waleedgul92/HR-Analytics-Dashboard-in-Power-Bi",
      linkcolor: "white",
    },

    {
      title: "RevenueLensr",
      img_path: "news.gif",
      description:
        "a dashboard to analyze the revenue of a company and predict the future revenue",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newspaper3k",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "nltk",
          color: "#051c61",
        },
      ],
      link: "https://newsearcher.herokuapp.com/",
      code:
        "https://github.com/waleedgul92/Bazar-Casestudy-Dashboard-in-Power-Bi",
      linkcolor: "white",
    },
    {
      title: "Layer7Defence",
      img_path: "acti.gif",
      description:
        "Built a ml model to predict the attack and attack type based on network packets",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
      code: "https://github.com/waleedgul92/Layer7Defend",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Analyst Intern",
        subtitle: "Global Shala",
        date: "June 2022 - July 2022",
        content: [
          "Global Shala decided to discontinue some of theirs campaigns.",
          "We visualized the data and recommended to dicontinue 2 ineffective campaign.",
          "We strengthened campaign by cutting 18 percent cost on campaign that were less effective and focus on effective ones",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Computer Science",
          subtitle:
            "National University of Computer and Emerging Science, Karachi",
          date: "2020 - 2024",
          content: [],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle:
            "Khawaja Fareed Government College. College, Rahim Yar khan",
          date: "2016 - 2020",
          content: [],
        },
      ],
    },
    // {
    //   title: ["Ranks and Achivements"],
    //   data: [
    //     {
    //       title: "Ranks",
    //       content: [
    //         "#135/854 in Summer Analytics Kaggle Competition by IITG",
    //         "#113/5064 in CV-NLP Hackathon by HackerEarth",
    //       ],
    //     },
    //     {
    //       title: "Achievements",
    //       content: [
    //         "Designing Team Head at ACM-VIT",
    //         "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
    //         "Tableau Analyst & Consumer Badge by Tableau Official",
    //       ],
    //     },
    //   ],
    // },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Data Science & Web Development",
          // subtitle: "kidsworldeducationconsultants.com",
          content: [
            "Developed AI models for prediction and Deployed them on AWS",
          ],
        },
        // {
        //   title: "Portfolio Website",
        //   subtitle: "pranavphulware.netlify.app",
        //   content: [
        //     "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
        //   ],
        // },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Introduction to Data Science-Specialization",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/ad89f0259a322a405d740f7cf99139b5",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Data Science-Specialization",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/a54ab35b893b98437d0a27800ff2ab2d",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Data Analytics-Specialization",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/fd14aa662860318468680779424d03fc",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Applied Data Science-Specialization",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/3b9f1dd069ef35fb52fa80508c00340f",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Machine Learning-Specialization",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/31c5e8a2a5e3e4943c1a0a53b86a9a3c",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Advanced Data Analytics-Specialization",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/d201277d1be8e322eff1a3e7b1ad6111",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI and Data science.",
  },
  addressSection: {
    // title: "Address",
    // subtitle: "Prabhadevi, Mumbai-400025",
  },
  phoneSection: {
    // title: "Phone Number",
    // subtitle: "+91 9022817659",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/waleedgul92",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/waleedgul92/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/c/rohanalytics",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:hwaleed0035@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/soberohan/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
