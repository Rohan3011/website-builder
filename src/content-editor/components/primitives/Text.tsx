// components/primitives/Text.tsx
import React from "react";
import { useEditableContext } from "../../context/EditableContext";

interface TextProps {
  contentKey: string;
}

const Text: React.FC<TextProps> = ({ contentKey }) => {
  const { isEditing, content, updateContent } = useEditableContext();

  const handleBlur = (event: React.FocusEvent<HTMLSpanElement>) => {
    updateContent(contentKey, event.currentTarget.innerText);
  };

  return (
    <span
      contentEditable={isEditing}
      suppressContentEditableWarning
      onBlur={handleBlur}
    >
      {content[contentKey]}
    </span>
  );
};

export default Text;
