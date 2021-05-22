import { ContentProps } from './interfaces'
import AboutMe from './types/AboutMe'

function getContent(type: string): ContentProps {
  switch(type){
    case 'projects':
      return {title: 'Projetos', content: <div>Projetos</div>}
    case 'qualification':
      return {title: 'Qualificação', content: <div>Qualificação</div>}
    case 'about_me':
    default:
      return {title: 'Sobre mim', content: <AboutMe/>}
      
    }
}

export default getContent;