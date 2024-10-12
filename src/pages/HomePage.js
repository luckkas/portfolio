import { projects } from '../utils/data'
import { ProjectPage } from './ProjectPage'

/**
 * @returns { HTMLDivElement }
 */
export function HomePage() {
  const home = document.createElement('section')
  home.className = 'home'
  
  const intro = document.createElement('div')
  intro.className = 'home__intro'
  intro.innerHTML = `
    <h1 class="home__title">Welcome to My Retro-Futuristic Portfolio</h1>
    <p class="home__intro-text">This is where I showcase my projects and skills.</p>
  `
  home.appendChild(intro)  
  home.appendChild(ProjectPage(projects.filter((p) => p.highlight)))
  
  
  return home
}
