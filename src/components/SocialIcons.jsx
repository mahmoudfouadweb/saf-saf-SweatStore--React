import { BsInstagram, BsTwitter } from "react-icons/bs"
import { FaTelegram } from "react-icons/fa"
import { ImFacebook2 } from "react-icons/im"


const SocialIcons = () => {
  return (
    <ul className="social-icons">
        <li>
          <ImFacebook2 className="icon" />
        </li>
        <li>
          <FaTelegram className="icon" />
        </li>
        <li>
          <BsInstagram className="icon" />
        </li>
        <li>
          <BsTwitter className="icon" />
        </li>
      </ul>
  )
}

export default SocialIcons