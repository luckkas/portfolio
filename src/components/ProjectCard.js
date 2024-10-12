
/**
 * 
 * @param {{
 *  title: string
 *  description: string
 *  link: string
 *  image: string
 * }} project
 * @returns { HTMLDivElement }
 */
export function ProjectCard({ title, description, link, image }) {
    const card = document.createElement('div')
    card.className = 'project-card'
    card.innerHTML = `
      <img src="${image}" alt="${title}" class="project-card__image" />
      <h3 class="project-card__title">${title}</h3>
      <p class="project-card__description">${description}</p>
      <a href="${link}" class="project-card__link">
        <button class="project-card__button">View Project</button>
      </a>
    `
    return card
}
  