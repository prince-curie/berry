
import LeadText from '@material-tailwind/react/LeadText';

export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        {/* <H2 color="white">Everyone stands a chance.</H2> */}
                        <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Every
            <span class="bg-clip-text mr-2 md:mr-2 text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              one Stands
            </span>
            <span className="" >
            a Chance!
            </span>
          </h1>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                            This is a truly decentralised lottery game platform where winners are truly anonymous with a game system that is fair and open for all to see
                            and at the same breath provides a pool/capital base for various lending protocols to use.
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
