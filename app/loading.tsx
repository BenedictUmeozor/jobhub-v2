"use client"

import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="loader">
      <GridLoader color="#0040ff" loading={true} size={20} />
    </main>
  );
};
export default Loading;
