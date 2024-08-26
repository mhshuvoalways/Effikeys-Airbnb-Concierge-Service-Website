import TitleDes from "@/app/components/common/titleDes";
import TypingImage from "@/public/images/typing.svg";
import Image from "next/image";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="myContainer mt-[120px] flex flex-wrap md:flex-nowrap items-center justify-between gap-[74px]">
      <div className="w-full md:w-6/12">
        <Image
          src={TypingImage}
          alt=""
          className="rounded-xl h-full object-cover"
        />
      </div>
      <div className="w-full md:w-6/12">
        <TitleDes
          title="Want to Take Action?"
          des="Using our Airbnb concierge service has many advantages for owners of short-term rental properties. Not only does this save you time and money, but it also ensures professional management and a quality experience for your tenants. Whether you are a beginner or experienced owner, our Effikeys concierge service can help you maximize your income while minimizing your efforts. So why not give it a try and see the difference for yourself?"
        />
      </div>
    </div>
  );
};

export default index;
