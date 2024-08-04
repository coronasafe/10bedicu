import { FiFacebook, FiYoutube } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-300 bg-gray-100 py-4">
            <div className="w-5/6 mx-auto flex flex-col items-center">
                {/* Container for Copyright */}
                <div className="w-full flex justify-center lg:justify-start mb-4">
                    <p className="text-sm text-gray-500">Copyright © 2021 10 Bed ICU - All Rights Reserved.</p>
                </div>
                {/* Container for Social Icons and Navigation Links */}
                <div className="text-center mb-4">
                    <div className="flex justify-center space-x-4 mb-2">
                        <a href="https://www.facebook.com/10bedICU/" aria-label="Facebook">
                            <FiFacebook size={"1.5em"} className="text-gray-600 hover:text-blue-600" />
                        </a>
                        <a href="https://x.com/10BedICU" aria-label="X">
                            <FaXTwitter size={"1.5em"} className="text-gray-600 hover:text-blue-400" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCJwsY5kpy2cWDGEL05fWMeA" aria-label="YouTube">
                            <FiYoutube size={"1.5em"} className="text-gray-600 hover:text-red-600" />
                        </a>
                    </div>

                    <ul className="flex flex-wrap justify-center space-x-4 text-gray-600">
                        <li className="hover:text-blue-500"><a href="https://10bedicu.org/">Home</a></li>
                        <li className="hover:text-blue-500"><a href="https://10bedicu.org/tech-platform">Tech Platform</a></li>
                        <li className="hover:text-blue-500"><a href="https://10bedicu.org/media">Media</a></li>
                        <li className="hover:text-blue-500"><a href="https://10bedicu.org/donate-now">Donate Now</a></li>
                        <li className="hover:text-blue-500"><a href="https://10bedicu.org/deployment">Deployment</a></li>
                        <li className="hover:text-blue-500"><a href="https://10bedicu.org/our-team">Our Team</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;