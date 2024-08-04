// components/primitives/P.tsx
import React from "react";
import { useEditableContext } from "../../context/EditableContext";

interface PProps {
  contentKey: string;
}

const P: React.FC<PProps> = ({ contentKey }) => {
  const { isEditing, content, updateContent } = useEditableContext();

  const handleBlur = (event: React.FocusEvent<HTMLParagraphElement>) => {
    updateContent(contentKey, event.currentTarget.innerText);
  };

  return (
    <p
      contentEditable={isEditing}
      suppressContentEditableWarning
      onBlur={handleBlur}
    >
      {content[contentKey]}
    </p>
  );
};

export default P;
