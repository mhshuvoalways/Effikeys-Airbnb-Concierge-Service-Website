import HomeIcon from "@/public/icons/home.svg";
import CareMaintainImage from "@/public/images/knowmoreus/careMaintain.png";
import Image from "next/image";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <section className="relative">
      <Image
        src={CareMaintainImage}
        alt=""
        className="w-full h-[600px] sm:h-[486px] absolute inset-0 object-cover"
      />
      <p
        className="w-full h-[600px] sm:h-[486px] absolute inset-0"
        style={{
          background: `linear-gradient(100.72deg, rgba(0, 0, 0, 0.6) 29.29%, rgba(205, 147, 10, 0.6) 102.59%)`,
        }}
      ></p>
      <div className="flex items-center justify-center text-white w-full h-[600px] sm:h-[486px] lg:w-[927px] mx-auto text-center relative px-5">
        <div>
          <Image
            src={HomeIcon}
            alt=""
            className="bg-white size-[66px] rounded-full p-4 m-auto"
          />
          <p className="font-semibold text-3xl sm:text-[40px] mt-[30px] leading-normal sm:leading-[85px]">
            Care and Maintenance
          </p>
          <p className="mt-6 text-md text-[18px] font-light">
            A well-maintained home is essential to getting good reviews. Our
            Effikeys concierge service ensures that your property is always in
            perfect condition before the tenants arrive. We coordinate cleaning,
            maintenance and necessary repairs. This not only ensures guest
            satisfaction, but also preserves the value of your property.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-[10px] bg-primary py-3 text-white px-2">
        <p className="border w-[50px]"></p>
        <p className="tracking-widest uppercase font-medium">Know More us</p>
        <p className="border w-[50px]"></p>
      </div>
    </section>
  );
};

export default index;
