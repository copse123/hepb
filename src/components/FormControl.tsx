import { FC, PropsWithChildren } from "react";
import { InfoBox } from "./InfoBox";

interface FormControlProps {
  title: string;
  altTitle?: string;
  info?: string;
  className?: string;
}

export const FormControl: FC<PropsWithChildren<FormControlProps>> = ({
  children,
  title,
  altTitle,
  info,
  className = "",
}) => (
  <div className={`${className}`}>
    <div className="form-control w-full md:max-w-xs">
      <label className="label">
        <span className="label-text">{title}</span>
        {altTitle && (
          <span className="label-text-alt font-bold">{altTitle}</span>
        )}
      </label>
      {children}
    </div>
    {info && <InfoBox className="mt-2" text={info} />}
  </div>
);
