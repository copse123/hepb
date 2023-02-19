import { Dispatch, FC, SetStateAction } from "react";

interface SelectBooleanProps {
  value: boolean | undefined;
  setValue: Dispatch<SetStateAction<boolean | undefined>>;
  trueLabel?: string;
  falseLabel?: string;
}

export const SelectBoolean: FC<SelectBooleanProps> = ({
  value,
  setValue,
  trueLabel = "Positive (Reactive)",
  falseLabel = "Negative (Non-Reactive)",
}) => (
  <select
    className="select select-bordered border-primary"
    value={value?.toString()}
    onChange={(event) => {
      if (event.target.value === "undefined") {
        setValue(undefined);
        return;
      }
      setValue(event.target.value === "true");
    }}
  >
    <option value="undefined">I don't know</option>
    <option value="true">{trueLabel}</option>
    <option value="false">{falseLabel}</option>
  </select>
);
