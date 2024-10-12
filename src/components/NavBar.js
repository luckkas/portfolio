
/**
 * 
 * @returns { HTMLDivElement }
 */
export function NavBar() {
  const nav = document.createElement('nav')
  nav.className = 'navbar'
  nav.innerHTML = `
      <a href="#home" class="navbar__link navbar__link--active">Home</a>
      <a href="#projects" class="navbar__link">Projects</a>
      <a href="#contact" class="navbar__link">Contact</a>
      `

  return nav
}
