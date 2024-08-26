import HeroImage from "@/public/images/hero/home.png";
import Image from "next/image";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <section className="min-h-[683px] flex items-center justify-center mt-4">
      <Image
        src={HeroImage}
        alt=""
        className="w-full min-h-[683px] object-cover"
      />
      <div className="absolute text-white w-full lg:w-[867px] mx-auto text-center px-5">
        <div>
          <div className="flex items-center justify-center gap-x-[10px]">
            <p className="border w-[50px]"></p>
            <p className="tracking-widest uppercase font-light">
              Entrusting us
            </p>
            <p className="border w-[50px]"></p>
          </div>
          <p className="font-semibold text-4xl sm:text-[68px] mt-[13px] leading-normal sm:leading-[85px]">
            Your AIRBNB Concierge Service in Western Paris
          </p>
          <p className="mt-6 text-[18px] font-light">
            AIRBNB CONCIERGE SERVICE around Disney <br />
            (Bussy-Saint-Georges, Chessy, Serris, Montévrain, Lagny-Sur-Marne
            ...)
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
