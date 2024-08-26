import Arrow from "@/public/icons/arrow/arrowRight.svg";
import Image from "next/image";

interface Props {
  image: any;
  title: string;
  des: string;
}

const Card: React.FC<Props> = ({ image, title, des }) => {
  return (
    <div
      style={{
        boxShadow: "0px 10px 20px 0px #0000000F",
      }}
      className="rounded-xl"
    >
      <Image src={image} alt="" className="w-full p-2" />
      <div className="p-4">
        <p className="text-[22px] font-semibold">{title}</p>
        <p className="text-sm text-gray leading-[21px] mt-2">{des}</p>
        <div className="flex items-center gap-1 mt-2 cursor-pointer">
          <p className="text-primary">Read Full</p>
          <Image src={Arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
