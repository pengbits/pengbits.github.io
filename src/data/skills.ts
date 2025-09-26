import {EditorializedSkill} from '@/types/Skills'

export const Skills:EditorializedSkill[] = [{
  name: 'React & Next.js',
  categories: ['Frameworks']
},{
  name: 'JavaScript/ES6+/TypeScript',
  categories: ['Languages'],
},{
  name: 'Jest, React Testing Library & Vitest',
  categories: ['Testing','Frameworks']
},{
  name: 'HTML5/CSS3/SASS',
  categories: ['Languages']
},{
  name: 'Node.js/NPM/Express',
  categories: ['Tools','Frameworks']
},{
  name: 'Figma & Sketch',
  categories: ['Tools']
},{
  name: 'RESTful API Integration',
  categories: ['Methodologies']
},{
//   name: 'Mobile-First & Responsive Design',
//   categories: ['Methodologies']
// },{
  name: 'Cross-Device Compatibility',
  categories: ['Methodologies']
},{
  name: 'Performance Profiling & Core Web Vitals',
  categories: ['Methodologies']
},{
  name: 'Test-Driven Development & Unit Testing',
  categories: ['Testing']
},{
  name: 'Babel, Webpack & Vite',
  categories: ['Tools']
},{
  name: 'Git',
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