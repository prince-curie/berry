import H5 from '@material-tailwind/react/Heading5';
import LeadText from '@material-tailwind/react/LeadText';
import Icon from '@material-tailwind/react/Icon';
import Logo from '../assets/img/logo.png';
import CardImage from '@material-tailwind/react/CardImage';

export default function DefaultFooter() {
    return (
        <>
            <footer className="bottom-0 mt-32 w-full pt-8 pb-6">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-between lg:text-left pt-6">
                    <div className="flex gap-6 md:gap-12 md:justify-start md:mb-0 mb-8 justify-start">
                    <a
                                    href="/"
                                    className="grid place-items-center mt-4 text-gray-500  font-normal  items-center justify-center md:mt-7 align-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                   <CardImage className=" w-14 md:w-7/12 md:h-12" alt="logo" src={Logo} />
                                </a>
                                <a
                                    href="/"
                                    className="grid place-items-center text-gray-500  font-normal  items-center justify-center align-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Lending Pool</span>
                                </a>
                                <a
                                    href="/"
                                    className="grid place-items-center text-gray-500  font-normal  items-center justify-center align-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Market</span>
                                </a>
                                <a
                                    href="/"
                                    className="grid place-items-center text-gray-500  font-normal  items-center justify-center align-center "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Assets</span>
                                </a>
                                <a
                                    href="/"
                                    className="grid place-items-center text-gray-500  font-normal  items-center justify-center align-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                   <span>Berry Protocol</span>
                                </a>
                                
                            </div>

                            <div className="flex gap-6 md:gap-12 md:justify-end md:mb-0 mb-8 justify-end">
                                <a
                                    href="/"
                                    className="grid place-items-center text-gray-500  font-normal  items-center justify-center align-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Contact</span>
                                </a>
                                <a
                                    href="/"
                                    className="grid place-items-center text-gray-500  font-normal  items-center justify-center align-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>FAQ</span>
                                </a>
                                <a
                                    href="/"
                                    className="grid place-items-center text-gray-500  font-normal  items-center justify-center align-center "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Community Forum</span>
                                </a>
                                <a
                                    href="/"
                                    className="grid place-items-center text-gray-500  font-normal  items-center justify-center align-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                   <span>Privacy Policy</span>
                                </a>
                                
                            </div>
                       
                    </div>
                    <hr className="my-6 border-gray-500" />
                    <div className="flex flex-wrap items-center">
                    <div className="flex gap-2 md:justify-start md:mb-0 mb-8 justify-center">
                                <a
                                    href="https://www.facebook.com/"
                                    className="grid place-items-center text-white shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-facebook-square"
                                    />
                                </a>
                                <a
                                    href="https://www.twitter.com/"
                                    className="grid place-items-center text-white shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-twitter"
                                    />
                                </a>
                               
                                <a
                                    href="https://github.com/"
                                    className="grid place-items-center text-white shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-github"
                                    />
                                </a>
                            </div>
                        <div className="w-full md:justify-end md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-700 font-medium py-1">
                                Copyright © {new Date().getFullYear()} Berry
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
