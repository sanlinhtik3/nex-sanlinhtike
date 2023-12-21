import ProfileSide from "./profileSide";
import AboutSection from "./sections/AboutSection";
import ResumeSection from "./sections/ResumeSection";
import IntroSection from "./sections/IntroSection";
import ServicesSection from "./sections/ServicesSection";
import SkillsSection from "./sections/SkillsSection";
import PricingSection from "./sections/PricingSection";
import Cryptocurrency from "./sections/CryptoCurrency";

export default function Hyper() {
    return (
        <main className="bg-[#080a11]">
            <div className="grid lg:grid-cols-7 text-slate-50">
                {/* Left here */}
                <div className="lg:col-span-2 p-7">
                    <ProfileSide />
                </div>

                {/* Right here */}
                <div className="lg:col-span-5 lg:overflow-y-scroll lg:h-screen p-7 lg:max-w-4xl mx-auto space-y-60 scrollbar-hide">
                    <IntroSection />
                    <AboutSection />
                    <ResumeSection />
                    <ServicesSection />
                    <SkillsSection />
                    <Cryptocurrency />
                    <PricingSection />
                    <div className="h-20"></div>
                </div>
            </div>
        </main>
    )
}