import React from "react";
import { useDrop } from "react-dnd";
import Sidebar from "../ui/Sidebar";

const DragDropCanvas: React.FC = () => {
  const [, drop] = useDrop(() => ({
    accept: "component",
    drop: (item) => console.log(item),
  }));

  return (
    <main className="flex-1">
      <div
        ref={drop}
        style={{ width: "100%", height: "400px", border: "1px solid black" }}
      >
        Drop Components Here
      </div>
    </main>
  );
};

export default DragDropCanvas;
