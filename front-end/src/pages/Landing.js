import DefaultNavbar from '../components/DefaultNavbar';
import Header from '../components/landing/Header';
import WorkingSection from '../components/landing/WorkingSection';
import TeamSection from '../components/landing/TeamSection';
import ContactSection from '../components/landing/ContactSection'


import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import H5 from '@material-tailwind/react/Heading5';
import H6 from '@material-tailwind/react/Heading6';
import H3 from '@material-tailwind/react/Heading3';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import Bag from '../assets/img/bag.png';
import DefaultFooter from '../components/DefaultFooter';
import Button from '@material-tailwind/react/Button';
import CardTable from '../components/table/TableCard';

export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <div className=" bg-contract relative pt-52 md:pt-0 flex content-center items-center justify-center h-screen">
                    {/* <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" /> */}

                    <div className="container max-w-8xl relative mx-auto">
                        <div className="items-center flex flex-wrap ">
                            <div className="container max-w-8xl md:mt-72 mx-auto px-4">

                                <div className="flex flex-wrap items-center sm:mt-8 md:pt-16 mt-48">
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

                        </div>
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:mt-32 px-4 ml-auto mr-auto text-center">

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


                        </div>
                        <div className="inline-flex" >
                    <div className="w-full flex-1 flex-wrap md:text-3xl  tracking-wider md:w-6/12 px-4 mx-auto">

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

                    <CardTable />
                </div>
                    </div>

                </div>
               

            </main>
            <DefaultFooter />

        </>
    );
}
