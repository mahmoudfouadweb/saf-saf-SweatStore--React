import contactUs from '../assets/orgnized/contact-us.jpg'
import PageTitle from './PageTitle'

const ContactUs = () => {
  return (
    <section className='z__section'>
        <PageTitle title={"page"} />
      
      <img src={contactUs} alt="Contact Us" className="z__section--img" />
      
      <div className="z__section--box">
      <h4 className="heading-4">Saf Saf</h4>
      <h2 className="heading-2">New Saf Saf again</h2>
      <p className="z__section--location">Next to girls secondary school, Shiben El Kowm, Egypt</p>
      <p className="z__section--email">support@safsaf.com</p>
      <p className="z__section--number">+20 1016525847</p>
      <button className="cta">More Branches</button>
      </div>
    </section>
  )
}

export default ContactUs