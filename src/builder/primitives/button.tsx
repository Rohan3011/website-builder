import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {};

export default function Button(props: ButtonProps) {
  return <button {...props} />;
}
