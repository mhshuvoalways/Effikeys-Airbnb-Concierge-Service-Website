import TitleDes from "@/app/components/common/titleDes";
import HomeImage from "@/public/images/home.png";
import TreeImage from "@/public/images/knowmoreus/tree.png";
import Image from "next/image";

interface Props {}

const PlaceOfMind: React.FC<Props> = () => {
  return (
    <div className="bg-[#FAF4E7] relative">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-[70px]">
        <div className="w-full md:w-6/12">
          <Image src={TreeImage} alt="" className="object-cover w-full" />
        </div>
        <div className="w-full md:w-6/12 p-5">
          <TitleDes
            title="Peace of Mind"
            des="Knowing that your property is in good hands gives you invaluable peace of mind. You don't have to worry about logistical issues or unforeseen events. We take care of all aspects of management, allowing you to enjoy the financial benefits without the daily hassles."
          />
          <Image
            src={HomeImage}
            alt=""
            className="hidden xl:block absolute right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
};
export default PlaceOfMind;
