import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";

import { UserGroupIcon, HomeIcon } from "@heroicons/react/24/outline";

interface IconProps {
  id: number;
  open: number;
}

function Icon({ id, open }: IconProps) {
  return (
   
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      margin-right="3rem"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
    </svg>
   
  );
}

const BenefitManagementAccordion =()=> {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
        <div style={{display:'grid'}}>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} style={{marginRight:'3rem'}}>
        <AccordionHeader onClick={() => handleOpen(1)} style={{borderBottomColor:'transparent'}}>
        {/* <span><HomeIcon className="w-6 h-6"/></span> */}
        <span style={{color:'black', marginLeft:'1.5rem'}}>Benefit Management</span>
        </AccordionHeader>
        <AccordionBody>
          <div className="text" style={{ display: "flex",marginLeft:'2rem', marginBottom:'1rem' }}>
            <UserGroupIcon className="w-6 h-6" />
            <div style={{ display: "grid", marginLeft: "1rem" }}>
              <span>Manage Aggregator</span>
              <span>& Payor</span>
            </div>
          </div>
          <div className="text" style={{ display: "flex",marginLeft:'2rem', marginBottom:'1rem' }}>
            <UserGroupIcon className="w-6 h-6" />
            <div style={{ display: "grid", marginLeft: "1rem" }}>
              <span>Manage Plans</span>
              <span>& Benefits</span>
            </div>
          </div>
          <div className="text" style={{ display: "flex",marginLeft:'2rem', marginBottom:'1rem' }}>
            <UserGroupIcon className="w-6 h-6" />
            <div style={{ display: "grid", marginLeft: "1rem",alignContent:'center' }}>
              <span>Manage Members</span>
            </div>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />} style={{marginRight:'3rem'}}>
        <AccordionHeader onClick={() => handleOpen(2)} style={{borderBottomColor:'transparent'}}>
        {/* <span><HomeIcon className="w-6 h-6"/></span> */}
        <span style={{color:'black', marginLeft:'1.5rem'}}>Client Management</span>
        </AccordionHeader>
        <AccordionBody>
          <div className="text" style={{ display: "flex",marginLeft:'2rem', marginBottom:'1rem' }}>
            <UserGroupIcon className="w-6 h-6" />
            <div style={{ display: "grid", marginLeft: "1rem" }}>
              <span>Manage Corporate</span>
            </div>
          </div>
          <div className="text" style={{ display: "flex",marginLeft:'2rem', marginBottom:'1rem' }}>
            <UserGroupIcon className="w-6 h-6" />
            <div style={{ display: "grid", marginLeft: "1rem" }}>
              <span>Manage Members</span>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      </div>
    </Fragment>
  );
}

export default BenefitManagementAccordion;
