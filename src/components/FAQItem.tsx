import { FC, PropsWithChildren } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

interface FAQItemProps {
  title: string;
}

export const FAQItem: FC<PropsWithChildren<FAQItemProps>> = ({
  title,
  children,
}) => (
  <div className="collapse rounded-lg shadow-lg border">
    <input type="checkbox" className="peer" />
    <div className="collapse-title bg-yellow-50 text-black peer-checked:bg-gray-100">
      {title}
    </div>
    <div className="collapse-content bg-yellow-50 text-black peer-checked:bg-gray-100">
      {children}
    </div>
    <ChevronDownIcon className="absolute top-5 right-4 h-6 w-6 text-primary peer-checked:hidden" />
    <ChevronUpIcon className="absolute top-5 right-4 h-6 w-6 text-primary hidden peer-checked:block" />
  </div>
);
