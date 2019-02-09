import * as React from "react";

let count = 0;

export default function Input(
  props: React.HTMLProps<HTMLInputElement>
): React.ReactElement<React.HTMLProps<HTMLInputElement>, any> {
  const id = props.id || `input-${count++}`,
    newProps = Object.assign({}, props, { id });
  return (
    <>
      <input
        {...newProps}
        className={`bg-transparent w-full py-2 ${
          props.label ? "" : "border-b border-foreground"
        }`}
      />
      {!props.label ? (
        false
      ) : (
        <>
          <br />
          <label
            htmlFor={newProps.id}
            className="uppercase text-xs text-inherit opacity-75 hover:opacity-100 border-b border-foreground block"
          >
            {newProps.label}
          </label>
        </>
      )}
    </>
  );
}
