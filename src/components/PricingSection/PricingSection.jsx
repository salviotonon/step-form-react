/* eslint-disable react/prop-types */
import CardPlan from "./CardPlans";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PricingSection = ({ signup, handleTimePlan, setSignup }) => {
  const [selectedValue, setSelectedValue] = useState("arcade");


  const {
    arcaneMonthly,
    advancedMonthly,
    proMonthly,
    arcaneYearly,
    advancedYearly,
    proYearly,
    isMonthly,
    isYear,
    arcane,
    advanced,
    pro,
  } = signup;

  const selectedTypePlan = (e) => {
    const option = e.target.value;

    if (option === "arcade") {
      setSelectedValue("arcade");
    }
    if (option === "advanced") {
      setSelectedValue("advanced");
    }
    if (option === "pro") {
      setSelectedValue("pro");
    }
    setSignup((prev) => {
      const typePlanSelected = { ...prev };
      typePlanSelected.typePlan[0] = option;
      return typePlanSelected;
    });
  };
  // eslint-disable-next-line react/prop-types
  return (
    <>
      <ul className="grid gap-6 w-full grid-cols-1 sm:grid-cols-1">
        <li>
          <input
            type="radio"
            id="arcade"
            name="plans"
            value="arcade"
            className="hidden peer"
            checked={selectedValue === "arcade"}
            onChange={selectedTypePlan}
          />
          <label
            htmlFor="arcade"
            className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blproPriceue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <CardPlan
              typePlan={arcane}
              signup={signup}
              img={arcadeIcon}
              handleTimePlan={handleTimePlan}
              price={handleTimePlan ? arcaneYearly : arcaneMonthly}
              timePlan={handleTimePlan ? isYear : isMonthly}
            />
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="advanced"
            name="plans"
            value="advanced"
            className="hidden peer"
            checked={selectedValue === "advanced"}
            onChange={selectedTypePlan}
          />
          <label
            htmlFor="advanced"
            className="flex p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <CardPlan
              typePlan={advanced}
              signup={signup}
              img={advancedIcon}
              handleTimePlan={handleTimePlan}
              price={handleTimePlan ? advancedYearly : advancedMonthly}
              timePlan={handleTimePlan ? isYear : isMonthly}
            />
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="pro-plan"
            name="plans"
            value="pro"
            className="hidden peer"
            checked={selectedValue === "pro"}
            onChange={selectedTypePlan}
          />
          <label
            htmlFor="pro-plan"
            className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <CardPlan
              typePlan={pro}
              signup={signup}
              img={proIcon}
              handleTimePlan={handleTimePlan}
              price={handleTimePlan ? proYearly : proMonthly}
              timePlan={handleTimePlan ? isYear : isMonthly}
            />
          </label>
        </li>
      </ul>
    </>
  );
};

export default PricingSection;
