import congratulation from "../../assets/images/congratulations.png";
import arrowLeft from "../../assets/icons/arrow-left.png";

const FinalProgress = () => {
  return (
    <div className="congratulation">
      <img src={arrowLeft} alt="" className="congratulation__arrow" />
      <img src={congratulation} alt="" className="congratulation" />
      <h2 className="heading-2">congratulations!</h2>
      <p className="congratulation__text">
        Your email has been successfully verified. Now you can access all the
        features.
      </p>
      <button className="btn btn-primary">Go to dashboard</button>
      <div className="copywrite">© 2022 Finay. All Rights Reserved.</div>
    </div>
  );
};

export default FinalProgress;
