import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import Link from "next/link";

interface Items {
  itemName: string;
  href: string;
}

interface Props {
  btnIcon: React.ReactElement;
  items: Items[];
  className?: string;
}

const Dropdown: React.FC<Props> = ({ btnIcon, items, className }) => {
  return (
    <Menu>
      <MenuButton>{btnIcon}</MenuButton>
      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom start"
          className={`z-20 shadow rounded-lg w-44 bg-white mt-[10px] ${className}`}
        >
          {items.map((item) => {
            return (
              <div
                key={item.itemName}
                className={`p-6 border-b border-[#E6E6E6] cursor-pointer`}
              >
                <MenuItem>
                  <Link href={item.href}>{item.itemName}</Link>
                </MenuItem>
              </div>
            );
          })}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
