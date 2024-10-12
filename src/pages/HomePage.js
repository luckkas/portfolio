import { NavBar } from '../components/NavBar'


/**
 * @returns { HTMLDivElement }
 */
export function HomePage() {
  const home = document.createElement('div')
  home.className = 'home'
  
  const navbar = NavBar()
  home.appendChild(navbar)

  const intro = document.createElement('section')
  intro.className = 'home__intro'
  intro.innerHTML = `
    <h1 class="home__title">Welcome to My Retro-Futuristic Portfolio</h1>
    <p class="home__intro-text">Full-Stack Developer with a passion for retro aesthetics.</p>
  `
  
  home.appendChild(intro)
  return home
}
