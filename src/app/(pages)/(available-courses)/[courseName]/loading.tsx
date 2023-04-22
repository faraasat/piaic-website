import { FiLoader } from "react-icons/fi";

const Loading = () => {
  return (
    <div className="h-[calc(100vh-60px-100px)] min-h-[350px] flex gap-3 items-center justify-center">
      <div className="flex justify-center items-center translate-y-[-3px]">
        <FiLoader className="animate-spin text-[45px]" />
      </div>
      <div className="text-[45px]">Loading...</div>
    </div>
  );
};

export default Loading;
