import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from './StatusCard';
import Bounty from '../../assets/img/bounty.png';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-900 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap  relative z-50">
                    <StatusCard color="red" icon="stars" title="Anonymity">
                   It will solve the problem of privacy which has plagued traditional lottery winners for decades.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="how fair is the system?"
                    >
                        It is a truly decentralised lottery game platform, You also get to form small groups and play amongst themselves.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Verified Company"
                    >
                        It still provides a capital base for various lending protocols to use which generates returns.
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        {/* <div className="text-blue-gray-800 p-2 bg-gray-900 text-center inline-flex items-center justify-center w-50 h-21 mb-6 shadow-lg rounded-full bg-white">
                            <img className="w-full h-full" src={Key}/>
                            <CardImage alt="Card Image" src={Key} />
                        </div> */}
                        <H4 color="white">Moments are the elements of profit.</H4>
                        <LeadText color="white">
                            Get to be a winner in the weekly and monthly lottery organised, and stand to win more by staking right on time.
                           You can stake with whatever amount but still, better an ounce of luck than a pound of gold.
                        </LeadText>
                        <LeadText color="white">
                        We support all ERC20 compliant tokens as well as ETH and BNB. Wins can also be instantly withdrawn into your account.
                        List of weekly wins are published, while still maintaining the anonymity of our winners.
                        </LeadText>
                       
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex  justify-center mt-24 lg:mt-0">
                        <Card className="bg-gray-700" >
                            <CardImage alt="Card Image" src={Bounty} />
                            <CardBody>
                                <H6 color="white">Top Notch Services</H6>
                                <Paragraph color="white">
                                    If you decide to compete in a pool amongst your friends. We are here for you. simply do that by sending your friends the lottery link before it times out.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
