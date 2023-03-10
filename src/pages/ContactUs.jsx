import branch2 from "../assets/orgnized/safsaf2.jpg";
import branch3 from "../assets/orgnized/safsaf3.jpg";
import branch4 from "../assets/orgnized/safsaf4.jpg";

import MapL from "../components/MapL";
import PageTitle from "../components/PageTitle";
import JoinForm from "../components/JoinForm";

const ContactUs = () => {
  return (
    <main className="z">
      <PageTitle title={"Contact Us"} />

      <section className="z__about">
        <h4 className="heading-4">elegant</h4>
        <h2 className="heading-2">Saf Saf</h2>
        <p className="z__about--text">
          معاكم من سنين ولسه مكملين صف صف من اكتر من 45 سنة وهو موجود مع اجيال
          كتير بنقدم لكم كل أنواع الحلو اللي تحبوه معاكم في كل مكان في شبين في
          .فروعنا الاربعه مستنينكم
        </p>
      </section>

      <section className="z__section special">
        <img src={branch4} alt="" className="z__section--img" />

        <div className="z__section--box ">
          <h4 className="heading-4">old is gold</h4>
          <h2 className="heading-2">New Saf Saf</h2>
          <p className="z__section--text">, Shiben El Kowm, Egypt</p>
          <p className="z__section--email">support@safsaf.com</p>
          <p className="z__section--number">+20 1016525847</p>
          <button className="cta">Show on map</button>
        </div>
      </section>

      <section className="z__section">
        <img src={branch2} alt="" className="z__section--img r" />

        <div className="z__section--box r">
          <h4 className="heading-4 r">old is gold</h4>
          <h2 className="heading-2 r">Italian Gelato</h2>
          <p className="z__section--text r">, Shiben El Kowm, Egypt</p>
          <p className="z__section--email r">support@safsaf.com</p>
          <p className="z__section--number r">+20 1016525847</p>
          <button className="cta r">Show on map</button>
        </div>
      </section>
      <section className="z__section">
        <img src={branch3} alt="" className="z__section--img" />

        <div className="z__section--box">
          <h4 className="heading-4">old is gold</h4>
          <h2 className="heading-2">New Saf Saf</h2>
          <p className="z__section--text">, Shiben El Kowm, Egypt</p>
          <p className="z__section--email">support@safsaf.com</p>
          <p className="z__section--number">+20 1016525847</p>
          <button className="cta">Show on map</button>
        </div>
      </section>

      <MapL />

      <section className="contact__join-us">
        <JoinForm />
      </section>
    </main>
  );
};

export default ContactUs;
