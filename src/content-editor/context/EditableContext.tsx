// context/EditableContext.tsx
import React, { createContext, useState, useContext } from "react";

interface EditableContextType {
  isEditing: boolean;
  content: Record<string, string>;
  toggleEditMode: () => void;
  updateContent: (key: string, value: string) => void;
}

const EditableContext = createContext<EditableContextType | undefined>(
  undefined
);

export const useEditableContext = () => {
  const context = useContext(EditableContext);
  if (!context) {
    throw new Error(
      "useEditableContext must be used within an EditableProvider"
    );
  }
  return context;
};

export const EditableProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState<Record<string, string>>({
    div: "This is editable content. Click to edit.",
    text: "Editable Text",
    p: "This is an editable paragraph.",
  });

  const toggleEditMode = () => setIsEditing(!isEditing);

  const updateContent = (key: string, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <EditableContext.Provider
      value={{ isEditing, content, toggleEditMode, updateContent }}
    >
      {children}
    </EditableContext.Provider>
  );
};
