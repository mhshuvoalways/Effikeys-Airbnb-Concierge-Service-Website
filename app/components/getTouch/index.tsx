import LocationIcon from "@/public/icons/location2.svg";
import EmailIcon from "@/public/icons/socials/email2.svg";
import FbIcon from "@/public/icons/socials/fb.svg";
import InstaIcon from "@/public/icons/socials/insta.svg";
import LinkedInIcon from "@/public/icons/socials/linkedin.svg";
import PhoneIcon from "@/public/icons/socials/phone.svg";
import TwitterIcon from "@/public/icons/socials/twitter.svg";
import RoomImage from "@/public/images/room.png";
import Image from "next/image";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="myContainer flex flex-wrap lg:flex-nowrap justify-between items-center gap-x-[100px] gap-y-5 mt-[120px]">
      <div className="w-full lg:w-6/12">
        <div>
          <p className="font-semibold text-2xl sm:text-[40px] mt-[14px] leading-[56px]">
            Get In Touch
          </p>
          <p className="leading-[26px] mt-7 text-gray tracking-wider">
            If you have any questions or comments, please send us a message
            using the contact form.
          </p>
        </div>
        <div className="mt-[34px] space-y-[10px]">
          <div className="py-3 px-6 border-[0.5px] border-opacity-40 border-primary flex items-center gap-x-[22px]">
            <Image src={PhoneIcon} alt="" />
            <div>
              <p className="text-gray">Phone number</p>
              <p className="font-semibold text-lg xl:text-xl">07.67.73.28.71</p>
            </div>
          </div>
          <div className="py-3 px-6 border-[0.5px] border-primary flex items-center gap-x-[22px] rounded">
            <Image src={EmailIcon} alt="" />
            <div>
              <p className="text-gray">Email address</p>
              <p className="font-semibold text-lg xl:text-xl">
                contact@simplyhome.fr
              </p>
            </div>
          </div>
          <div className="py-7 px-6 border-[0.5px] border-primary flex items-center gap-x-[22px] rounded">
            <Image src={LocationIcon} alt="" />
            <div>
              <p className="text-gray">Address</p>
              <p className="font-semibold text-lg xl:text-xl">
                336 Jiehn Route, West Nws, Tennessee, 11239
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-8">
          <Image src={FbIcon} alt="" />
          <Image src={InstaIcon} alt="" />
          <Image src={TwitterIcon} alt="" />
          <Image src={LinkedInIcon} alt="" />
        </div>
      </div>
      <Image src={RoomImage} alt="" className="w-full lg:w-6/12 mx-auto" />
    </div>
  );
};

export default index;
