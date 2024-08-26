import TitleDes from "@/app/components/common/titleDes";
import HomeImage from "@/public/images/home.png";
import TypingImage from "@/public/images/typing.png";
import Image from "next/image";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="bg-[#FAF4E7] mt-[120px] py-[100px] relative">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-[74px] myContainer">
        <div className="w-full md:w-6/12">
          <TitleDes
            title="Quality Customer Service"
            des="Welcoming guests and meeting their needs can be stressful, especially
          if you have other commitments. Effikeys offers professional customer
          service, responding to travelers' questions and concerns quickly and
          efficiently. Good customer service improves reviews and ratings, which
          is crucial for attracting new tenants."
          />
        </div>
        <div className="w-full md:w-6/12">
          <Image
            src={TypingImage}
            alt=""
            className="rounded-xl h-full object-cover"
          />
        </div>
        <Image src={HomeImage} alt="" className="absolute left-0 bottom-0" />
      </div>
    </div>
  );
};

export default index;
