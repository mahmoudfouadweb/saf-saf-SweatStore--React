import branch1 from "../assets/orgnized/safsaf.jpg";

const ContactUs = () => {
  return (
    <main className="contact">
      <section className="contact__title">
        <h4 className="heading-4">new world</h4>
        <h2 className="heading-2">contact us</h2>
      </section>

      <section className="contact__about">
        <h4 className="heading-4">elegant</h4>
        <h2 className="heading-2">Saf Saf</h2>
        <p className="contact__about--text">
          معاكم من سنين ولسه مكملين صف صف من اكتر من 45 سنة وهو موجود مع اجيال
          كتير بنقدم لكم كل أنواع الحلو اللي تحبوه معاكم في كل مكان في شبين في
          .فروعنا الاربعه مستنينكم
        </p>
      </section>

      <section className="contact__section">
        <img src={branch1} alt="" className="contact__section--img" />

        <div className="contact__section--box">
          <h4 className="heading-4">old is gold</h4>
          <h2 className="heading-2">New Saf Saf</h2>
          <p className="contact__section--text">, Shiben El Kowm, Egypt</p>
          <p className="contact__section--email">support@safsaf.com</p>
          <p className="contact__section--number">+20 1016525847</p>
          <button className="cta">Contact us</button>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
