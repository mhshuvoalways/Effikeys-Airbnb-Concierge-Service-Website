import UserIcon from "@/public/icons/user.svg";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
}

const Button1: React.FC<Props> = ({ className }) => {
  return (
    <Link href={"/contact-us"}>
      <button
        className={`bg-primary rounded flex items-center gap-x-2 px-5 py-[11.5px] ${className}`}
      >
        <Image src={UserIcon} alt="" />
        <p className="font-semibold text-white">Contac Us</p>
      </button>
    </Link>
  );
};

export default Button1;
