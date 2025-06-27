import arkhon from "$lib/assets/arkhon_thumb.jpeg";
import nero from "$lib/assets/nero_thumb.jpeg";
import beam from "$lib/assets/beam_thumb.png";
import padaria from "$lib/assets/padaria_thumb.jpeg";
import task from "$lib/assets/task_thumb.jpeg";
import deskfolio from "$lib/assets/deskfolio_thumb.jpeg";
import type { calType } from "$lib/utils/types/card";
import type { Projects } from "../types/project";

export const projects: Projects = [
  {
    title: "Arkhon",
    description:
      "A Arkhon foi um projeto desenvolvido pela Swibly como um Trabalho de Conclusão de Curso para a ETEC. Esta plataforma consistia na criação de plantas arquitetônicas de maneira digital, sendo possível criar e compartilhar plantas com outros usuários da comunidade. ",
    languages: [
      { language: "Svelte", icon: "skill-icons:svelte" },
      { language: "TailwindCSS", icon: "skill-icons:tailwindcss-dark" },
      { language: "TypeScript", icon: "skill-icons:typescript" },
      { language: "FabricJS", icon: "material-icon-theme:json" },
    ],
    status: { text: "Finalizado", icon: "icon-park-solid:correct" },
    link: "https://github.com/swibly/arkhon",
    image: {
      url: arkhon,
      cal: [
        { x1: 2, x2: 50 },
        { y1: 2, y2: 35 },
      ] as calType,
    },
  },
  {
    title: "Nero",
    description:
      "O Nero é um aplicativo simples de captura de fotos, projetado para fornecer uma experiência intuitiva e rápida ao usuário. Ele permite que o usuário tire fotos de forma fácil e apresente informações essenciais como localização, data e hora da captura.",
    languages: [
      { language: "JavaScript", icon: "skill-icons:javascript" },
      { language: "CSS", icon: "skill-icons:css" },
      { language: "Expo", icon: "simple-icons:expo" },
      { language: "React-Native", icon: "tabler:brand-react-native" },
    ],
    status: { text: "Finalizado", icon: "icon-park-solid:correct" },
    link: "https://github.com/Fantta8820/Nero",
    image: {
      url: nero,
      cal: [
        { x1: 2, x2: 50 },
        { y1: 2, y2: 20 },
      ] as calType,
    },
  },
  {
    title: "deskFolio",
    description:
      "O deskFolio é uma mistura de um projeto pessoal e um portfolio. O projeto é uma réplica de um sistema operacional, sendo possível mover, fechar e abrir diferentes janelas. O escopo original do projeto incluia colocar funcionalidades/janelas como calculadora e bloco de notas.",
    languages: [
      { language: "TailwindCSS", icon: "skill-icons:tailwindcss-dark" },
      { language: "JavaScript", icon: "skill-icons:javascript" },
      { language: "TypeScript", icon: "skill-icons:typescript" },
      { language: "React", icon: "skill-icons:react-light" },
    ],
    status: { text: "Pendente", icon: "streamline:signal-loading-remix" },
    link: "https://github.com/Fantta8820/deskFolio",
    image: {
      url: deskfolio,
      cal: [
        { x1: 2, x2: 50 },
        { y1: 2, y2: 40 },
      ] as calType,
    },
  },
  {
    title: "React Task",
    description:
      "React Task é um pequeno projeto feito para entender os conceitos básicos e principais do React. Este projeto é um simples gerenciador de tarefas, sendo possível adicionar, excluir e marcar como concluídas as tarefas adicionadas pelo usuário.",
    languages: [
      { language: "TailwindCSS", icon: "skill-icons:tailwindcss-dark" },
      { language: "JavaScript", icon: "skill-icons:javascript" },
      { language: "React", icon: "skill-icons:react-light" },
    ],
    status: { text: "Finalizado", icon: "icon-park-solid:correct" },
    link: "https://github.com/Fantta8820/React_Task",
    image: {
      url: task,
      cal: [
        { x1: 2, x2: 50 },
        { y1: 2, y2: 25 },
      ] as calType,
    },
  },
  {
    title: "Beam",
    description:
      "Beam é um aplicativo de conversas simples e intuitivo, projetado para conectar pessoas de forma rápida e eficiente. Oferece troca de mensagens em tempo real e uma interface minimalista que prioriza a facilidade de uso. Ideal para quem busca comunicação prática sem distrações.",
    languages: [
      { language: "JavaScript", icon: "skill-icons:javascript" },
      { language: "CSS", icon: "skill-icons:css" },
      { language: "Expo", icon: "simple-icons:expo" },
      { language: "React-Native", icon: "tabler:brand-react-native" },
      { language: "Firebase", icon: "logos:firebase" },
    ],
    status: { text: "Finalizado", icon: "icon-park-solid:correct" },
    link: "https://github.com/Fantta8820/Beam",
    image: {
      url: beam,
      cal: [
        { x1: 2, x2: 50 },
        { y1: 2, y2: 15 },
      ] as calType,
    },
  },
  {
    title: "Padaria AE",
    description:
      "A Padaria AE é um protótipo simples de uma padaria online feito através de HTML, CSS e JavaScript puro. O site conta com uma ferramenta de cálculo de produtos no qual possibilita os usuários a terem uma noção do preço final de suas compras antes de realizá-las.",
    languages: [
      { language: "HTML", icon: "skill-icons:html" },
      { language: "CSS", icon: "skill-icons:css" },
      { language: "JavaScript", icon: "skill-icons:javascript" },
    ],
    status: { text: "Finalizado", icon: "icon-park-solid:correct" },
    link: "https://github.com/Fantta8820/Padaria",
    image: {
      url: padaria,
      cal: [
        { x1: 2, x2: 50 },
        { y1: 2, y2: 35 },
      ] as calType,
    },
  },
];
