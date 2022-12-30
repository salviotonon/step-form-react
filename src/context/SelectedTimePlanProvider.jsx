/* eslint-disable react/prop-types */
import { useState } from "react";
import { SelectedTimePlan } from "./SelectedTimePlan";

export const SelectedTimePlanProvider = ({ children }) => {
  const [handleTimePlan, setHandleTimePlan] = useState(false);

  return (
    <SelectedTimePlan.Provider value={{ handleTimePlan, setHandleTimePlan }}>
      {children}
    </SelectedTimePlan.Provider>
  );
};
