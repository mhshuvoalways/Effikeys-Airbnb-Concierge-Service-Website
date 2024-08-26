import AboutUs from "@/app/components/aboutUs";
import Footer from "@/app/components/common/footer";
import MainHeader from "@/app/components/common/header/MainHeader";
import TopHeader from "@/app/components/common/header/TopHeader";
import Hero from "@/app/components/common/hero/Hero2";
import NeedService from "@/app/components/needService";
import HeroImage from "@/public/images/hero/about.png";

interface Props {}

const page: React.FC<Props> = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <Hero
        imageBg={HeroImage}
        title="A PROPOS"
        subTitle="Welcome to Effikeys, your concierge service dedicated to Airbnb
            rentals."
      />
      <AboutUs />
      <NeedService />
      <Footer />
    </>
  );
};

export default page;
