/* eslint-disable react/prop-types */
const CardPickAdd = ({ id, name, info, value, handleChange, priceService }) => {


  return (
    <>
      <ul>
        <li className="relative">
          <input
            className="sr-only peer"
            type="checkbox"
            value={value}
            name="answer"
            id={id}
            onChange={handleChange}
          />
          <label
            className="flex justify-between pl-12 pr-2 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-violet-500 peer-checked:ring-1 peer-checked:border-transparent"
            htmlFor={id}
          >
            <div>
              <h3 className="text-blue-700 font-semibold text-sm">{name}</h3>
              <span className="text-xs text-gray-400">{info}</span>
            </div>
            <div>
              <span className="text-violet-700 text-sm">{`+$${priceService}/mo`}</span>
            </div>
          </label>
          <div className="absolute top-5 left-3 items-center invisible peer-checked:visible opacity-0 peer-checked:opacity-100 transition-all duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 fill-violet-600 text-slate-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </li>
      </ul>
    </>
  );
};

export default CardPickAdd;
