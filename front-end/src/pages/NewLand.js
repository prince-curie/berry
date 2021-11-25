import DefaultNavbar from '../components/DefaultNavbar';
import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import H5 from '@material-tailwind/react/Heading5';
import H6 from '@material-tailwind/react/Heading6';
import H3 from '@material-tailwind/react/Heading3';
import LeadText from '@material-tailwind/react/LeadText';
import Bag from '../assets/img/bag.png';
import DefaultFooter from '../components/DefaultFooter';
import Button from '@material-tailwind/react/Button';
import DAI from '../assets/img/Dai.png'
import ETH from '../assets/img/eth.png';
import CARDANO from '../assets/img/cardano.png';
import USDC from '../assets/img/USDC.png'
import Group from '../assets/img/Group.png';
import Flash from '../assets/img/flash.png';
import DOGE from '../assets/img/dogecoin.png';
import Tether from '../assets/img/tether.png';
import Monero from '../assets/img/monero.png';
import Ethereum from '../assets/img/etherium.png';
import StatusCard from '../components/landing/StatusCard';

export default function NewLanding() {
    return (
        <main className="bg-contract" >
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>

            <div className="items-center flex space-y-16 flex-wrap">

                <div className="container max-w-8xl mt-16  mx-auto px-4">
                    <div className="flex flex-wrap items-center sm:mt-8 md:pt-16 mt-24">
                        <div className="w-full md:text-3xl  tracking-wider md:w-6/12 px-4 mx-auto">
                            <H3 className="" color="white">
                                <span className=" bg-clip-text text-transparent font-black bg-gradient-to-b from-light-color-500  to-green-500" >
                                    The Decentralized lending platform for everyone
                                </span>
                            </H3>
                            <LeadText color="white">
                                Get to be a winner in the weekly and monthly lottery organised, and stand to win more by staking right on time.
                                You can stake with whatever amount but still, better an ounce of luck than a pound of gold.
                            </LeadText>
                        </div>
                        <div className="w-full h-64 md:w-4/12 px-4 mx-auto flex  justify-center mt-24 lg:mt-0">
                            <CardImage className="md:w-7/12" alt="Card Image" src={Bag} />
                        </div>
                    </div>
                </div>


                <div className="w-full  px-4 ml-auto mr-auto text-center">
                    <h1 class="my-4 tracking-wider md:text-4xl font-semibold text-white opacity-75  leading-tight text-center md:text-center">
                        OUR LIQUIDITY POOL
                    </h1>
                    <h1 className=" tracking-wider font-bold md:mb-16  md:text-4xl">
                        <span className="bg-clip-text text-transparent font-bold bg-gradient-to-b from-light-color-500  to-green-500" > $ {'27,745,637,488.18'} </span>
                    </h1>
                    <div className="inline-flex" >
                        <Button
                            color="transparent"
                            className=" flex-1 bg-new-green py-4  ml-4 rounded-full"
                            ripple="dark"
                        >
                            <span className="text-white normal-case text-sm" >
                                Supply
                            </span>
                        </Button>

                        <Button
                            color="transparent"
                            className="flex-1 bg-new-purple py-4  ml-4 rounded-full"
                            ripple="dark"
                        >
                            <span className="text-white normal-case text-sm" >
                                Borrow
                            </span>
                        </Button>
                    </div>
                </div>

                <div className="container max-w-8xl mb-16 mx-auto px-4">
                    <div className="flex flex-wrap items-center sm:mt-8 md:pt-16 ">
                        <div className="w-full md:text-xl   md:w-4/12 px-2 mx-auto">
                            <H5 className="" color="white">
                                Easily lend and borrow assets
                            </H5>
                            <LeadText color="white">
                                Get to be a winner in the weekly and monthly lottery organised, and stand to win more by staking right on time.
                            </LeadText>
                            <span className="mt-4 text-base uppercase text-new-green" >
                                see lending pool
                            </span>
                        </div>
                        <div className="w-full h-64 md:w-6/12 px-4 mx-auto flex  justify-center mt-24 lg:mt-0">
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
                                        <th className="border-b-4  space-x-4 border-gray-800 font-light text-white text-sm text-left px-2 ">

                                            <img className="inline-block" alt="dai" src={DAI} />
                                            <span className="inline-block text-sm" >
                                                DAI
                                            </span>
                                        </th>
                                        <th className="border-b-4 border-gray-800 align-middle font-light text-white text-sm whitespace-nowrap px-2 py-4 text-left">
                                            $2,500 USD
                                        </th>
                                        <th className="border-b-4 border-gray-800 align-middle font-light text-white text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <span className="text-new-green" >
                                                3.6%
                                            </span>
                                        </th>

                                        <th className="border-b-4 border-gray-800 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <span className="text-new-purple" >
                                                3.6%
                                            </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="border-b-4  space-x-4 border-gray-800 font-light text-white text-sm text-left px-2 ">
                                            <img className="inline-block" alt="eth" src={ETH} />
                                            <span className="inline-block text-sm" >
                                                ETH
                                            </span>
                                        </th>
                                        <th className="border-b-4 border-gray-800 align-middle font-light text-white text-sm whitespace-nowrap px-2 py-4 text-left">
                                            $1,800 USD
                                        </th>
                                        <th className="border-b-4 border-gray-800 align-middle font-light text-white text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <span className="text-new-green" >
                                                3.6%
                                            </span>
                                        </th>

                                        <th className="border-b-4 border-gray-800 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <span className="text-new-purple" >
                                                3.6%
                                            </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="border-b-4  space-x-4 border-gray-800 font-light text-white text-sm text-left px-2 ">

                                            <img className="inline-block" alt="cardano" src={CARDANO} />
                                            <span className="inline-block text-sm" >
                                                Cardano
                                            </span>
                                        </th>
                                        <th className="border-b-4 border-gray-800 align-middle font-light text-white text-sm whitespace-nowrap px-2 py-4 text-left">
                                            $4,400 USD
                                        </th>
                                        <th className="border-b-4 border-gray-800 align-middle font-light text-white text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <span className="text-new-green" >
                                                3.6%
                                            </span>
                                        </th>

                                        <th className="border-b-4 border-gray-800 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <span className="text-new-purple" >
                                                3.6%
                                            </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="border-b-4  space-x-4 border-gray-800 font-light text-white text-sm text-left px-2 ">

                                            <img className="inline-block" alt="usdc" src={USDC} />
                                            <span className="inline-block text-sm" >
                                                USD
                                            </span>
                                        </th>
                                        <th className="border-b-4 border-gray-800 align-middle font-light text-white text-sm whitespace-nowrap px-2 py-4 text-left">
                                            $2,200 USD
                                        </th>
                                        <th className="border-b-4 border-gray-800 align-middle font-light text-white text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <span className="text-new-green" >
                                                3.6%
                                            </span>
                                        </th>

                                        <th className="border-b-4 border-gray-800 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <span className="text-new-purple" >
                                                3.6%
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
                   It will solve the problem of privacy which has plagued traditional lottery winners for decades.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="Decentralized"
                    >
                        It is a truly decentralised lottery game platform, You also get to form small groups and play amongst themselves.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Secured"
                    >
                        It still provides a capital base for various lending protocols to use which generates returns.
                    </StatusCard>
                </div>

                <div className="w-full md:w-10/12 p-16 flex justify-center text-center">
            <Card className="bg-new-gray-100 py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out" >
                <CardBody>
                    <div
                        className={`p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full `}
                    >
                        <H6 color="white">{'Assets'}</H6>
                    </div>
                    
                    <div className="flex-row space-x-16 justify-around" >

                    <img className="inline-block" alt="group" src={Group} />
                    <img className="inline-block" alt="eth" src={Ethereum} />
                    <img className="inline-block" alt="flash" src={Flash} />
                    <img className="inline-block" alt="tether" src={Tether} />
                    <img className="inline-block" alt="monero" src={Monero} />
                    <img className="inline-block" alt="doger" src={DOGE} />
                    
                    </div>
                </CardBody>
            </Card>
        </div>

            </div>

            <DefaultFooter />

        </main>
    )
}