// components/ContentEditor.tsx
import React from "react";
import {
  EditableProvider,
  useEditableContext,
} from "../context/EditableContext";
import Div from "./primitives/Div";
import Text from "./primitives/Text";
import P from "./primitives/P";

const ContentEditor: React.FC = () => {
  const { toggleEditMode, isEditing } = useEditableContext();

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <button onClick={toggleEditMode}>{isEditing ? "Save" : "Edit"}</button>
      <Div contentKey="div">
        <Text contentKey="text" />
        <P contentKey="p" />
      </Div>
    </div>
  );
};

const ContentEditorWrapper: React.FC = () => {
  return (
    <EditableProvider>
      <ContentEditor />
    </EditableProvider>
  );
};

export default ContentEditorWrapper;
