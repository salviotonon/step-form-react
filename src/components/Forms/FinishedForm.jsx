import { useContext } from "react";
import { SignupContext } from "../../context/signupContext";

// eslint-disable-next-line react/prop-types
const FinishedForm = ({ prevStep }) => {
  const { signup, setSignup } = useContext(SignupContext);

  const selectedTimePlan = signup.timePlan.map((item) => {
    if (item.Monthly === true) {
      return "Monthly";
    } else {
      return "Yearly";
    }
  });
  const amountPickService = signup.pickAddOns.map((item, index) => {
    return (
      <li key={index} className="pb-1 ">
        <span className="flex justify-between text-gray-400">{item}<span className="text-primaryButton">+$1/mo</span></span>
      </li>
    );
  });

  return (
    <>
      <h2 className="text-primaryButton font-bold text-2xl">Finished up</h2>
      <p className="text-slate-500 pr-2 mt-2 mb-2">
        Double-check everything looks OK before confirming.
      </p>
      <ul className="p-4">
        <li className="capitalize text-primaryButton font-semibold pb-4">{`${signup.typePlan}(${selectedTimePlan})`}<span className="flex justify-between -mt-1"><button className="underline text-gray-400">Change</button> $9/mo</span></li>
        {amountPickService}
        <li className="pt-6 text-gray-500 flex justify-between"><span>total per month</span><span className="text-secondaryButton font-bold">+$12/mo</span></li>
      </ul>
      <div className="min-h-[45vh] flex items-end justify-between p-4">
        <button
          onClick={prevStep}
          className="flex text-slate-400 font-semibold py-2 px-4 rounded-md items-end justify-end"
        >
          Go Back
        </button>
        <button className="bg-secondaryButton opacity-90 text-white font-semibold px-4 py-2 rounded-md">
          Confirm
        </button>
      </div>
    </>
  );
};

export default FinishedForm;
