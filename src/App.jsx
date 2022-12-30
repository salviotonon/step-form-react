import { BrowserRouter, Route, Routes } from "react-router-dom";
import FinishedForm from "./components/Forms/FinishedForm";
import { PickAddForm } from "./components/Forms/PickAddForm";
import SelectPlanForm from "./components/Forms/SelectPlanForm";
import PersonalForm from "./components/Forms/PersonalForm";
import { Signup } from "./components/Forms/Signup";

import { SignupContextProvider } from "./context/SignupContextProvider";
import { SelectedTimePlanProvider } from "./context/SelectedTimePlanProvider";

function App() {
  return (
    <BrowserRouter>
      <SignupContextProvider>
        <SelectedTimePlanProvider>
          <Routes>
            <Route path="/" element={<Signup />} >
              <Route path="/" element={<PersonalForm />} />
              <Route path="finished" element={<FinishedForm />} />
              <Route path="pick" element={<PickAddForm />} />
              <Route path="selectPlan" element={<SelectPlanForm />} />
            </Route>
          </Routes>
        </SelectedTimePlanProvider>
      </SignupContextProvider>
    </BrowserRouter>
  );
}

export default App;
