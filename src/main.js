import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import './styles/main.css'
import { projects } from './utils/data'

const app = document.getElementById('app')
app.appendChild(HomePage())
app.appendChild(ProjectPage(projects))