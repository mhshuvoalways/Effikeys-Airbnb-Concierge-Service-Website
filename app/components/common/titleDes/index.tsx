interface Props {
  title: string;
  des: string;
}

const index: React.FC<Props> = ({ title, des }) => {
  return (
    <>
      <p className="h-1 w-[100px] bg-primary"></p>
      <p className="font-semibold text-2xl sm:text-[40px] mt-[14px] leading-normal sm:leading-[56px]">
        {title}
      </p>
      <p className="leading-[26px] mt-6 text-gray tracking-wider text-justify">
        {des}
      </p>
    </>
  );
};

export default index;
