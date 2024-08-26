import CoreMaintain from "./CoreMaintain";
import PlaceOfMind from "./PlaceOfMind";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <>
      <CoreMaintain />
      <PlaceOfMind />
    </>
  );
};

export default index;
