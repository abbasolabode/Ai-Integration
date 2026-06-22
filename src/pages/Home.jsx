import AboutCompanyCards from "../ui/AboutCompanyCards";
import AdaptationProjectSection from "../ui/AdaptationProjectSection";
import ConstructionPortfolio from "../ui/ConstructionPortfolio";
import ConstructionServiceCards from "../ui/ConstructionServiceCards";
import EnquiryForSolutions from "../ui/EnquiryForSolutions";
import HomeHeroSection from "../ui/HomeHeroSection";
import OurApproach from "../ui/OurApproach";
import WhyBuildPro from "../ui/WhyBuildPro";
import WhatBuildProDelivers from "../ui/WhatBuildProDelivers";
import FeaturedProjects from "../ui/FeaturedProjects";
import HomeBlog from "../ui/HomeBlog";
import GetInTouch from "../ui/GetInTouch";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HomeHeroSection />
      <AboutCompanyCards />
      <ConstructionServiceCards />
      <ConstructionPortfolio />
      <EnquiryForSolutions />
      <OurApproach />
      <AdaptationProjectSection />
      <WhyBuildPro />
      <WhatBuildProDelivers />
      <FeaturedProjects />
      <HomeBlog />
      <GetInTouch />
    </div>
  )
}
