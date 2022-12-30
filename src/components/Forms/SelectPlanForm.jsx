/* eslint-disable react/prop-types */
import { useContext } from "react";
import PricingSection from "../PricingSection/PricingSection";
import { SelectedTimePlan } from "../../context/SelectedTimePlan";

const SelectPlanForm = ({
  nextStep,
  prevStep,
  // onChange,
  signup,
  setSignup,
}) => {
  const { handleTimePlan, setHandleTimePlan } = useContext(SelectedTimePlan);

  const changeTimePlan = () => {
    setHandleTimePlan(!handleTimePlan);
    const setTimePlan = signup.timePlan.map((item) => {
      if (handleTimePlan === true) {
        return {
          ...item,
          Monthly: true,
          Yearly: false,
        };
      } else {
        return {
          ...item,
          Monthly: false,
          Yearly: true,
        };
      }
    });
    setSignup({ ...signup, timePlan: setTimePlan });
  };

  return (
    <>
      <h2 className="text-primaryButton font-bold text-2xl">
        Select your plan
      </h2>
      <p className="text-slate-500 pr-2 mt-2 mb-2">
        You have the option of monthly or yearly billing.
      </p>
      <PricingSection
        signup={signup}
        // onChange={onChange}
        setSignup={setSignup}
        handleTimePlan={handleTimePlan}
      />

      <div className="flex flex-1 items-center justify-center">
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Monthly
        </span>
        <label className="inline-flex relative items-center cursor-pointer mx-3">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={changeTimePlan}
          />
          <div
            className={`w-10 h-5 bg-blue-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
               peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all
              dark:border-gray-600 peer-checked:bg-blue-600`}
          ></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Yearly
          </span>
        </label>
      </div>
      <div className="min-h-[25vh] flex items-center justify-between p-4">
        <button
          onClick={prevStep}
          className="text-gray-600 border border-gray-200 px-5 py-2 rounded-lg"
        >
          Go Back
        </button>

        <button
          onClick={nextStep}
          className="flex bg-primaryButton text-slate-100 py-2 px-4 rounded-md items-end justify-end"
        >
          Next Step
        </button>
      </div>
    </>
  );
};
export default SelectPlanForm;
