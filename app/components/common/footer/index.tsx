import LocationIcon from "@/public/icons/location1.svg";
import EmailIcon from "@/public/icons/socials/footer/email.svg";
import FbIcon from "@/public/icons/socials/footer/fb.svg";
import InstaIcon from "@/public/icons/socials/footer/insta.svg";
import PhoneIcon from "@/public/icons/socials/footer/phone.svg";
import TwitterIcon from "@/public/icons/socials/footer/twitter.svg";
import FooterLogoImage from "@/public/images/logoFooter.svg";
import Image from "next/image";
import Link from "next/link";

const menus = [
  {
    itemName: "Home",
    href: "/",
  },
  {
    itemName: "About Us",
    href: "/about-us",
  },
  {
    itemName: "Contact Us",
    href: "/contact-us",
  },
  {
    itemName: "Services",
    href: "/services/soncierge",
  },
];

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <footer className="bg-[#2B2B2B] pt-[70px] pb-[60px]">
      <div className="myContainer">
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:justify-items-center gap-10">
          <div>
            <Image src={FooterLogoImage} alt="" />
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur. Etiam dolor sagittis donec
              id cursus. Mattis fermentum risus sociis amet in. Elit maecenas
            </p>
            <div className="flex items-center gap-4 mt-5">
              <Image src={TwitterIcon} alt="" />
              <Image src={FbIcon} alt="" />
              <Image src={InstaIcon} alt="" />
            </div>
          </div>
          <div>
            <p className="font-semibold text-[20px]">Quick Links</p>
            <ul className="mt-4 space-y-2">
              {menus.map((menu) => (
                <li key={menu.itemName}>
                  <Link href={menu.href}>{menu.itemName}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[20px]">Contact us</p>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center gap-x-2">
                <Image src={EmailIcon} alt="" />
                <p>contact@simplyhome.fr</p>
              </li>
              <li className="flex items-center gap-x-2">
                <Image src={PhoneIcon} alt="" />
                <p>07.67.73.28.71</p>
              </li>
              <li className="flex items-center gap-x-2">
                <Image src={LocationIcon} alt="" />
                <p>336 Jiehn Route, West Nws, Tennessee, 11239</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white py-2 sm:py-6 px-2 sm:px-8 flex flex-wrap gap-2 justify-center sm:justify-between items-center rounded-full mt-[60px] text-sm sm:text-base">
          <p>© 2024 Effikeys. All rights reserved.</p>
          <p>Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default index;
