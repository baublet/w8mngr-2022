import React from "react";

import { InputProps } from "./Input";

let count = 0;

interface FoodEntryInputProps {
  hideLabel?: boolean;
  getRef?: (ref: React.RefObject<HTMLInputElement>) => void;
}

export function InputAutocompleteFood(props: FoodEntryInputProps & InputProps) {
  const id = props.id || `input-inverted-food-entry-${count++}`,
    label = props.placeholder || props.label,
    newProps = Object.assign({}, props, { id }),
    { getRef, hideLabel, className, size, onChange, ...inputOnlyProps } =
      newProps,
    ref = React.useRef(null);

  React.useEffect(() => {
    if (getRef) {
      getRef(ref);
    }
  }, []);

  return (
    <>
      <input
        {...inputOnlyProps}
        className={`bg-transparent w-full border-transparent hover:border-foreground focus:border-foreground border-b ${className}`}
        ref={ref}
      />
      <label htmlFor={newProps.id} className="screen-reader-text">
        {label}
      </label>
    </>
  );
}
