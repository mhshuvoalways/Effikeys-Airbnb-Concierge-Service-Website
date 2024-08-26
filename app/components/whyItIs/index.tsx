import TitleDes from "@/app/components/common/titleDes";
import FirstImage from "@/public/images/whyitis/first.png";
import SecondImage from "@/public/images/whyitis/second.png";
import ThirdImage from "@/public/images/whyitis/third.png";
import Image from "next/image";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="myContainer mt-[120px] flex flex-wrap md:flex-nowrap items-center justify-between gap-[74px]">
      <div className="grid grid-cols-3 gap-[14px] w-full md:w-6/12">
        <div className="col-span-2">
          <Image
            src={FirstImage}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        <div className="grid gap-[14px]">
          <div>
            <Image
              src={SecondImage}
              alt=""
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
          <div>
            <Image
              src={ThirdImage}
              alt=""
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12">
        <TitleDes
          title="Why use a Short-term Rental Concierge?"
          des="With the rise of short-term rental platforms like Airbnb, more and
          more owners are choosing to rent out their homes to generate
          additional income. However, managing such an activity can quickly
          become time-consuming and complex. This is where the Airbnb concierge
          comes in. But why should you consider using our Effikeys concierge
          service optimized for your property? Here are the essential reasons."
        />
      </div>
    </div>
  );
};

export default index;
