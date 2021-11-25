import Title from './Title';
import TeamCard from './TeamCard';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Here are our heroes">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img=''
                        name="Ryan Tompson"
                        position="Web Developer"
                    />
                    <TeamCard
                        img=''
                        name="Romina Hadid"
                        position="Marketing Specialist"
                    />
                    <TeamCard
                        img=''
                        name="Alexa Smith"
                        position="UI/UX Designer"
                    />
                    <TeamCard
                        img=''
                        name="Jenna Kardi"
                        position="Founder and CEO"
                    />
                </div>
            </div>
        </section>
    );
}
