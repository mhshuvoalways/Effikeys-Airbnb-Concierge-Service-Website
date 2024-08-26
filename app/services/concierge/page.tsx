import Footer from "@/app/components/common/footer";
import MainHeader from "@/app/components/common/header/MainHeader";
import TopHeader from "@/app/components/common/header/TopHeader";
import Hero from "@/app/components/common/hero/Hero2";
import MangementServices from "@/app/components/mangementServices";
import NeedService from "@/app/components/needService";
import OurOffer from "@/app/components/ourOffer";
import TravelAndOffer from "@/app/components/travelAndOffer";
import BgImage from "@/public/images/hero/concierge.png";

interface Props {}

const page: React.FC<Props> = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <Hero
        topMsg="Our Services"
        imageBg={BgImage}
        title="Concierge"
        subTitle="The Effikeys concierge service offers you a complete service
            (management from A to Z) to allow you to generate income with
            complete peace of mind, without logistical constraints."
      />
      <MangementServices />
      <TravelAndOffer />
      <OurOffer />
      <NeedService />
      <Footer />
    </>
  );
};

export default page;
