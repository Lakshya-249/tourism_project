import React from "react";

const StateComponent = ({ stateName, places }) => {
  const handleClick = () => {
    alert(`You clicked on View Details!`);
  };

  return (
    <div className="mt-[2rem]">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Welcome to {stateName}!
      </h1>

      {/* Popular Places */}
      <div className="flex flex-row justify-center">
        {places.map((place, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="flex flex-col h-full rounded-lg shadow-md">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-[10rem] object-cover rounded-t-lg"
              />
              <div className="flex flex-col justify-between flex-grow p-4 bg-white rounded-b-lg">
                <div>
                  <p className="text-xl font-semibold mb-2">{place.name}</p>
                  <p className="text-sm mb-4">{place.description}</p>
                  <p className="text-xs text-gray-600 mb-2">
                    {place.speciality}
                  </p>
                </div>
                <button
                  onClick={handleClick}
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[15rem]"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateComponent;
