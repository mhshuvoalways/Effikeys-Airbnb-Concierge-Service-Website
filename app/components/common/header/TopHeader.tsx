import ClockIcon from "@/public/icons/clock.svg";
import EmailIcon from "@/public/icons/socials/email.svg";
import WhatsAppIcon from "@/public/icons/socials/whatsapp.svg";
import Image from "next/image";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className="bg-black pt-[7px] pb-[9px] text-white">
      <div className="myContainer flex flex-wrap items-center justify-between gap-3 text-[14px]">
        <div className="flex flex-wrap items-center gap-y-3 gap-x-[22px]">
          <div className="flex items-center gap-x-3">
            <Image src={ClockIcon} alt="" />
            <p className="">Mon - Sat 9am - 7pm Service Hours 24/7</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image src={EmailIcon} alt="" />
            <p>contact@simplyhome.fr</p>
          </div>
        </div>
        <div className="flex items-center gap-x-3 font-medium">
          <Image src={WhatsAppIcon} alt="" />
          <p>07.67.73.28.71</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
