import AboutGrilImage from "@/public/images/about.png";
import Image from "next/image";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="myContainer mt-[120px] flex flex-wrap md:flex-nowrap items-center justify-between gap-[84px]">
      <div className="w-full md:w-5/12">
        <Image
          src={AboutGrilImage}
          alt=""
          className="w-full rounded-xl h-full object-cover"
        />
      </div>
      <div className="w-full md:w-7/12">
        <p className="h-1 w-[100px] bg-primary"></p>
        <p className="font-semibold text-2xl sm:text-[40px] mt-[14px] leading-[56px] text-primary">
          A PROPOS
        </p>
        <p className="font-semibold text-xl sm:text-[29px] mt-[14px] leading-normal sm:leading-[43px]">
          Welcome to Effikeys, your concierge service dedicated to Airbnb
          rentals.
        </p>
        <div className="leading-[26px] mt-6 text-gray tracking-wider text-justify space-y-7">
          <p>
            Coming from the construction and property damage insurance sector, I
            developed a keen eye for detail and professional rigor. After
            gaining a few months of experience as a real estate agent, I decided
            to launch my own Airbnb concierge service, Effikeys.
          </p>
          <p>
            {`These skills, combined with my high standards and my perfectionism,
            allow me to offer a concierge service that meets the highest
            expectations. Thanks to my in-depth knowledge of travelers' needs, I
            am convinced that Effifeys will meet all your expectations.`}
          </p>
          <p>
            Entrust me with the management of your rentals, and rest assured
            that every detail will be taken care of with care, allowing you to
            maximize your income while providing an exceptional experience for
            your guests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
