import { Dispatch, FC, SetStateAction } from "react";

interface InputNumberProps {
  value: number | undefined;
  setValue: Dispatch<SetStateAction<number | undefined>>;
  placeholder?: string;
}

export const InputNumber: FC<InputNumberProps> = ({
  value,
  setValue,
  placeholder,
}) => (
  <input
    type="number"
    placeholder={placeholder}
    className="input input-bordered input-primary w-full max-w-xs"
    value={value}
    onChange={(event) =>
      setValue(parseInt(event.target.value, 10) || undefined)
    }
  />
);
