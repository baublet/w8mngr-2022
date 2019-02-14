import * as React from "react";
import BaseButton from "./Base";

export default function PrimaryButton(
  props: React.HTMLProps<HTMLButtonElement>
): React.ReactElement<React.HTMLProps<HTMLButtonElement>, any> {
  return (
    <BaseButton
      {...props}
      className="bg-primary p-3 text-primaryText rounded text-xs uppercase shadow hover:shadow-md focus:shadow:md"
    />
  );
}
