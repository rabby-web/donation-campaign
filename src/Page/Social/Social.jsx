import { FcGoogle } from "react-icons/fc";

const Social = () => {
  return (
    <div className="flex w-full">
      <button className="flex w-full justify-center items-center text-lg font-semibold gap-5 border-2 rounded-full py-3 px-5 ">
        <FcGoogle></FcGoogle> Continue with Facebook
      </button>
    </div>
  );
};

export default Social;
