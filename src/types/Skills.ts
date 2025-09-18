
export type SkillCategory = 
  | 'Languages'
  | 'Frameworks'
  | 'Methodologies'
  | 'Tools'
  | 'Testing'

export interface Skill {
  name: string;
}

export interface EditorializedSkill extends Skill{
  categories: Array<SkillCategory>;
  expanded?: Array<Skill>
}