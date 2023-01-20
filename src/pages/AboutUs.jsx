import logo from "../assets/small-img/logo-full-light.png";
import branch2 from "../assets/orgnized/safsaf2.jpg";
import branch3 from "../assets/orgnized/safsaf3.jpg";
import branch4 from "../assets/orgnized/safsaf4.jpg";

const AboutUs = () => {
  return (
    <main className="z">
      <section className="z__section special">
        <img src={branch4} alt="" className="z__section--img" />

        <div className="z__section--box ">
          <h4 className="heading-4">old is gold</h4>
          <h2 className="heading-2">1981.FlRST LOCAL</h2>
          <p className="z__section--text">
            Lceem ipsum sit y-net. ccns«teur •dipiscing elit sed eius mcd
            ir.:ididur-c Lahore et magna aliqua, ad min im cmsequat. DIB Nte ure
            dor repreh.
          </p>
          <p className="z__section--text">
            Excepteur "nt ott&ecat CLOidatat non Swit in qo deserunt amm est
            labarum. Sed ut Inde omnis iste.
          </p>
        </div>
      </section>

      <section className="z__section r">
        <img src={branch2} alt="" className="z__section--img r" />

        <div className="z__section--box r">
          <h4 className="heading-4 r">old is gold</h4>
          <h2 className="heading-2 r">1990. Italian Gelato</h2>
          <p className="z__section--text r">
            terr.por ut Lsbcee et alqu& erym ad min im quis nostrud ul•mco
            labor*' ut aliqu•p ex. in aJpa eSt
          </p>
        </div>
      </section>

      <section className="z__section">
        <img src={branch3} alt="" className="z__section--img" />

        <div className="z__section--box">
          <h4 className="heading-4">old is gold</h4>
          <h2 className="heading-2">2005. New Saf Saf</h2>
          <p className="z__section--text">
            AWARDS ur. in ure ure in ure in ure in Ouis in epreherdent n Duis in
            Duis eve in Duis atÄe in epreherdeit n Duis we in epreherdent
          </p>

        </div>
      </section>
      
      <section className="z__section r">
        <img src={branch2} alt="" className="z__section--img r" />

        <div className="z__section--box r">
          <h4 className="heading-4 r">old is gold</h4>
          <h2 className="heading-2 r">1990. Italian Gelato</h2>
          <p className="z__section--text r">
            terr.por ut Lsbcee et alqu& erym ad min im quis nostrud ul•mco
            labor*' ut aliqu•p ex. in aJpa eSt
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
