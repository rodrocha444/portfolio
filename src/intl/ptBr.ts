interface PtBr {
  apresentacao: {
    intro: string;
    euSou: string;
    name: string;
  };
  sobre: Array<{
    date: string;
    title: string;
    description: string;
    enterprise: string;
  }>;
  projetos: Array<{
    title: string;
    description: string;
    img: string;
    link: string;
  }>;
  links: {
    github: string;
    gitlab: string;
    linkedin: string;
    whatsapp: string;
  };
}

export const ptBr: PtBr = {
  links: {
    github: "https://github.com/rodrocha444",
    gitlab: "https://gitlab.com/rodrocha444",
    linkedin: "https://www.linkedin.com/in/f-rodrigo-rocha/",
    whatsapp: "https://wa.me/5588996850205",
  },
  apresentacao: {
    intro: "Olá, meu nome é",
    name: "Rodrigo Rocha",
    euSou: "Eu sou um desenvolvedor Full Stack",
  },
  sobre: [
    {
      date: "out de 2022 - o momento · 1 ano 9 meses",
      title: "Desenvolvedor Front-end Júnior",
      //TODO: add description
      description: "",
      enterprise: "Brainny Smart Solutions",
    },
    {
      date: "mar de 2020 - out de 2022 · 2 anos 8 meses",
      title: "Bolsista do PET – Programa de Educação Tutorial",
      //TODO: add description
      description: "",
      enterprise: "Universidade Federal do Ceará",
    },
    {
      date: "mar de 2019 - nov de 2019 · 9 meses",
      title: "Bolsista do BIA - Bolsa de Iniciação Acadêmica",
      description: `Atividades:
• Participei de projetos de criação de animações 3D para a projeção no Planetário de Sobral.
• Trabalhei em conjunto com um grupo, no qual usamos ferramentas, como o Trello, para gerenciarmos nosso fluxo de trabalho 

Conquistas:
Foi uma experiência nova, em um ambiente acolhedor e que acrescentou na minha formação acadêmica, profissional e pessoal`,
      enterprise: "Universidade Federal do Ceará",
    },
    {
      date: "jan de 2015 - dez de 2018 · 4 anos",
      title: "Serviços de informática",
      description:
        "Trabalhei em meu colégio do 9° ao terceiro ano do ensino médio na área de TI, enquanto estudava, o que foi o gatilho para que eu entrasse no mundo da tecnologia.Trabalhei em meu colégio do 9° ao terceiro ano do ensino médio na área de TI, enquanto estudava, o que foi o gatilho para que eu entrasse no mundo da tecnologia.",
      enterprise: "Colégio Morrinhense Cônego Saraiva",
    },
  ],
  projetos: [
    {
      title: "Dados dos Países",
      description:
        "É um projeto no qual tive como intenção aplicar conhecimentos que adquiri nos últimos meses de estudo sobre desenvolvimento front-end. Conhecimentos antigos também foram de suma importância para a completude do projeto.",
      img: "https://user-images.githubusercontent.com/58188119/189265117-24f31500-f771-4763-9d64-5e55e4d37250.gif",
      link: "https://github.com/rodrocha444/dados-dos-paises",
    },
    {
      title: "PontoGo - Teste Prático de Seleção Dev Frontend",
      description:
        "Projeto de criação de um ambiente WEB administrativo,para o gerenciamento do sistema. Mais especificamente, para o controle de pontos de uma empresa",
      img: "https://github.com/rodrocha444/brainny-project/assets/58188119/e97bc9ac-6c56-4d44-9279-0b22eabfa8ec",
      link: "https://github.com/rodrocha444/brainny-project",
    },
  ],
};
