interface Props {
  title: string;
  des: string;
  bgColor: string;
  itemIndex: number;
}

const Item: React.FC<Props> = ({ title, des, bgColor, itemIndex }) => {
  return (
    <div
      className={`p-16 text-center ${itemIndex % 2 ? "text-white" : ""}`}
      style={{
        background: bgColor,
      }}
    >
      <p className="font-semibold text-xl">{title}</p>
      <p className="text-sm mt-[17px]">{des}</p>
    </div>
  );
};

export default Item;
