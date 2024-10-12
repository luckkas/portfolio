
/**
 * @returns { HTMLDivElement }
 */
export function Footer() {
    const footer = document.createElement('footer')
    footer.className = 'footer'
    footer.innerHTML = `
        <p>&copy; 2024 Lucas Melo. All rights reserved.</p>
    `

    return footer   
}