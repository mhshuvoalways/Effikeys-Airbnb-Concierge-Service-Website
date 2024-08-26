import Card3 from "@/app/components/common/card/Card2";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="mt-[118px]">
      <p className="font-semibold text-2xl sm:text-[40px] leading-[56px] text-center">
        How does it Work?
      </p>
      <p className="h-1 w-[100px] bg-primary mx-auto mt-[14px]"></p>
      <Card3 />
    </div>
  );
};

export default index;
