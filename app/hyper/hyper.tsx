import ProfileSide from "./profileSide";
import AboutSection from "./sections/AboutSection";
import ResumeSection from "./sections/ResumeSection";
import IntroSection from "./sections/IntroSection";
import ServicesSection from "./sections/ServicesSection";
import SkillsSection from "./sections/SkillsSection";
import PricingSection from "./sections/PricingSection";
import Cryptocurrency from "./sections/Cryptocurrency";
import DesignPackageSection from "./sections/DesignPackageSection";
import Free4U from "./sections/free4u";
import { CardHoverEffectDemo } from "../components/ui/CardHoverEffectDemo";

export default function Hyper() {
  return (
    <main className="dark:bg-black">
      <div className="grid text-slate-50 lg:grid-cols-7">
        {/* Left here */}
        <div className="p-7 lg:col-span-2">
          <ProfileSide />
        </div>

        {/* Right here */}
        <div className="scrollbar-hide mx-auto space-y-60 overflow-visible p-7 px-36 lg:col-span-5 lg:h-screen">
          <IntroSection />
          {/* <Free4U /> */}
          <AboutSection />
          <ResumeSection />
          <ServicesSection />
          <SkillsSection />
          {/* <CardHoverEffectDemo /> */}
          {/* <Cryptocurrency /> */}
          <DesignPackageSection />
          <PricingSection />
          <div className="h-20"></div>
        </div>
      </div>
    </main>
  );
}
