import { FC } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

interface InfoBoxProps {
  text: string;
  className?: string;
}

export const InfoBox: FC<InfoBoxProps> = ({ text, className = "" }) => (
  <div className={`alert shadow-lg text-xs bg-yellow-50 ${className}`}>
    <div>
      <InformationCircleIcon className="stroke-info flex-shrink-0 w-6 h-6" />
      <span>{text}</span>
    </div>
  </div>
);
