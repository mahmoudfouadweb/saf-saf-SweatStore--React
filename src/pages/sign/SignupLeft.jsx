import logo from "../../assets/images/Logo.png";
import leftImg from "../../assets/images/left-img.png";
import circle from "../../assets/images/circle.png";
import arrowLeft from "../../assets/icons/arrow-left.png";
 
const SignupLeft = () => {
  return (
    <div className="left">
    <img src={logo} alt="" className="left--logo" />
    <img src={arrowLeft} alt="" className="left--arrow" />

    <h2 className="heading-2 left--heading">
      Get your free <span className="left--nft">nft</span>
    </h2>

    <p className="left-content">
      Get your first NFT free! Create an account and be e ntered to win one
      of 5,000 limited edition songs.
    </p>
    <img src={circle} alt="" className="left--img-circle" />
    <img src={leftImg} alt="" className="left--img-main" />
  </div>
  )
}

export default SignupLeft