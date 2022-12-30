import { useContext } from "react";
import FinishedForm from "./FinishedForm";
import PersonalForm from "./PersonalForm";
import { PickAddForm } from "./PickAddForm";
import SelectPlanForm from "./SelectPlanForm";
import { SignupContext } from "../../context/signupContext";
import bgImg from "../../assets/images/bg-sidebar-mobile.svg";
import Carrosel from "../Carrosel/Carrosel";



export const Signup = () => {
  const { signup, setSignup } = useContext(SignupContext);



  const nextStep = (e) => {
    e.preventDefault();
    const { step } = signup;
    setSignup({ ...signup, step: step + 1 });
  };
  const prevStep = (e) => {
    e.preventDefault();
    const { step } = signup;
    setSignup({ ...signup, step: step - 1 });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name } = e.target;

    const updateContactList = signup.contact.map((item) => {
      if (name === "name") {
        return {
          ...item,
          name: e.target.value,
        };
      } if (name === "email") {
        return {
          ...item,
          email: e.target.value,
        };
      } if (name === "phone") {
        return {
          ...item,
          phone: e.target.value,
        };
      }
      return item
    });
    setSignup({ ...signup, contact: updateContactList });
  };

  // const setTypePlan = (newValue) => {
  //   setSignup(newvalue);
  // };


  return (
    <div className="min-h-[100vh] bg-slate-200">
      <div className="relative sm:flex sm:flex-1 justify-center items-center bg-slate-200 h-[600px]">
        <div className="relative sm:max-w-[25%] sm:w-[100%] sm:rounded-2xl sm:h-[600px] overflow-hidden">
          <div className="bg-bg-mobile top-0 -bottom-10 right-0 left-0 min-h-[35vh] bg-no-repeat bg-cover sm:absolute sm:bg-bg-desktop sm:bg-cover sm:inset-0">
          </div>
          <Carrosel step={signup.step} />
        </div>
        <div className="p-4 absolute top-[20vh] sm:static sm:h-[100%]">
          <form className="my-0 mx-auto px-4 py-6 bg-white rounded-md sm:static sm:flex sm:flex-col sm:h-[100%]] md:w-full md:p-6">
            {signup.step == 1 && (
              <PersonalForm
                nextStep={nextStep}
                handleChange={handleChange}
                signup={signup}
                setSignup={setSignup}
              />
            )}

            {signup.step == 2 && (
              <SelectPlanForm
                prevStep={prevStep}
                nextStep={nextStep}
                // onChange={setTypePlan}
                signup={signup}
                setSignup={setSignup}
              />
            )}
            {signup.step == 3 && (
              <PickAddForm
                prevStep={prevStep}
                nextStep={nextStep}
                signup={signup}
                setSignup={setSignup}
              />
            )}
            {signup.step == 4 && (
              <FinishedForm
                prevStep={prevStep}
                signup={signup}
                setSignup={setSignup}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
