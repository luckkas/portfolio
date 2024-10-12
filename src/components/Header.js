import { NavBar } from './NavBar'

/**
 * @returns { HTMLDivElement }
 */
export function Header() {
    const header = document.createElement('header')
    header.className = 'header'

    header.appendChild(NavBar())
    
    return header
}