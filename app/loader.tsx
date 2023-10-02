import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="loader">
      <GridLoader color="#0040ff" loading={true} size={150} />
    </main>
  );
};
export default Loading;
