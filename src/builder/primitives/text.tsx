import React from "react";

type TextProps = React.ComponentPropsWithoutRef<"p"> & {};

export default function Text(props: TextProps) {
  return <p {...props} />;
}
