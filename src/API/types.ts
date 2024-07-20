export interface Tutorial {
  id: number;
  title: string;
  description: string;
  level: string;
  image: string;
  payed: boolean;
  learned: boolean;
}

export interface Keyword {
  keyword_id: number;
  tutorialId: number;
  type: string;
  description: string;
  translation: string;
  keyFlag: boolean;
  audio: string;
  text: string;
  level: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  tutorials: Tutorial[];
  learnedTutorials: Tutorial[];
  favTutorials: Tutorial[];
  learnedKeywords: Keyword[];
}
