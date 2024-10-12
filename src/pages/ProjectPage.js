import { ProjectCard } from '../components/ProjectCard'


/**
  * @param {{
 *  title: string
 *  description: string
 *  link: string
 *  image: string
 *  highlight: boolean,
: string
 * }[]} projects
 * @returns { HTMLDivElement }
 */
export function ProjectPage(projects) {
    const projectSection = document.createElement('section')
    projectSection.className = 'projects'

    projects.forEach((project) => {
        const projectCard = ProjectCard(project)
        projectSection.appendChild(projectCard)
    })

    return projectSection
}