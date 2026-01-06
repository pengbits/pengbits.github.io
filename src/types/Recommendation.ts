export const MEDIUM_TEXT_LENGTH = 500
export type Recommendation =  {
  author: string;
  image: string;
  title: string;
  date: string;
  scope: string;
  body: string[];
  mediumText?: string;
}