import { ContentProps } from '../interfaces'
import AboutMe from './AboutMe'
import Qualification from './Qualification'
import Projects from './Projects'


function getContent(type: string): ContentProps {
  switch(type){
    case 'projects':
      return {title: 'Projetos', content: <Projects />}
    case 'qualification':
      return {title: 'Qualificação', content: <Qualification />}
    case 'about_me':
    default:
      return {title: 'Sobre mim', content: <AboutMe />}
      
    }
}

export default getContent;