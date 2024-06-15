import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full border-t p-2">
      <div className="my-4 items-center justify-between w-full flex flex-col md:flex-row">
        <div className="">
          <ul className="flex flex-wrap justify-center space-x-4 text-gray-600">
            <li className="hover:text-blue-500">
              <a href="https://10bedicu.org/">Home</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="https://10bedicu.org/tech-platform">Tech Platform</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="https://10bedicu.org/media">Media</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="https://10bedicu.org/donate-now">Donate Now</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="https://10bedicu.org/deployment">Deployment</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="https://10bedicu.org/our-team">Our Team</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center space-x-4 pt-2 lg:justify-start lg:pt-0">
          <div>
            <a href="https://www.facebook.com/10bedICU/">
              <FiFacebook size={"1.5em"} />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/10BedICU">
              <FiTwitter size={"1.5em"} />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCJwsY5kpy2cWDGEL05fWMeA">
              <FiYoutube size={"1.5em"} />
            </a>
          </div>
        </div>
      </div>

      <div className="my-2 mb-6 lg:mt-2">
        <div className="text-center text-sm text-gray-500 lg:text-left">
          Copyright © 2021 10 Bed ICU - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
