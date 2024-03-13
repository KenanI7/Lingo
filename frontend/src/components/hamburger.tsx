// HamburgerMenu.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div className="block md:hidden cursor-pointer mb-2" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
    </div>
  );
};

export default HamburgerMenu;
