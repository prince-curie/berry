import DefaultNavbar from '../components/DefaultNavbar';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import H5 from '@material-tailwind/react/Heading5';
import H3 from '@material-tailwind/react/Heading3';
import LeadText from '@material-tailwind/react/LeadText';
import Bag from '../assets/img/bag.png';
import DefaultFooter from '../components/DefaultFooter';
import Button from '@material-tailwind/react/Button';
import USDC from '../assets/img/USDC.png'
import USDC_SPEC from '../assets/img/usdc_spec.png'
import Algo from '../assets/img/spec_algo.png';
import StatusCard from '../components/StatusCard';
import { Link } from "react-router-dom";
import Icon from '@material-tailwind/react/Icon';

export default function NewLanding() {
    

    return (
        <main className="bg-contract" >
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>

            <div className="items-center flex space-y-16 flex-wrap">

                <div className="container max-w-8xl mt-16  mx-auto px-4">
                    <div className="flex flex-wrap items-center sm:mt-8 md:pt-16 mt-24">
                        <div className="w-full md:text-3xl  tracking-wider md:w-6/12 px-2 mx-auto">
                            <H3 className="" color="white">
                                <span className=" bg-clip-text text-transparent font-black bg-gradient-to-b from-light-color-500  to-green-500" >
                                    The Decentralized lending platform for everyone
                                </span>
                            </H3>
                            <LeadText color="white">
                               An Open financial protocol for supplying and borrow assets at autonomous interest rates
                            </LeadText>
                        </div>
                        <div className="w-full h-full md:w-4/12 px-4 mx-auto flex  justify-center mt-24 lg:mt-0">
                            <CardImage className="md:w-7/12" alt="Card Image" src={Bag} />
                        </div>
                    </div>
                </div>


                <div className="w-full  px-4 ml-auto mr-auto text-center">
                    <h1 class="my-4 tracking-wider md:text-2xl font-semibold text-white opacity-75  leading-tight text-center md:text-center">
                        OUR LIQUIDITY POOL
                    </h1>
                    <h1 className=" tracking-wider font-bold md:mb-16  md:text-4xl">
                        <span className="bg-clip-text text-transparent font-bold bg-gradient-to-b from-light-color-500  to-green-500" > $ {'15,637,488.18'} </span>
                    </h1>
                    <div className="inline-flex" >
                        <Link to="/mode/supply">
                            <Button
                                color="transparent"
                                className=" flex-1 bg-new-green py-4  ml-4 rounded-full"
                                ripple="dark"
                            >
                                <span className="text-white normal-case text-sm" >
                                    Supply
                                </span>
                            </Button>
                        </Link>

                        <Link to="/mode/borrow">
                            <Button
                                color="transparent"
                                className="flex-1 bg-new-purple py-4  ml-4 rounded-full"
                                ripple="dark"
                            >
                                <span className="text-white normal-case text-sm" >
                                    Borrow
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="container max-w-8xl mb-16 mx-auto px-4">
                    <div className="flex flex-wrap items-center sm:mt-8 md:pt-16 ">
                        <div className="w-full md:text-xl   md:w-4/12 px-2 mx-auto">
                            <H5 className="" color="white">
                                Easily lend and borrow assets
                            </H5>
                            <LeadText color="white">
                            An open financial protocol for supplying and borrowing assets at autonomous interest rates.
                            </LeadText>
                            <Link to='/lending'>
                                <span className="mt-4 text-base uppercase text-new-green" >
                                    <span className="mr-4" > see lending pool </span>

                                    <Icon
                                        family="font-awesome"
                                        name="far fa-arrow-alt-circle-right"
                                    />
                                </span>

                            </Link>
                        </div>
                        <div className="w-full h-1/3 md:w-6/12 px-4 mx-auto flex  justify-center mt-24 lg:mt-0">
                            <table className=" flex-1 items-center w-full bg-table border-collapse rounded-md">
                                <thead>
                                    <tr>
                                        <th className="px-2 text-gray-200 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                            Tokens
                                        </th>
                                        <th className="px-2 text-gray-200 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                            Available Liquidity
                                        </th>
                                        <th className="px-2 text-gray-200 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                            Supply APY
                                        </th>

                                        <th className="px-2 text-gray-200 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                            Borrow APY
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                    <tr>
                                        <th className="border-b-4  space-x-4 border-gray-800 font-light text-white text-sm text-left py-3 px-2 ">

                                            <img className="inline-block" alt="usdc" src={USDC} />
                                            <span className="inline-block text-sm" >
                                                USDC
                                            </span>
                                        </th>
                                        <th className="border-b-4 border-gray-800 align-middle font-light text-white text-sm whitespace-nowrap px-2 text-left">
                                            $2,200
                                        </th>
                                        <th className="border-b-4 border-gray-800 align-middle font-light text-white text-sm whitespace-nowrap px-2 text-left">
                                            <span className="text-new-green" >
                                                5.0%
                                            </span>
                                        </th>

                                        <th className="border-b-4 border-gray-800 align-middle font-light text-sm whitespace-nowrap px-2 text-left">
                                            <span className="text-new-purple" >
                                                7.0%
                                            </span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap relative p-8 z-50">
                    <StatusCard color="red" icon="stars" title="Anonymous">
                        No need for your personal information, all you need is your digital wallet.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="Decentralized"
                    >
                        It is truly a decentralised lending platform.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Secured"
                    >
                        Your transactions and information provided are safe with our inbuilt security system.
                    </StatusCard>
                </div>

                <div className="w-1/3 md:w-1/3 ml-auto mr-auto justify-self-center flex justify-center text-center">
                   
                        <CardBody>
                            <div
                                className={`p-3 text-center text-xl inline-flex items-center border-b-0 justify-center w-1/3 h-12 mb-5 `}
                            >
                                <H5 color="white">{'Assets'}</H5>
                            </div>

                            <div className="flex-row space-x-8 justify-around" >

                                <img  className="inline-block md:w-1/5 md:h-1/5 " alt="group" src={USDC_SPEC} />
                                <img  className="inline-block md:w-1/5 md:h-1/5 " alt="eth" src={Algo} />

                            </div>
                        </CardBody>
                   
                </div>

            </div>

            <DefaultFooter />

        </main>
    )
}