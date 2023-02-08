import contactUs from "../assets/orgnized/contact-us.jpg";

const ContactUs = () => {
  return (
    <section className="section">
      <img src={contactUs} alt="Contact Us" className="section__img" />
      <div className="section__box">
        <h4 className="heading-4">Saf Saf</h4>
        <h2 className="heading-2">New Saf Saf again</h2>
        <div className="section__box--contact">
          <p className="section__location">
            Next to girls secondary school, Shiben El Kowm, Egypt
          </p>
          <p className="section__email">support@safsaf.com</p>
          <p className="section__number">+20 1016525847</p>
        </div>
          <button className="cta">View More</button>
      </div>
    </section>
  );
};

export default ContactUs;
