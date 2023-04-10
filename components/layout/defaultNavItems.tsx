import React, {useState } from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import BenefitManagementAccordion from '../layout/Accordion'
// define a NavItem prop
export type NavItem = {
  label: string;
  href: any;
  icon: React.ReactNode;
};

const handle = () => {
  console.log('test')
  // <Accordion/>
};

export const defaultNavItems: NavItem[] = [
  {
    label: "Global Management",
    href: "",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  // {
  //   label: "Benefit Management",
  //   href: "/submenu",
  //   icon: <FolderIcon className="w-6 h-6" />,
  // },
  // {
  //   label: "Dashboard",
  //   href: "/",
  //   icon: <HomeIcon className="w-6 h-6" />,
  // },
  // {
  //   label: "Team",
  //   href: "/team",
  //   icon: <UserGroupIcon className="w-6 h-6" />,
  // },
  // {
  //   label: "Projects",
  //   href: "/projects",
  //   icon: <FolderIcon className="w-6 h-6" />,
  // },
  // {
  //   label: "Calendar",
  //   href: "/calendar",
  //   icon: <CalendarIcon className="w-6 h-6" />,
  // },
];

const Navbar = () => {
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  const handleAccordionClick = (e:any) => {
    console.log('test')
    e.preventDefault();
    setIsAccordionVisible(!isAccordionVisible);
  };

  return (
    <nav>
      <ul>
        {defaultNavItems && defaultNavItems.map((item) => (
          <li key={item.label}>
            {item.href === "#" ? (
              <a href="#" onClick={handleAccordionClick}>
                {item.icon} {item.label}
              </a>
            ) : (
              <Link href={item.href}>
                 <a>
                {item.icon} {item.label}
                </a>
              </Link >
            )}
          </li>
        ))}
      </ul>
      {isAccordionVisible && <BenefitManagementAccordion />}
    </nav>
  );
};

export default Navbar;