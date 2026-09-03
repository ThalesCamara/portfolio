export const portfolio = {
  personal: {
    name: "Thales Duque Câmara",
    role: "Estudante de Ciência da Computação",
    description:
      "Desenvolvedor apaixonado por tecnologia, com foco em desenvolvimento de software, backend e inteligência artificial.",
    location: "Belo Horizonte, Brasil",
    email: "thalesdcamara@gmail.com",
    github: "https://github.com/ThalesCamara",
    linkedin: "https://www.linkedin.com/in/thales-duque/",
  },

  about: {
    text: "Sou estudante de Ciência da Computação na PUC Minas e tenho interesse em desenvolvimento de software, especialmente backend, inteligência artificial e arquitetura de sistemas. Busco constantemente transformar conhecimento acadêmico em projetos práticos e continuar evoluindo como desenvolvedor.",
  },

  education: {
    institution: "PUC Minas",
    course: "Ciência da Computação",
    period: "2025 - 2028",
    description:
      "Graduação em Ciência da Computação, com formação em programação, algoritmos, estruturas de dados, engenharia de software, bancos de dados e inteligência artificial.",
  },

  skills: {
    languages: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "C",
      "C++",
      "SQL",
    ],

    backend: [
      "Java",
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "Maven",
    ],

    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],

    database: [
      "PostgreSQL",
      "SQL",
      "JSON",
    ],

    aiAgents: ["Claude Code", "Gemini", "Codex"],
  },

  projects: [
    {
      title: "CineMatch",
      description:
        "Aplicação full stack para explorar filmes e gerenciar favoritos, com login de usuários, API REST em Java e persistência de dados no PostgreSQL.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "JavaScript",
      ],
      github: "https://github.com/ThalesCamara/catalogo-de-filmes",
    },

    {
      title: "SafeStadium",
      description:
        "Sistema acadêmico para gestão de segurança em estádios, com controle de usuários, eventos, movimentações, incidentes e identificação por inteligência artificial.",
      technologies: [
        "Java 21",
        "SparkJava",
        "PostgreSQL",
        "Supabase",
        "JavaScript",
        "Clarifai",
      ],
      github: "#",
      isPrivate: true,
    },

    {
      title: "Portfólio Pessoal",
      description:
        "Landing page responsiva desenvolvida para apresentar minha trajetória, habilidades e projetos, com interface dark, animações suaves e conteúdo organizado em componentes reutilizáveis.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/ThalesCamara/portfolio",
    },
  ],

  academicRepositories: [
    {
      title: "Algoritmos e Estruturas de Dados II",
      description:
        "Repositório dedicado aos laboratórios, trabalhos práticos e estudos da disciplina, com foco em Java e na implementação de algoritmos de ordenação, pesquisa e estruturas de dados.",
      topics: [
        "Java",
        "Ordenação",
        "Pesquisa",
        "Recursão",
        "Árvores",
        "Estruturas de Dados",
      ],
      github: "https://github.com/ThalesCamara/aeds2",
    },
  ],

  certifications: [
    {
      title: "Cambridge English",
      description: "Certificação de proficiência em inglês — nível C2.",
    },
    {
      title: "TOEFL",
      description: "Pontuação: 98.",
    },
  ],
};
