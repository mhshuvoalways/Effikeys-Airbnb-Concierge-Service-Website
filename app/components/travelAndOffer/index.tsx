import TitleDes from "@/app/components/common/titleDes";
import HomeImage from "@/public/images/home.png";
import TwoManImage from "@/public/images/twoman.png";
import Image from "next/image";

const item = {
  itemImage: TwoManImage,
  title: "Traveler communication and assistance",
  des: "Responsiveness is at the center of our commitment. Effikeys ensures rapid responses to all requests, with availability 7 days a week for your travelers. Their satisfaction remains our number one priority. In the event of a problem, we act quickly and efficiently, while ensuring careful follow-up.",
};

interface Props {}

const PlaceOfMind: React.FC<Props> = () => {
  return (
    <div className="myContainer mt-32">
      <div className="bg-[#FAF4E7] rounded-xl h-auto xl:h-[467px] flex items-center justify-center relative p-5 xl:p-0">
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-between gap-x-[80px]">
          <div className="w-full xl:w-[379px]">
            <Image
              src={item.itemImage}
              alt=""
              className="object-cover static xl:absolute left-11 -top-7 w-auto xl:w-[379px] mx-auto"
            />
            <Image
              src={HomeImage}
              alt=""
              className="static xl:absolute left-96 bottom-0 w-3/12 xl:w-auto"
            />
          </div>
          <div className="w-full xl:w-[572px]">
            <TitleDes title={item.title} des={item.des} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaceOfMind;
