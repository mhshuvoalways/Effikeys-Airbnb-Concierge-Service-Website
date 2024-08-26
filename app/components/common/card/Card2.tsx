import BellIcon from "@/public/icons/bell.svg";
import BookIcon from "@/public/icons/book.svg";
import RentIcon from "@/public/icons/rent.svg";
import Image from "next/image";

const items = [
  {
    itemIcon: BookIcon,
    title: "Signing a legal contract",
    des: "A contract drawn up by a lawyer, in accordance with the legislation, is signed between the two parties. This contract authorizes Effikeys to sublet your accommodation for short periods, in complete legality and transparency.",
  },
  {
    itemIcon: BellIcon,
    title: "Signing a legal contract",
    des: "A contract drawn up by a lawyer, in accordance with the legislation, is signed between the two parties. This contract authorizes Effikeys to sublet your accommodation for short periods, in complete legality and transparency.",
  },
  {
    itemIcon: RentIcon,
    title: "Signing a legal contract",
    des: "A contract drawn up by a lawyer, in accordance with the legislation, is signed between the two parties. This contract authorizes Effikeys to sublet your accommodation for short periods, in complete legality and transparency.",
  },
];

interface Props {}

const Card: React.FC<Props> = () => {
  return (
    <div className="myContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-[70px]">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div
            className="rounded-md p-6 max-w-[397px] z-10 relative bg-white"
            style={{
              boxShadow: `0px 5px 80px 0px #C1C0D566`,
            }}
          >
            <div className="flex items-center gap-x-[18px]">
              <Image
                src={item.itemIcon}
                alt=""
                className="bg-[#F7F3E9] size-[69px] p-5 rounded-full"
              />
              <p className="font-semibold text-xl">{item.title}</p>
            </div>
            <p className="mt-[26px] text-sm text-justify leading-[24px]">
              {item.des}
            </p>
          </div>
          <p className="bg-primary w-9/12 mx-auto h-4 rounded-full absolute -bottom-2 left-0 right-0 z-0"></p>
        </div>
      ))}
    </div>
  );
};

export default Card;
