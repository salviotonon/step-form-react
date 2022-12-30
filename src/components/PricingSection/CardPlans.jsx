// eslint-disable-next-line react/prop-types
const CardPlan = ({ typePlan, img, handleTimePlan, price, timePlan }) => {

  return (
    <div className="flex items-start justify-start w-full mx-auto  cursor-pointer rounded-xl dark:border-gray-700">
      <div className="flex items-center">
        <img src={img} alt="ArcanePlan" />

        <div className="flex flex-col items-start mx-5 space-y-1">
          <h2 className="text-base font-bold text-gray-700 sm:text-2xl dark:text-gray-200">
            {typePlan}
          </h2>

          <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
            {`$${price}/${timePlan}`}
          </div>
          {handleTimePlan ? (
            <span className="text-blue-900 font-bold text-xs visible opacity-100 duration-500">
              2 months free
            </span>
          ) : (
            <span className="text-blue-900 font-bold text-xs invisible opacity-0">
              2 months free
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
