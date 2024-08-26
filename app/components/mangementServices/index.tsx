import Item from "@/app/components/common/card/Card1";
import ItemImage1 from "@/public/images/managementServices/item1.png";
import ItemImage2 from "@/public/images/managementServices/item2.png";
import ItemImage3 from "@/public/images/managementServices/item3.png";
import ItemImage4 from "@/public/images/managementServices/item4.png";
import ItemImage5 from "@/public/images/managementServices/item5.png";
import ItemImage6 from "@/public/images/managementServices/item6.png";

const items = [
  {
    image: ItemImage1,
    title: "Creation and optimization of the ad on different platforms",
    des: "While ensuring good SEO, we create your personalized ad that highlights the strong points of your accommodation in order to maximize your reservations and increase visibility among users.",
  },
  {
    image: ItemImage2,
    title: "Quality photos (costs payable by the concierge)",
    des: "Photos are often the first thing users see when browsing listings. High-quality images capture attention, reassure and immediately give a positive impression of your home. Airbnb also values ​​listings with quality photos,",
  },
  {
    image: ItemImage3,
    title: "Professional cleaning (payable by the traveler)",
    des: "Housekeeping services are essential for an Airbnb accommodation because they ensure a positive first impression, satisfy guests, maintain a good reputation, respect health standards, and preserve the good condition",
  },
  {
    image: ItemImage4,
    title: "Supply and maintenance of household linen",
    des: "Forget the costs associated with purchasing and replacing bed and bath linens. Effikeys provides this service at no additional cost, giving you complete peace of mind.",
  },
  {
    image: ItemImage5,
    title: "Welcome kit",
    des: "An Airbnb welcome kit is crucial for several reasons: it creates a positive first impression, provides essential information about the accommodation and the region, improves the guest experience through thoughtful touches, and helps stand out in a competitive",
  },
  {
    image: ItemImage6,
    title: "Welcome kit",
    des: "We use dynamic pricing tools to adjust your prices based on local demand, events, and seasons. Airbnb and Booking also promote advertisements with competitive prices. This maximizes your income and optimizes your occupancy rate even in low season.",
  },
];

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="myContainer mt-[118px]">
      <div className="flex items-center gap-x-10">
        <p className="font-semibold text-2xl sm:text-[40px] leading-[60px] text-nowrap w-full lg:w-5/12">
          Management Services
        </p>
        <p className="w-full lg:w-7/12 h-[1px] bg-[#E6E6E7] overflow-x-hidden"></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[48px] gap-6">
        {items.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            title={item.title}
            des={item.des}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
