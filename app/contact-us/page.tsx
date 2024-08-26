import Footer from "@/app/components/common/footer";
import MainHeader from "@/app/components/common/header/MainHeader";
import TopHeader from "@/app/components/common/header/TopHeader";
import Hero from "@/app/components/common/hero/Hero2";
import ContactForm from "@/app/components/contactForm";
import GetInTouch from "@/app/components/getTouch";
import HeroImage from "@/public/images/hero/contact.png";

interface Props {}

const page: React.FC<Props> = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <Hero
        topMsg="Connect with us for more info"
        imageBg={HeroImage}
        title="Contact Us"
      />
      <GetInTouch />
      <ContactForm />
      <Footer />
    </>
  );
};

export default page;
