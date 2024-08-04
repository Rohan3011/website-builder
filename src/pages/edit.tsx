import React, { useEffect, useRef } from "react";
import { makeEditable } from "~/hooks/makeEditable";

const HomePage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      makeEditable(pageRef.current);
    }
  }, []);

  return (
    <div ref={pageRef}>
      <h1 id="title" className="editable">
        This is an editable title
      </h1>
      <p id="subtitle" className="editable">
        This is an editable paragraph.
      </p>
      <div id="description" data-editable>
        This div is also editable.
      </div>
      {/* Your existing page content */}
    </div>
  );
};

export default HomePage;
