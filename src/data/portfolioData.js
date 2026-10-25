export const portfolioData = {
  personal: {
    name: "Bala Devendra Reddy",
    title: "Full-Stack Developer",
    status: "Open to Full-Stack & Software Engineering Opportunities",
    bio: "Motivated and detail-oriented Full-Stack Developer with hands-on experience building scalable, secure, and user-friendly web applications using React.js, Node.js, Django, and cloud technologies.",
    longBio:
      "I am a Full-Stack Developer currently pursuing B.Tech in Information Technology at Vignan's Foundation for Science, Technology & Research. I specialize in building end-to-end web applications from responsive frontend interfaces to secure backend architectures. Proficient in REST API development, relational and NoSQL databases, and CI/CD deployment pipelines with a solid foundation in Python, JavaScript, and SQL.",
    location: "Vadlamudi, Guntur, Andhra Pradesh, India",
    email: "devendrareddy214@gmail.com",
    phone: "+91-9640372755",
    github: "https://github.com/devendrareddy214",
    linkedin: "https://www.linkedin.com/in/devendra-reddy-bala-7bb416314",
    leetcode: "https://leetcode.com/devendrareddy214",
    resumeUrl: "#",
    stats: [
      { label: "B.Tech CGPA", value: "7.01 / 10" },
      { label: "Core Projects", value: "2+" },
      { label: "Tech Stack Count", value: "14+" },
      { label: "SSC Marks", value: "584" },
    ],
  },

  skills: {
    categories: [
      {
        id: "languages",
        name: "Programming Languages",
        skills: [
          { name: "Python", level: "Proficient", icon: "Code2" },
          { name: "JavaScript", level: "Proficient", icon: "FileCode" },
          { name: "SQL", level: "Proficient", icon: "Database" },
        ],
      },
      {
        id: "frontend",
        name: "Frontend Technologies",
        skills: [
          { name: "React.js", level: "Advanced", icon: "Atom" },
          { name: "HTML5", level: "Advanced", icon: "Layout" },
          { name: "CSS3", level: "Advanced", icon: "Palette" },
          { name: "Responsive Web Design", level: "Advanced", icon: "Smartphone" },
        ],
      },
      {
        id: "backend",
        name: "Backend & Databases",
        skills: [
          { name: "Node.js", level: "Proficient", icon: "Server" },
          { name: "Express.js", level: "Proficient", icon: "Workflow" },
          { name: "Django", level: "Proficient", icon: "Globe" },
          { name: "REST APIs", level: "Advanced", icon: "Network" },
          { name: "MongoDB", level: "Proficient", icon: "Database" },
          { name: "MySQL", level: "Proficient", icon: "Table" },
          { name: "PostgreSQL", level: "Proficient", icon: "Database" },
        ],
      },
      {
        id: "cloud-devops",
        name: "Cloud & DevOps",
        skills: [
          { name: "AWS", level: "Familiar", icon: "Cloud" },
          { name: "Docker", level: "Familiar", icon: "Box" },
          { name: "CI/CD Pipelines", level: "Familiar", icon: "Workflow" },
        ],
      },
      {
        id: "tools",
        name: "Tools & Platforms",
        skills: [
          { name: "Git", level: "Proficient", icon: "GitBranch" },
          { name: "GitHub", level: "Proficient", icon: "GitBranch" },
          { name: "Version Control", level: "Proficient", icon: "Layers" },
        ],
      },
    ],
  },

  projects: [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Web Application",
      category: "Full Stack (MERN)",
      featured: true,
      period: "2023 – 2024",
      description:
        "Built a responsive, scalable e-commerce platform using React.js (frontend), Node.js/Express.js (backend), and MongoDB (database).",
      highlights: [
        "Implemented secure user authentication and authorization using JWT-based session management.",
        "Developed shopping cart functionality and integrated a third-party payment gateway for transaction processing.",
        "Designed and deployed an admin dashboard enabling real-time product and order management.",
        "Structured modular REST APIs with robust error handling and database indexing.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      githubUrl: "https://github.com/devendrareddy214",
      liveUrl: "#",
    },
    {
      id: "smart-complaint-system",
      title: "Smart Complaint Management System",
      category: "Full Stack (Django)",
      featured: true,
      period: "2024",
      description:
        "Developed a full-stack web application for issue tracking, complaint submission, and resolution management for institutional workflows.",
      highlights: [
        "Implemented role-based access control (RBAC) with secure login authentication for both end users and administrators.",
        "Integrated MySQL database to manage structured complaint data with full CRUD operations and audit logging.",
        "Designed intuitive user dashboard for real-time ticket tracking, priority escalation, and resolution status.",
      ],
      tech: ["Django", "MySQL", "Python", "HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/devendrareddy214",
      liveUrl: "#",
    },
  ],

  experience: [
    {
      role: "Project Awardee & Full-Stack Developer",
      company: "Department of Information Technology, Vignan University",
      period: "2024",
      type: "Academic Excellence",
      description:
        "Recognized by faculty and department heads for outstanding project design and implementation in full-stack web applications.",
      points: [
        "Engineered end-to-end web architectures adhering to clean code standards and scalable design patterns.",
        "Demonstrated practical implementation of relational/NoSQL schemas, REST API integrations, and secure authentication.",
        "Presented system architecture and real-time live demonstrations to academic review panels.",
      ],
    },
    {
      role: "Full-Stack Project Developer",
      company: "Independent / Academic Projects",
      period: "2023 – Present",
      type: "Project Work",
      description:
        "Designing, developing, and deploying modern web applications using MERN stack, Django, and cloud utilities.",
      points: [
        "Built scalable backend micro-services with Node.js/Express and Django with JWT security.",
        "Configured CI/CD deployment pipelines, Docker container setups, and version control workflows on GitHub.",
        "Crafted mobile-responsive, modern user interfaces using React.js and modern CSS.",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Vignan's Foundation for Science, Technology & Research",
      period: "2023 – 2027",
      score: "CGPA: 7.01 / 10.0",
      location: "Vadlamudi, Guntur, Andhra Pradesh",
      courses: [
        "Full-Stack Web Development",
        "Database Management Systems",
        "Python & JavaScript",
        "Software Engineering",
        "REST APIs & Cloud Services",
      ],
    },
    {
      degree: "Intermediate – MPC",
      institution: "Sri Chaitanya Junior College",
      period: "2021 – 2023",
      score: "Marks: 708",
      location: "Andhra Pradesh",
      courses: ["Mathematics", "Physics", "Chemistry"],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Al Qumar EM High School",
      period: "2020 – 2021",
      score: "Marks: 584",
      location: "Andhra Pradesh",
      courses: ["General Science", "Mathematics", "English", "Social Studies"],
    },
  ],

  certifications: [
    {
      title: "NPTEL Certification – Software Testing",
      issuer: "IIT / NIT Consortium (NPTEL)",
      date: "Certified",
      credentialUrl: "#",
      tags: ["Software Testing", "Quality Assurance", "Test Cases", "Verification"],
    },
    {
      title: "Python Full Stack Development Certification",
      issuer: "Professional Certification Program",
      date: "Certified",
      credentialUrl: "#",
      tags: ["Python", "Django", "Frontend", "REST APIs", "Databases"],
    },
  ],

  achievements: [
    {
      title: "Department Project Award",
      description:
        "Received Project Award from the Department of Information Technology, Vignan University – recognized for outstanding project design and implementation.",
    },
    {
      title: "Secondary School Academic Honor",
      description:
        "Secured 584 marks in SSC examinations at Al Qumar EM High School, reflecting consistent academic dedication.",
    },
    {
      title: "Full-Stack Project Deployments",
      description:
        "Successfully developed and showcased end-to-end applications across MERN (E-Commerce) and Django (Smart Complaint Management).",
    },
  ],
};