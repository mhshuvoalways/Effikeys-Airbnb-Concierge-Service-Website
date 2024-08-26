import Button1 from "@/app/components/common/buttons/Button1";
import BgImage from "@/public/images/needService.svg";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div
      className="bg-primary py-[72px] mt-[120px] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${BgImage.src})`,
        backgroundPosition: "center calc(100% + 80px)",
      }}
    >
      <div className="myContainer z-10">
        <p className="h-1 w-[100px] bg-white mx-auto"></p>
        <p className="font-semibold text-2xl sm:text-[40px] mt-[14px] leading-[56px] text-white text-center">
          Need our Services?
        </p>
        <div className="flex justify-center mt-7">
          <Button1 className=" !bg-black" />
        </div>
      </div>
    </div>
  );
};

export default index;
