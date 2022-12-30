/* eslint-disable react/prop-types */
import { Input } from "../Input";

const PersonalForm = ({ nextStep, signup, handleChange }) => {
  return (
    <>
      <h2 className="text-primaryButton font-bold text-2xl">Personal Info</h2>
      <p className="text-slate-500 pr-2 mt-2 mb-2">
        Please provide your name, email adress, and phone number
      </p>
      <Input
        id="name"
        name="name"
        type="text"
        label="Name"
        handleChange={handleChange}
        value={signup.contact[0].name}
        placeholder={"e.g. Stephen King"}
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="Email Adress"
        handleChange={handleChange}
        value={signup.contact[0].email}
        placeholder={"e.g. stephenking@lorem.com"}
      />
      <Input
        id="phone"
        name="phone"
        type="text"
        label="Phone Number"
        handleChange={handleChange}
        value={signup.contact[0].phone}
        placeholder={"e.g +1 234567 890"}
      />
      <div className="min-h-[25vh] flex items-end justify-end p-4">
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

export default PersonalForm;
