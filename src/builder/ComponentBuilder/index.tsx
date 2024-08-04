import React from "react";

const ButtonComponent: React.FC = () => {
  return <button>Button</button>;
};

const TextComponent: React.FC = () => {
  return <p>Text Component</p>;
};

const ComponentBuilder = () => {
  return (
    <div>
      <ButtonComponent />
      <TextComponent />
    </div>
  );
};

export default ComponentBuilder;
