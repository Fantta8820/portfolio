  export type languages = {
    language: string;
    icon: string;
  };

  export type statusType = {
    text: string;
    icon: string;
  };

  export type calType = [
    {
      x1: number;
      x2: number;
    },
    {
      y1: number;
      y2: number;
    },
  ];

  export type imageType = {
    url: string;
    cal: calType;
  };