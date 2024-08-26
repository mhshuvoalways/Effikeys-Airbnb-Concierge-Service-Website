import Image from "next/image";

interface Props {
  imageBg: any;
  topMsg?: string;
  title: string;
  subTitle?: string;
}

const index: React.FC<Props> = ({ imageBg, topMsg, title, subTitle }) => {
  return (
    <section className="h-[400px] flex items-center justify-center mt-4">
      <div className="relative w-full h-[400px]">
        <Image src={imageBg} alt="" className="w-full h-full object-cover" />
        <p
          className="absolute inset-0"
          style={{
            background: `linear-gradient(263.44deg, rgba(0, 0, 0, 0.46) 12.66%, rgba(0, 0, 0, 0) 93.61%)`,
          }}
        ></p>
      </div>
      <div className="absolute text-white text-center myContainer">
        <div>
          {topMsg && (
            <div className="flex items-center justify-center gap-x-[10px] text-white">
              <p className="border w-[50px]"></p>
              <p className="tracking-widest uppercase font-medium">{topMsg}</p>
              <p className="border w-[50px]"></p>
            </div>
          )}
          <p className="mt-2 font-semibold text-4xl sm:text-[68px] leading-normal sm:leading-[85px]">
            {title}
          </p>
          <p className="mt-6 text-[18px] font-light">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default index;
