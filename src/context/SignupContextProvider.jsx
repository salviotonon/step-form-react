/* eslint-disable react/prop-types */
import { useState } from "react";
import { SignupContext } from "./signupContext";

export const SignupContextProvider = ({ children }) => {
  const [signup, setSignup] = useState({
    step: 1,
    contact: [{ name: "", email: "", phone: "" }],
    timePlan: [{ Monthly: true, Yearly: false }],
    typePlan: ["arcane"],
    pickAddOns: [],
    totalAmount: [
      {
        arcaneMonthly: 9,
        advancedMonthly: 12,
        proMonthly: 15,
        arcaneYearly: 90,
        advancedYearly: 120,
        proYearly: 150,
        onlineServiceMonthly: 1,
        largerStorageMonthly: 2,
        customizableProfileMonthly: 2,
        onlineServiceYearly: 10,
        largerStorageYearly: 20,
        customizableProfileYearly: 20,
      },
    ],
    arcane: "Arcane",
    advanced: "Advanced",
    pro: "Pro",
    arcaneMonthly: 9,
    advancedMonthly: 12,
    proMonthly: 15,
    arcaneYearly: 90,
    advancedYearly: 120,
    proYearly: 150,
    isYear: "yr",
    isMonthly: "mo",
    onlineServiceMonthly: 1,
    largerStorageMonthly: 2,
    customizableProfileMonthly: 2,
    onlineServiceYearly: 10,
    largerStorageYearly: 20,
    customizableProfileYearly: 20,
  });

  return (
    <SignupContext.Provider value={{ signup, setSignup }}>
      {children}
    </SignupContext.Provider>
  );
};
