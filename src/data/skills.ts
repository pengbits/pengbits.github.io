import {EditorializedSkill} from '@/types/Skills'

export const Skills:EditorializedSkill[] = [{
  name: 'React and Next.js',
  categories: ['Frameworks']
},{  
  name: 'Redux Toolkit, Zustand and Context API',
  categories: ['Frameworks']
},{
  name: 'JavaScript/ES6+/TypeScript',
  categories: ['Languages'],
},{
  name: 'HTML5, CSS3, SASS, and Tailwind',
  categories: ['Languages']
},{
  name: 'Node.js, NPM and Express',
  categories: ['Tools','Frameworks']
},{
  name: 'Figma and StoryBook',
  categories: ['Tools']
},{
  name: 'MUI, Shadcn and Chakra UI',
  categories: ['Frameworks']
},{
  name: 'RESTful and GraphQL APIs',
  categories: ['Methodologies']
},{
  name: 'Cross-Device Compatibility',
  categories: ['Methodologies']
},{
  name: 'Performance Profiling and Core Web Vitals',
  categories: ['Methodologies']
},{
  name: 'Test-Driven Development and Unit Testing',
  categories: ['Testing']
},{
  name: 'Jest, React Testing Library and Vitest',
  categories: ['Testing','Frameworks']
},{
  name: 'Babel, Webpack and Vite',
  categories: ['Tools']
},{
  name: 'Git, Github and Git Actions',
  categories: ['Tools']
}]


const {length} = Skills
const mid= Math.ceil(length /2)

export const columns = {
  a: Skills.slice(0,mid),
  b: Skills.slice(mid)
}
const SkillsData = {
  list: Skills,
  columns
}
export default SkillsData