// HamburgerMenu.tsx
import React from "react";

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggleMenu }) => {
  return (
    <div
      className="block md:hidden cursor-pointer mb-2"
      onClick={toggleMenu}
    ></div>
  );
};

export default HamburgerMenu;
