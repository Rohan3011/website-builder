import React, { useEffect, useRef } from "react";
import { makeEditable } from "~/hooks/makeEditable";

const HomePage: React.FC = ({ data }: any) => {
  return (
    <div>
      {Object.entries(data?.data).map(([k, v]) => (
        <div data-editable key={k}>
          {v}
        </div>
      ))}
    </div>
  );
};

export default HomePage;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/pages/1`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
