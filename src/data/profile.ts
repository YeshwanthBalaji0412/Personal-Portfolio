
export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };
  about: {
    bio: string;
    highlights: string[];
    avatar: string;
  };
  resume?: string;
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    title: string;
    description: string;
    techStack: string[];
    link: string;
    github: string;
  }[];
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
  achievements: {
    publications: {
      title: string;
      conference: string;
      year: string;
      link: string;
    }[];
    certifications: {
      title: string;
      issuer: string;
      date: string;
      link: string;
    }[];
  };
}

export const devProfile: ProfileData = {
  name: "Yeshwanth Balaji",
  role: "Software Developer",
  headline: "Building the future with code and caffeine.",
  location: "Boston, MA",
  email: "yeshwanthbalaji.dev@gmail.com",
  socials: {
    github: "https://github.com/YeshwanthBalaji0412",
    linkedin: "https://www.linkedin.com/in/yeshwanthbalaji/",
    instagram: "https://www.instagram.com/yeshu_2002/?igsh=MTVjc2xjc3I3cHNhYQ%3D%3D&utm_source=qr#",
  },
  about: {
    bio: "I’m a Software Developer with an interest in building well-structured and reliable applications. I enjoy working on backend systems, APIs, and cloud-based environments, and I like understanding how different components of a system connect and work together. I focus on building software that works well in real-world scenarios and is practical to maintain. I value clear design, steady improvement, and learning through hands-on development. Outside of work, I spend time exploring new technologies, refining personal projects, and enjoy capturing moments through photography.",
    highlights: ["Backend Systems", "Cloud & Deployment", "DevOps", "AI & Emerging Tech", "API Development"],
    avatar: "/profile.jpg",
  },
  resume: "/Yeshwanth_SDE.pdf",
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "C++", "Python", "JavaScript", "TypeScript", "HCL (Terraform)"],
    },
    {
      category: "Server-Side & Web",
      items: ["RESTful APIs", "Node.js", "Express.js", "Flask", "React", "HTML", "CSS"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (EC2, S3, RDS, CloudWatch)", "GCP", "Docker", "CI/CD Pipelines", "GitHub Actions", "Git"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "JDBC"],
    },
    {
      category: "Testing & Libraries",
      items: ["JUnit", "Pytest", "Postman", "JavaFX", "Pandas", "NumPy", "scikit-learn", "XChart"],
    }
  ],
  projects: [
    {
      title: "Cloud-Native Health Monitoring System",
      description: "A cloud-native backend system designed to monitor application health and manage operational data through secure APIs. The system focuses on reliability, scalability, and automation, with cloud infrastructure provisioned using infrastructure-as-code and a CI/CD pipeline to support continuous deployment. It simulates real-world backend service behavior, including health checks, data persistence, and production-ready deployment workflows.",
      techStack: ["Javascript", "AWS", "Docker", "CI/CD Pipelines", "GitHub Actions", "Git", "APIs", "MySQL", "Terraform"],
      link: "https://github.com/YeshwanthBalaji0412/Cloud-Native-Health-Check-API-with-Automated-AWS-Infrastructure",
      github: "https://github.com/YeshwanthBalaji0412/Cloud-Native-Health-Check-API-with-Automated-AWS-Infrastructure",
    },
    {
      title: "FinAltica",
      description: "FinAltica is a JavaFX-based personal finance manager using BST, Stack, HashMap, and MySQL to track incomes, expenses, accounts, and visualize data with charts for smarter budgeting and analysis.",
      techStack: ["JavaFX", "BST", "Stack", "HashMap", "MySQL", "Java", "JDBC", "CSS"],
      link: "https://github.com/YeshwanthBalaji0412/FinAltica",
      github: "https://github.com/YeshwanthBalaji0412/FinAltica",
    },
    {
      title: "RoomateFinder",
      description: "JavaFX-based desktop application designed to simplify the process of finding compatible roommates. The project provides a secure and user-friendly platform where users can create roommate listings, browse available postings, and apply detailed filters to find ideal living partners. Built with Java, JavaFX, and MySQL, the system combines intuitive UI design with reliable backend logic, ensuring a smooth user experience and efficient data management.",
      techStack: ["JavaFX", "Java", "MySQL", "JDBC", "CSS"],
      link: "https://github.com/YeshwanthBalaji0412/RoomateFinder",
      github: "https://github.com/YeshwanthBalaji0412/RoomateFinder",
    },
    {
      title: "Personal Portfolio",
      description: "A modern, interactive portfolio website built with Next.js and TypeScript. Features a dynamic role-switching system (Dev/AI/UX), scroll-triggered animations using Framer Motion, and a responsive design styled with Tailwind CSS.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
      link: "https://github.com/YeshwanthBalaji0412/Personal-Portfolio",
      github: "https://github.com/YeshwanthBalaji0412/Personal-Portfolio",
    }
  ],
  experience: [
    {
      company: "SmartInternz",
      role: "Data Science Intern",
      period: "May 2023 - July 2023",
      description: " Developed and trained a machine learning model (scikit-learn) to predict fuel consumption, achieving 86.5% accuracy to optimize fleet routes and reduce operational expenses",
    }
  ],
  education: [
    {
      institution: "Northeastern University, Boston",
      degree: "Master of Science in Software Enineering Systems",
      period: "August 2024 - May 2026",
    },
    {
      institution: "Vellore Institute of Technology, Chennai",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "July 2020 - May 2024",
    }
  ],
  achievements: {
    publications: [
      {
        title: "Optical Character Recognition and Analysis of Tamil Characters",
        conference: "International Journal of Microsystems and IoT",
        year: "2023",
        link: "https://zenodo.org/records/10609826"
      }
    ],
    certifications: [
      {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2023",
        link: "https://www.credly.com/badges/a874a563-40a2-46b1-9046-e0e3d137b758/linked_in_profile"
      }
    ]
  }
};

export const aiProfile: ProfileData = {
  ...devProfile,
  role: "AI Engineer",
  headline: "Engineering intelligence with Neural Networks and LLMs.",
  about: {
    ...devProfile.about,
    bio: "I am an AI enthusiast and a developer who enjoys exploring how intelligent systems can be built and integrated into real-world software. My interest in AI comes from working on practical projects and understanding how data, models, and software come together to solve problems. I’ve worked on applying AI in meaningful contexts, including projects related to healthcare such as ocular disease prediction, which strengthened my interest in using AI to support better decisions and outcomes. I’m also interested in how AI can be applied across domains like fintech, where intelligent systems can improve efficiency and reliability. As AI continues to become part of everyday software, I’m motivated to keep learning, experimenting, and growing in this space while building solutions that are useful, responsible, and impactful.",
    highlights: ["Deep Learning", "NLP", "Model Optimization"],
  },
  resume: "/Yeshwanth_Balaji_AI.pdf",
  skills: [
    {
      category: "Programming & Databases",
      items: ["Python", "Java", "SQL", "JavaScript", "Node.js", "HTML/CSS", "MySQL", "MongoDB"],
    },
    {
      category: "AI/ML Frameworks",
      items: ["TensorFlow", "Keras", "Pytorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Bedrock, S3, EC2, RDS)", "GCP", "Terraform", "Docker", "GitHub Actions", "Packer"],
    },
    {
      category: "Tools & Technologies",
      items: ["RESTful APIs", "Git", "VS Code", "Postman", "Jupyter Notebooks", "Flask", "React"],
    }
  ],
  projects: [
    {
      title: "Neural Vision",
      description: "Real-time object detection system optimized for edge devices using quantized models.",
      techStack: ["PyTorch", "OpenCV", "Raspberry Pi"],
      link: "https://github.com",
      github: "https://github.com",
    },
    {
      title: "Generative Art Engine",
      description: "A stable-diffusion based engine for generating custom artwork from text prompts.",
      techStack: ["Python", "Diffusers", "React"],
      link: "https://github.com",
      github: "https://github.com",
    },
    {
      title: "AI ChatBot",
      description: "An intelligent chatbot assistant powered by LLMs with context retention.",
      techStack: ["Python", "FastAPI", "OpenAI"],
      link: "https://github.com",
      github: "https://github.com",
    },
    {
      title: "Sentiment Analyzer",
      description: "NLP pipeline to analyze customer feedback sentiment in real-time.",
      techStack: ["BERT", "Python", "FastAPI"],
      link: "https://github.com",
      github: "https://github.com",
    }
  ],
  experience: [
    {
      company: "SmartInternz",
      role: "AI Research Intern",
      period: "May 2023 - July 2023",
      description: "Researched and implemented novel architectures for image classification tasks.",
    }
  ]
};

export const uxProfile: ProfileData = {
  ...devProfile,
  role: "UI/UX Engineer",
  headline: "Crafting intuitive digital experiences with pixel-perfect precision.",
  about: {
    ...devProfile.about,
    bio: "I believe that great software is not just about code, but about the experience it delivers. I combine technical expertise with design thinking to create interfaces that are both beautiful and functional.",
    highlights: ["User Research", "Interaction Design", "Prototyping"],
  },
  resume: "/UI_UX_Resume.pdf",
  skills: [
    {
      category: "Design Tools",
      items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    },
    {
      category: "Frontend Frameworks",
      items: ["React", "Vue.js", "Svelte", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Prototyping",
      items: ["Framer", "Principle", "ProtoPie", "Storybook"],
    },
    {
      category: "User Research",
      items: ["User Testing", "A/B Testing", "Heuristic Analysis", "Persona Development"],
    }
  ],
  projects: [
    {
      title: "E-Commerce Redesign",
      description: "A complete UX overhaul of a major e-commerce platform, resulting in a 40% increase in conversion.",
      techStack: ["Figma", "React", "User Testing"],
      link: "https://dribbble.com",
      github: "https://github.com",
    },
    {
      title: "Finance Dashboard UI",
      description: "A clean, modern dashboard for tracking personal finances with interactive data visualization.",
      techStack: ["Figma", "D3.js", "Next.js"],
      link: "https://dribbble.com",
      github: "https://github.com",
    },
    {
      title: "Design System",
      description: "A comprehensive design system for enterprise applications, ensuring consistency across products.",
      techStack: ["Storybook", "React", "TypeScript"],
      link: "https://github.com",
      github: "https://github.com",
    },
    {
      title: "Mobile Banking App",
      description: "A mobile-first banking application focused on accessibility and ease of use.",
      techStack: ["React Native", "Figma", "Expo"],
      link: "https://dribbble.com",
      github: "https://github.com",
    }
  ],
  experience: [
    {
      company: "Creative Studio",
      role: "UI/UX Designer",
      period: "Jan 2023 - May 2023",
      description: "Designed user interfaces for various client projects, focusing on usability and brand identity.",
    }
  ]
};

// Default export for backward compatibility during refactor, pointing to devProfile
export const profile = devProfile;
