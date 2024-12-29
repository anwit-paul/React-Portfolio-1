import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With over 3 years of hands-on experience, I have honed my skills in React as well as other front-end technologies like Next.js and their supporting libraries. Have worked with back-end technologies as well like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Digital Specialist Engineer",
    company: "Northwestern Mutual(DIBC) - Infosys",
    description: `Led a team in developing and maintaining web applications using React. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Jest", "Redux-thunk"],
  },
  {
    year: "2022 - 2023",
    role: "Digital Specialist Engineer",
    company: "Northwestern Mutual(LTC) - Infosys",
    description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "Cypress", "React Query", "Redux"],
  },
  {
    year: "2021 - 2022",
    role: "Digital Specialist Engineer",
    company: "Pfizer Pharmaceuticals - Infosys",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Javascript", "Node.js", "React.js", "Cypress", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart along with user authentication and payments.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Hybrid Encryption and file conversion",
    image: project4,
    description:
      "A platform for creating or uploading files which will be encrypted and downloaded in your system.",
    technologies: ["C++", "HTML", "CSS", "React.js", "Express", "MongoDB", "Firebase"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Next.Js", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwindcss"],
  }
];

export const CONTACT = {
  addressLine1: "404, Sagduru CHS, Plot-20, Sec-19",
  addressLine2: "Kharghar, Navi Mumbai, 410210",
  addressLine3: "Maharashtra, India",
  phoneNo: "+91 84519 73961",
  email: "paul.anwit@gmail.com",
};
