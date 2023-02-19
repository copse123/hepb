import { FC, PropsWithChildren } from "react";
import { InfoBox } from "./InfoBox";

interface FormControlProps {
  title: string;
  altTitle?: string;
  info?: string;
  isRequired?: boolean;
  className?: string;
}

export const FormControl: FC<PropsWithChildren<FormControlProps>> = ({
  children,
  title,
  altTitle,
  info,
  isRequired,
  className = "",
}) => (
  <div className={`${className}`}>
    <div className="form-control w-full md:max-w-xs">
      <label className="label">
        <span className="label-text">
          {title}
          {isRequired ? <span className="text-red-500">*</span> : ""}
        </span>
        {altTitle && (
          <span className="label-text-alt font-bold">{altTitle}</span>
        )}
      </label>
      {children}
    </div>
    {info && <InfoBox className="mt-2" text={info} />}
  </div>
);
