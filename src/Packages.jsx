import React from "react";
import image1 from "./assets/adventure.jpg";
import image2 from "./assets/culture.jpg";
import image3 from "./assets/cuisine.jpg";
import image4 from "./assets/Heritage.jpg";
import { useNavigate } from "react-router-dom";

const PackageCard = ({ title, description, destinations, imageUrl }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (title.startsWith("Adventure")) {
      navigate("/layout/adventure");
    } else if (title.startsWith("Culture")) {
      navigate("/layout/cultural");
    } else if (title.startsWith("Cuisine")) {
      navigate("/layout/cuisine");
    } else {
      navigate("/layout/spiritual");
    }
  };
  return (
    <div className="rounded-lg overflow-hidden shadow-lg text-md font-semibold bg-gray-200 w-full m-4 transition duration-300 ease-in-out transform hover:shadow-xl">
      <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4 opacity-50 hover:opacity-100">
        <div className="font-black text-5xl mb-2 text-teal-500 text-center cursor-default hover:cursor-pointer">
          {title}
        </div>
        <p className="text-gray-500 text-center cursor-pointer">
          {description}
        </p>
        <p className="text-gray-500 mt-2 text-center cursor-pointer">
          Destinations: {destinations.join(", ")}
        </p>
      </div>
      <div className="flex justify-center mt-2 mb-3">
        <button
          onClick={handleClick}
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const PackagesPage = () => {
  return (
    <div className="flex flex-wrap justify-evenly items-center mb-10">
      <PackageCard
        title="Adventure Package"
        description="Embark on thrilling adventures across India's diverse landscapes."
        destinations={["Himalayas", "Goa", "Kerala"]}
        imageUrl={image1}
      />
      <PackageCard
        title="Culture Package"
        description="Discover India's rich cultural heritage through vibrant festivals, traditional dances, and intricate art forms."
        destinations={["Rajasthan", "Varanasi", "Hampi"]}
        imageUrl={image2}
      />
      <PackageCard
        title="Cuisine Package"
        description="Indulge your taste buds with a gastronomic journey through India's diverse cuisine."
        destinations={["Delhi", "Mumbai", "Jaipur"]}
        imageUrl={image3}
      />
      <PackageCard
        title="Spiritual Package"
        description="Explore India's fascinating heritage sites and architectural marvels."
        destinations={["Agra", "Khajuraho", "Ellora Caves"]}
        imageUrl={image4}
      />
    </div>
  );
};

export default PackagesPage;
