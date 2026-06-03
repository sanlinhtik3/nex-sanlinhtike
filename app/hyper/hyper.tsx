import ProfileSide from "./profileSide";
import AboutSection from "./sections/AboutSection";
import ResumeSection from "./sections/ResumeSection";
import IntroSection from "./sections/IntroSection";
import ServicesSection from "./sections/ServicesSection";
import SkillsSection from "./sections/SkillsSection";
import DesignPackageSection from "./sections/DesignPackageSection";

export default function Hyper() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-black dark:text-slate-50">
      <div className="mx-auto w-full max-w-[1600px] space-y-24 px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
        <IntroSection />

        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
          <div>
            <ProfileSide />
          </div>

          <div className="mx-auto w-full min-w-0 space-y-24 overflow-hidden lg:space-y-36">
            <AboutSection />
            <ResumeSection />
            <ServicesSection />
            <SkillsSection />
            <DesignPackageSection />
            <div className="h-20"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
