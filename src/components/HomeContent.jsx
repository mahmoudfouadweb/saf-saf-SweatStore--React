import heroImg from "../assets/images/hero-images.png";

import heroBackground from "../assets/images/main-background-dark.png";
import discoverImg from "../assets/icons/discover-Img.png";
import qrcode from "../assets/images/download-qrcode.png";
import phone from "../assets/images/download-phone.png";
import artist1 from "../assets/images/artist-img-1.png";
import apple from "../assets/icons/apple-icon.png";
import google from "../assets/icons/google-play-icon.png";
import WhatsNew from "./WhatsNew";

const HomeContent = () => {
  return (
    <main className="home-content">
      <section className="hero">
        <img src={heroBackground} alt="" className="hero__background" />
        <h1 className="heading-1">
          All the best music NFT on <span>Finay</span>
        </h1>
        <p className="hero__text">
          Create or explore the best music NFT from your favorite artists.
        </p>
        <button className="btn btn-primary">Explore</button>
        <img src={heroImg} alt="" className="hero__image" />
      </section>

      <div className="discover">
        <img src={discoverImg} alt="" className="discover__img" />
        <h3 className="heading-3">
          Discover event, merch, songs at one place.
        </h3>
        <p className="discover__text">
          Now you can easily create event, merch, songs by just clicking the
          below button. You can easily promote songs in the market and win
          backstage pass.
        </p>
        <button className="btn btn-primary">Create</button>
      </div>

      <div className="home-content__title-box">
        <h4 className="heading-4">What's hot</h4>
        <p>See all</p>
      </div>

      <WhatsNew />

      <div className="home-content__title-box">
        <h4 className="heading-4">Popular collection</h4>
        <p>See all</p>
      </div>
      <WhatsNew />

      <section className="download">
        <h2 className="heading-2">
          Download the <span>Finay app,</span> track your <span>NFT</span>{" "}
          portfolio and discover drops.
        </h2>

        <div className="download__btns">
          <a href="#" className="download__link">
            <img src={apple} alt="download" className="download__btn-apple" />{" "}
            <span>App store</span>
          </a>
          <a href="#" className="download__link">
            <img src={google} alt="download" className="download__btn-google" />{" "}
            <span>Google play</span>
          </a>
        </div>

        <img src={phone} alt="download" className="download__phone" />
        <img src={qrcode} alt="download" className="download__qrcode" />
      </section>

      <div className="home-content__title-box">
        <h4 className="heading-4">Most liked</h4>
        <p>See all</p>
      </div>
      <WhatsNew />
      <div className="home-content__title-box">
        <h4 className="heading-4">Top artist</h4>
      </div>

      <div className="top-artist">
        <div className="artist-card">
          <img src={artist1} alt="artist" className="top_artist__img" />
          <span>Tylor Swift</span>
        </div>
        <div className="artist-card">
          <img src={artist1} alt="artist" className="top_artist__img" />
          <span>Tylor Swift</span>
        </div>
        <div className="artist-card">
          <img src={artist1} alt="artist" className="top_artist__img" />
          <span>Tylor Swift</span>
        </div>
        <div className="artist-card">
          <img src={artist1} alt="artist" className="top_artist__img" />
          <span>Tylor Swift</span>
        </div>
        <div className="artist-card">
          <img src={artist1} alt="artist" className="top_artist__img" />
          <span>Tylor Swift</span>
        </div>
        <div className="artist-card">
          <img src={artist1} alt="artist" className="top_artist__img" />
          <span>Tylor Swift</span>
        </div>
        <div className="artist-card">
          <img src={artist1} alt="artist" className="top_artist__img" />
          <span>Tylor Swift</span>
        </div>
        <div className="artist-card">
          <img src={artist1} alt="artist" className="top_artist__img" />
          <span>Tylor Swift</span>
        </div>
      </div>

      <div className="home-content__title-box">
        <h4 className="heading-4">Upcoming events</h4>
        <p>See all</p>
      </div>

      <section className="upcoming-events">
        <div className="upcoming-events__card">
          <img src="" alt="" className="upcoming-events__card-img" />
          <h5 className="upcoming-events__card-title">Reo Cargun</h5>
          <p className="upcoming-events__card-content">framworks</p>
          <button type="button">tommorow</button>
        </div>
        <div className="upcoming-events__card">
          <img src="" alt="" className="upcoming-events__card-img" />
          <h5 className="upcoming-events__card-title">Reo Cargun</h5>
          <p className="upcoming-events__card-content">framworks</p>
          <button type="button">tommorow</button>
        </div>
        <div className="upcoming-events__card">
          <img src="" alt="" className="upcoming-events__card-img" />
          <div className="upcoming-events-fading">
            <h5 className="upcoming-events__card-title">Reo Cargun</h5>
            <p className="upcoming-events__card-content">framworks</p>
            <button type="button">tommorow</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;
