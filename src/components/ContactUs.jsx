import contactUs from '../assets/orgnized/contact-us.jpg'

const ContactUs = () => {
  return (
    <section className='contact-us'>
      <img src={contactUs} alt="Contact Us" className="contact-us__img" />
      
      <div className="contact-us__box">
      <h4 className="heading-4">Saf Saf</h4>
      <h2 className="heading-2">New Saf Saf again</h2>
      <p className="contact__section--location">Next to girls secondary school, Shiben El Kowm, Egypt</p>
      <p className="contact__section--email">support@safsaf.com</p>
      <p className="contact__section--number">+20 1016525847</p>
      <button className="cta">More Branches</button>
      </div>
    </section>
  )
}

export default ContactUs