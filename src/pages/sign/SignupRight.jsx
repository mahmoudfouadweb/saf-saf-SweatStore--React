import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowRightBlack from "../../assets/icons/arrow-right-black.svg";

import FirstProgress from "./FirstProgress";
import SecondProgress from "./SecondProgress";
import ThirdProgress from "./ThirdProgress";

const SignupRight = () => {


  return (
    <div className="right">
      <div className="right__progress--box">
        <span className=" done">1</span>
        <div className="bar done"></div>
        <span className="right__progress--bar active">2</span>
        <div className="bar"></div>
        <span>3</span>
      </div>

      {/* <FirstProgress /> */}
      {/* <SecondProgress /> */}
      <ThirdProgress />

      {/* <button className=" right__btn btn-primary">
        <span>Next</span>
        <img src={arrowRightBlack} alt="arrow next" />
      </button> */}
      <p className="right__login--text">
        Already have an account? <span>Login</span>
        <img src={arrowRight} alt="arrow next" />
      </p>

      <div className="copywrite">© 2022 Finay. All Rights Reserved.</div>
    </div>
  );
};

export default SignupRight;
