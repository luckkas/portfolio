import './styles/main.css'
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { projects } from './utils/data'

const header = document.getElementById('header')
const content = document.getElementById('content')
const footer = document.getElementById('footer')

header.appendChild(Header())
footer.appendChild(Footer())

function loadPage(page) {   
    content.innerHTML = ''
    console.log(page    )
    let pageContent;
    switch (page) {
        case 'home':
            pageContent = HomePage()
            break;
        case 'projects':
            pageContent = ProjectPage(projects)
            break;
        case 'contact':
            pageContent = ContactPage()
            break;
        default:
            pageContent = HomePage()
    }

    content.appendChild(pageContent)
}

document.addEventListener('DOMContentLoaded', () => {
    loadPage('home')

    document.querySelector('.navbar').addEventListener('click', (e) => {
        e.preventDefault()
        const page = e.target.dataset.page
        loadPage(page)
    });
})