import fanIcon from "../../assets/icons/music-headfone.svg";
import artistIcon from "../../assets/icons/music.svg";
import apple from '../../assets/icons/apple-icon.png';
import google from '../../assets/icons/google-icon.png';

const SecondProgress = () => {
  const headingTwo = "Enter Your code";

  const textTwo =
    "Please fill in the below information to start buying, selling and collecting NFTs on Finay.";

  return (
    <>
      <h2 className="heading-3 right__header">{headingTwo}</h2>
      <p className="right__text">{textTwo} </p>
      <form className="right__form">
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <input type="text" placeholder="Conform Password"/>
        <button className="btn-previous btn btn-secondary ">Previous</button>
        <button className="btn-primary btn  ">Sign up</button>
      </form>
      <p className="right__continue">Or continue with</p>
      
      <div className="icon-box">
        
      <img src={google} alt="" className="social-icon--google social-icon" />
      <img src={apple} alt="" className="social-icon--apple social-icon" />
      </div>
    </>
  );
};

export default SecondProgress;
