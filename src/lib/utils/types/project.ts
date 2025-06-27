import type { calType, languages } from "./card";

export type Project = {
  title: string;
  description: string;
  languages: languages[];
  status: {
    text: string;
    icon: string;
  };
  link: string;
  image: {
    url: string;
    cal: calType;
  };
};

export type Projects = Project[];