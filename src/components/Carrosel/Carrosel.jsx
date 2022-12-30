import { useContext } from "react";
import { SignupContext } from "../../context/signupContext";
const Carrosel = () => {
  const { signup, setSignup } = useContext(SignupContext);

  const { step } = signup;

  return (
    <div className="absolute top-[7vh] w-full sm:flex sm: justify-center">
      <ul className="flex justify-center gap-4 sm:flex-col">
        <li className={`border  w-[35px] h-[35px] flex items-center justify-center rounded-full ${step === 1 ? "bg-gray-300 border-none text-black" : "bg-transparent border-white text-white"}`}>
          <span className=" font-bold">1</span>
        </li>
        <li className={`border  w-[35px] h-[35px] flex items-center justify-center rounded-full ${step === 2 ? "bg-gray-300 border-none text-black" : "bg-transparent border-white text-white"}`}>
          <span className="font-bold">2</span>
        </li>
        <li className={`border  w-[35px] h-[35px] flex items-center justify-center rounded-full ${step === 3 ? "bg-gray-300 border-none text-black" : "bg-transparent border-white text-white"}`}>
          <span className=" font-bold">3</span>
        </li>
        <li className={`border  w-[35px] h-[35px] flex items-center justify-center rounded-full ${step === 4 ? "bg-gray-300 border-none text-black" : "bg-transparent border-white text-white"}`}>
          <span className=" font-bold">4</span>
        </li>
      </ul>
    </div>
  );
};

export default Carrosel;
