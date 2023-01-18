import fanIcon from "../../assets/icons/music-headfone.svg";
import artistIcon from "../../assets/icons/music.svg";

const ThirdProgress = () => {
  
  const headingTwo = "Enter Your code";

  const textTwo = "Please fill in the below information to start buying, selling and collecting NFTs on Finay.";

  return (
    <><h2 className="heading-3 right__header">{headingTwo}</h2>
    <p className="right__text">{textTwo} </p>
    <h3 className="right__sub-title">Tell us a bit about you</h3>
    <div className="wrapper">
     <input type="text" />
     <input type="text" /> 
     <input type="text" />
     <input type="text" />
      </div>
    <p className="right__resend">Didn’t receive code? <span>Resend</span></p>
    </>
  )
}

export default ThirdProgress