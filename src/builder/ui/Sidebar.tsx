import React from "react";
import * as Primitive from "../primitives";
import Text from "../primitives/text";
import Box from "../primitives/box";
import Button from "../primitives/button";

function Sidebar() {
  return (
    <div className="flex flex-col gap-4 w-[300px] bg-red-100">
      <Text />
      <Box />
      <Button />
    </div>
  );
}

export default Sidebar;
