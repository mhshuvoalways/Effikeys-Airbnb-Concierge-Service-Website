import Footer from "@/app/components/common/footer";
import MainHeader from "@/app/components/common/header/MainHeader";
import TopHeader from "@/app/components/common/header/TopHeader";
import Hero from "@/app/components/common/hero/Hero1";
import KnowMoreUs from "@/app/components/knowMoreUs";
import NeedService from "@/app/components/needService";
import QualityCustomer from "@/app/components/qualityCustomer";
import Services from "@/app/components/services";
import TakeAction from "@/app/components/takeAction";
import WhyItIs from "@/app/components/whyItIs";

interface Props {}

const page: React.FC<Props> = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <Hero />
      <WhyItIs />
      <Services />
      <QualityCustomer />
      <KnowMoreUs />
      <TakeAction />
      <NeedService />
      <Footer />
    </>
  );
};

export default page;
