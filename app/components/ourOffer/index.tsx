import TitleDes from "@/app/components/common/titleDes";
import GrilOfferImage from "@/public/images/grilOffer.png";
import HomeImage from "@/public/images/home.png";
import Image from "next/image";

const item = {
  itemImage: GrilOfferImage,
  title: "Our offer",
  des: "At Effikeys, benefit from full management of your Airbnb rental thanks to our UNIQUE package, which includes all the necessary services. <br/> As owners, you receive all of your rental income, without any commission on cleaning costs payable by guests, as well as on our FREE professional photo costs. <br/> So no advance fees, no hidden costs, and no long-term commitment!",
};

interface Props {}

const PlaceOfMind: React.FC<Props> = () => {
  return (
    <div className="myContainer mt-10 xl:mt-32">
      <div className="bg-[#FAF4E7] rounded-xl h-auto xl:h-[467px] flex items-center justify-center relative p-5 xl:p-0">
        <div className="flex flex-col-reverse xl:flex-row flex-wrap xl:flex-nowrap items-center justify-between gap-x-[80px]">
          <div className="w-full xl:w-[572px]">
            <TitleDes title={item.title} des={item.des} />
          </div>
          <div className="w-full xl:w-[379px]">
            <Image
              src={item.itemImage}
              alt=""
              className="object-cover static xl:absolute right-11 -top-7 w-auto xl:w-[379px] mx-auto"
            />
            <Image
              src={HomeImage}
              alt=""
              className="static xl:absolute right-96 bottom-0 w-3/12 xl:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaceOfMind;
