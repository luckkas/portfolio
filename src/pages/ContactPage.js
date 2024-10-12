
/**
 * 
 * @returns { HTMLDivElement }
 */
export function ContactPage() {
    const contactSection = document.createElement('section')
    contactSection.className = 'contact'
  
    contactSection.innerHTML = `
      <h2 class="contact__title">Get in Touch</h2>
      <p class="contact__description">I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.</p>
      
      <form class="contact__form">
        <div class="contact__form-group">
          <label for="name" class="contact__label">Name</label>
          <input type="text" id="name" name="name" class="contact__input" required />
        </div>
        <div class="contact__form-group">
          <label for="email" class="contact__label">Email</label>
          <input type="email" id="email" name="email" class="contact__input" required />
        </div>
        <div class="contact__form-group">
          <label for="message" class="contact__label">Message</label>
          <textarea id="message" name="message" class="contact__textarea" required></textarea>
        </div>
        <button type="submit" class="contact__button">Send Message</button>
      </form>
    `
  
    return contactSection
}
  