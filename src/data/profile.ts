
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
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "Supabase", "GraphQL"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "AWS", "Vercel", "Figma"],
    },
    {
      category: "AI & Emerging Tech",
      items: ["OpenAI API", "LangChain", "Web3"],
    }
  ],
  projects: [
    {
      title: "Neon Nexus",
      description: "A futuristic dashboard for managing IoT devices using real-time websocket data.",
      techStack: ["java", "WebSockets", "D3.js"],
      link: "https://github.com",
      github: "https://github.com",
    },
    {
      title: "CyberCommerce",
      description: "Headless e-commerce platform built with high performance and accessibility in mind.",
      techStack: ["React", "Shopify API", "Tailwind"],
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
      title: "Portfolio v1",
      description: "My first personal website showcasing earlier works and design evolution.",
      techStack: ["HTML", "SCSS", "JavaScript"],
      link: "https://github.com",
      github: "https://github.com",
    }
  ],
  experience: [
    {
      company: "SmartInternz",
      role: "Data Science Intern",
      period: "May 2023 - July 2023",
      description: "Leading the frontend team to build scalable micro-frontends.",
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
    bio: "I specialize in building intelligent systems that learn and adapt. My focus ranges from training large language models to deploying efficient computer vision pipelines on edge devices.",
    highlights: ["Deep Learning", "NLP", "Model Optimization"],
  },
  skills: [
    {
      category: "Machine Learning",
      items: ["PyTorch", "TensorFlow", "Scikit-Learn", "Keras", "XGBoost"],
    },
    {
      category: "LLMs & NLP",
      items: ["Transformers", "HuggingFace", "LangChain", "LlamaIndex", "OpenAI API"],
    },
    {
      category: "Data Engineering",
      items: ["Pandas", "NumPy", "Apache Spark", "SQL", "Airflow"],
    },
    {
      category: "MLOps",
      items: ["MLflow", "Docker", "Kubernetes", "AWS SageMaker", "DVC"],
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
