import AboutSection from "./About";
import SectionHeader from "@/shared/common/SectionHeader";

import { RiServiceFill } from "react-icons/ri";

const AboutPage = async () => {
  return (
    <div>
      <div className="bg-gradient-custom-light dark:bg-gradient-custom-dark flex items-center text-center justify-center py-10 px-5 flex-col space-y-5">
        <SectionHeader text="Abot Us" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          About <span className="font-bold hover:text-sk">Basic Dairy & Food Industries Ltd </span>
        </div>
        <p className="text-gray-500">Get your dream come true by our excellent need</p>
      </div>
      <div className="max-w-screen-xl mx-auto py-28 ">
        <AboutSection />
      </div>
    </div>
  );
};

export default AboutPage;
