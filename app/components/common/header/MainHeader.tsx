"use client";

import Button1 from "@/app/components/common/buttons/Button1";
import ArrowDownIcon2 from "@/public/icons/arrow/arrowDownBlack.svg";
import ArrowDownIcon from "@/public/icons/arrow/arrowDownPrimary.svg";
import BarIcon from "@/public/icons/bar.svg";
import LogoImage from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "../headlessui/Dropdown";

const menus = [
  {
    itemName: "HOME",
    href: "/",
  },
  {
    itemName: "ABOUT US",
    href: "/about-us",
  },
  {
    itemName: "SERVICES",
    href: "/services",
  },
];

const services = [
  {
    itemName: "Concierge",
    href: "/services/soncierge",
  },
  {
    itemName: "Subletting",
    href: "/services/subletting",
  },
];

interface Props {}

const MainHeader: React.FC<Props> = () => {
  const pathname = usePathname();

  return (
    <div className="myContainer flex items-center justify-between gap-1">
      <div className="block sm:hidden pt-5 sm:pt-0">
        <Dropdown
          items={menus}
          btnIcon={
            <Image src={BarIcon} alt="" className="bg-gray-100 rounded" />
          }
        />
      </div>
      <Link href={"/"}>
        <Image src={LogoImage} alt="" className="w-24 sm:w-auto" />
      </Link>
      <nav className="sm:flex items-center gap-x-[30px] hidden">
        {menus.map((menu) => {
          const isActive =
            menu.href === "/"
              ? pathname === menu.href
              : pathname.includes(menu.href);
          return (
            <div key={menu.itemName}>
              {menu.itemName === "SERVICES" ? (
                <Dropdown
                  items={services}
                  btnIcon={
                    <div
                      className={`flex items-center gap-x-[10px] hover:underline hover:font-semibold transition ${
                        isActive
                          ? "text-primary underline font-semibold"
                          : "font-medium"
                      }`}
                    >
                      {menu.itemName}
                      <Image
                        src={isActive ? ArrowDownIcon : ArrowDownIcon2}
                        alt=""
                      />
                    </div>
                  }
                />
              ) : (
                <Link
                  href={menu.href}
                  className={`hover:underline hover:font-semibold transition ${
                    isActive
                      ? "text-primary underline font-semibold"
                      : "font-medium"
                  }`}
                >
                  {menu.itemName}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
      <div className="pt-5 sm:pt-0">
        <Button1 />
      </div>
    </div>
  );
};

export default MainHeader;
