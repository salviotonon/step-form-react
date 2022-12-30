/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import CardPickAdd from "../PickAdd/CardPickAdd";
import { SelectedTimePlan } from "../../context/SelectedTimePlan";
import { SignupContext } from "../../context/signupContext";

export const PickAddForm = ({ prevStep, nextStep }) => {
  const { handleTimePlan, setHandleTimePlan } = useContext(SelectedTimePlan);
  const { signup, setSignup } = useContext(SignupContext);

  console.log(signup)


  const handleChange = (e) => {
    const { value } = e.target;

    setSignup((prev) => {
      if (prev.pickAddOns.includes(value)) {
        return {
          ...prev,
          pickAddOns: prev.pickAddOns.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          pickAddOns: [...prev.pickAddOns, value],
        };
      }
    });
  };


  return (
    <>
      <h2 className="text-primaryButton font-bold text-2xl">Pick add-ons</h2>
      <p className="text-slate-500 pr-2 mt-2 mb-2">
        Add-ons help enhance your gaming experience
      </p>
      <ul className="grid gap-3 w-full sm:grid-cols-1mt-6">
        <CardPickAdd
          id={"online-service"}
          name={"Online service"}
          info={"Acess to multiplayer games"}
          value={"Online service"}
          handleChange={handleChange}
          priceService={!handleTimePlan ? 1 : 10}
        />
        <CardPickAdd
          id={"larger-storage"}
          name={"Larger storage"}
          info={"Extra 1 TB of cloud save"}
          value={"Larger storage"}
          handleChange={handleChange}
          priceService={!handleTimePlan ? 2 : 20}
        />
        <CardPickAdd
          id={"customizable-profile"}
          name={"Customizable profile"}
          info={"Custom theme on your profile"}
          value={"Customizable profile"}
          handleChange={handleChange}
          priceService={!handleTimePlan ? 2 : 20}
        />
      </ul>
      <div className="min-h-[25vh] flex items-end justify-between p-4">
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
