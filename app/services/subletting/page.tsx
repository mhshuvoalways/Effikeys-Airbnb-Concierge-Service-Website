import Footer from "@/app/components/common/footer";
import MainHeader from "@/app/components/common/header/MainHeader";
import TopHeader from "@/app/components/common/header/TopHeader";
import Hero from "@/app/components/common/hero/Hero2";
import ItWorks from "@/app/components/itWorks";
import NeedService from "@/app/components/needService";
import BgImage from "@/public/images/hero/subletting.png";

interface Props {}

const page: React.FC<Props> = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <Hero
        topMsg="Our Services"
        imageBg={BgImage}
        title="Subletting"
        subTitle="Your Effikeys concierge service becomes your only tenant and you receive an increased rent"
      />
      <ItWorks />
      <NeedService />
      <Footer />
    </>
  );
};

export default page;
