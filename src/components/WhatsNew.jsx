import thumbnail1 from "../assets/images/thumbnail-1.png";
import cardIconRed from "../assets/icons/card-icon--red.png";
import cardIcon from "../assets/icons/card-icon.svg";

const WhatsNew = () => {
  return (
    <section className="whats-hot">
      <figure className="card">
        <img src={thumbnail1} alt="" className="card__thumbnail" />
        <img src={cardIcon} alt="" className="card__icon" />

        <div className="card__content">
          <img src={cardIconRed} alt="" className="card__red" />
          <h6 className="card__name">Reo Cragun</h6>
          <p className="card__type">gems</p>
          <p className="card__title">Framework</p>
          <p className="card__rate">2.25</p>
          <button className="btn-card">Buy</button>
        </div>
      </figure>

      <figure className="card">
        <img src={thumbnail1} alt="" className="card__thumbnail" />
        <img src={cardIcon} alt="" className="card__icon" />

        <div className="card__content">
          <img src={cardIconRed} alt="" className="card__red" />
          <h6 className="card__name">Reo Cragun</h6>
          <p className="card__type">gems</p>
          <p className="card__title">Framework</p>
          <p className="card__rate">2.25</p>
          <button className="btn-card">Buy</button>
        </div>
      </figure>

      <figure className="card">
        <img src={thumbnail1} alt="" className="card__thumbnail" />
        <img src={cardIcon} alt="" className="card__icon" />

        <div className="card__content">
          <img src={cardIconRed} alt="" className="card__red" />
          <h6 className="card__name">Reo Cragun</h6>
          <p className="card__type">gems</p>
          <p className="card__title">Framework</p>
          <p className="card__rate">2.25</p>
          <button className="btn-card">Buy</button>
        </div>
      </figure>
      <figure className="card">
        <img src={thumbnail1} alt="" className="card__thumbnail" />
        <img src={cardIcon} alt="" className="card__icon" />

        <div className="card__content">
          <img src={cardIconRed} alt="" className="card__red" />
          <h6 className="card__name">Reo Cragun</h6>
          <p className="card__type">gems</p>
          <p className="card__title">Framework</p>
          <p className="card__rate">2.25</p>
          <button className="btn-card">Buy</button>
        </div>
      </figure>
      <figure className="card">
        <img src={thumbnail1} alt="" className="card__thumbnail" />
        <img src={cardIcon} alt="" className="card__icon" />

        <div className="card__content">
          <img src={cardIconRed} alt="" className="card__red" />
          <h6 className="card__name">Reo Cragun</h6>
          <p className="card__type">gems</p>
          <p className="card__title">Framework</p>
          <p className="card__rate">2.25</p>
          <button className="btn-card">Buy</button>
        </div>
      </figure>
    </section>
  );
};

export default WhatsNew;
