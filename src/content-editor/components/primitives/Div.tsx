// components/primitives/Div.tsx
import React from "react";
import { useEditableContext } from "../../context/EditableContext";

interface DivProps {
  contentKey: string;
  children?: React.ReactNode;
}

const Div: React.FC<DivProps> = ({ contentKey, children }) => {
  const { isEditing, content, updateContent } = useEditableContext();

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    updateContent(contentKey, event.currentTarget.innerHTML);
  };

  return (
    <div
      contentEditable={isEditing}
      suppressContentEditableWarning
      onBlur={handleBlur}
      style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}
      dangerouslySetInnerHTML={
        children ? undefined : { __html: content[contentKey] }
      }
    >
      {children}
    </div>
  );
};

export default Div;
