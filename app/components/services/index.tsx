import Card from "@/app/components/common/card/Card1";
import AdsImage from "@/public/images/services/ads.png";
import IncomeImage from "@/public/images/services/income.png";
import TimeImage from "@/public/images/services/time.png";
import Item from "./Item";

const items = [
  {
    title: "Optimized Profitability",
    des: "In-depth information on various mental health conditions, coping strategies, and self-care practices.",
    bgColor: "#FAF4E7",
  },
  {
    title: "More Income",
    des: "In-depth information on various mental health conditions, coping strategies, and self-care practices.",
    bgColor: "#CD930A",
  },
  {
    title: "Save Time",
    des: "In-depth information on various mental health conditions, coping strategies, and self-care practices.",
    bgColor: "#FAF4E7",
  },
  {
    title: "Absolute serenity",
    des: "In-depth information on various mental health conditions, coping strategies, and self-care practices.",
    bgColor: "#CD930A",
  },
];

const items2 = [
  {
    image: TimeImage,
    title: "Save Time",
    des: "Managing a short-term rental requires almost constant availability. From welcoming guests to managing departures, including cleaning and maintenance, tasks pile up quickly.",
  },
  {
    image: AdsImage,
    title: "Professional Ads Management",
    des: "Our concierge takes care of creating and optimizing your ad on rental platforms. This includes taking professional photos, writing attractive descriptions, and managing pricing.",
  },
  {
    image: IncomeImage,
    title: "Optimization of Rental Income",
    des: "Our Airbnb concierge has expertise in managing prices based on seasonality, local events, and market trends. We can adjust rates to maximize your revenue while maintaining",
  },
];

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[120px]">
        {items.map((item, index) => (
          <Item
            title={item.title}
            des={item.des}
            bgColor={item.bgColor}
            key={index}
            itemIndex={index}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-x-[10px] bg-primary mt-2 py-3 text-white px-2">
        <p className="border w-[50px]"></p>
        <p className="tracking-widest uppercase font-medium">
          SOME OF OUR SERVICES
        </p>
        <p className="border w-[50px]"></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-[78px] myContainer gap-[33px]">
        {items2.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            des={item.des}
          />
        ))}
      </div>
    </>
  );
};

export default index;
