import React from "react";

type BoxProps = React.ComponentPropsWithoutRef<"div"> & {};

export default function Box(props: BoxProps) {
  return <p {...props} />;
}
