import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUtensils } from "@fortawesome/free-solid-svg-icons";

function Cuisine() {
  const places = [
    {
      name: "Satsanga",
      image:
        "https://imgs.search.brave.com/yVJERx2pRrW2fN_CIq6L63XU159gPR8Xr4fNff51bRs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by9tc2lk/LTI4NzQyMDI0LHdp/ZHRoLTk2LGhlaWdo/dC02NS5jbXM",
      description:
        "Offers a mix of French and Indian vegetarian dishes like Thali, Croque Monsieur, and Baguettes.",
      connectivity:
        "Nearest airport: Nani Jaipur Airport\nNearest station: Bikaner Station",
      airport: "Pondicherry",
      station: "French-Indian Fusion Cuisine",
    },
    {
      name: "Taste of Spiti",
      image:
        "https://imgs.search.brave.com/52p-hJB2VfBP-9MhyclnRXP94maW3SxJBaZrAzBewIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWdu/ZXcub3V0bG9va2lu/ZGlhLmNvbS91cGxv/YWRpbWFnZS9saWJy/YXJ5LzE2XzkvMTZf/OV81L0lNQUdFXzE2/NTExNDMyNTkud2Vi/cA",
      description:
        "A local homestay experience offering authentic Spitian dishes like Thukpa, Momos, and Chhang (local barley beer).",
      connectivity:
        "Nearest airport: DumDum Kolkata\nNearest station: Bishnupur Junction",
      airport: "Himachal Pradesh",
      station: "Spitian Cuisine",
    },
    {
      name: "Cafe Diu",
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Egg_and_cheese_breakfast_sandwich_20200624211257.jpg",
      description:
        "Known for its fusion of Portuguese and Indian flavors, try dishes like Prawn Balchão and Chicken Xacuti.",
      connectivity:
        "Nearest airport: Khajurao\nNearest station: Jhansi Station",
      airport: "Gujarat",
      station: "Portuguese-Indian Fusion Cuisine",
    },
    {
      name: "Soho Cafe",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/1a/16/a9/e4/20191118-132758-largejpg.jpg",
      description:
        "Known for its Khasi and Jainsem (traditional attire) inspired dishes.",
      connectivity:
        "Nearest airport: Aurangabad Airport\nNearest station: Aurangabad Station",
      airport: "Shilong",
      station: "Khasi and Garo Tribal Cuisine",
    },
    {
      name: "Chandni Chowk",
      image:
        "https://imgs.search.brave.com/bRtfZli-P7pWm58wfVpytlo1IIYDdATh7kIrHVKsAZo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by8xMDQy/MTA5MDAvSmFsZWJp/LmpwZz93aWR0aD03/NDgmcmVzaXplPTQ",
      description:
        " Explore the narrow lanes for street food delights like Parathas at Parathe Wali Gali, Chaat at Natraj Chaat Bhandar, and Jalebis at Old Famous Jalebi Wala.",
      connectivity:
        "Nearest airport: Diu Airport\nNearest station: Junagadh Station",
      airport: "Delhi-6",
      station: "Street Food",
    },
    {
      name: "Sita Ram Diwan Chand",
      image:
        "https://imgs.search.brave.com/GBJKw8SsCXpyZKq3EK9FX3IlkXZ_LRPCGD2JlqrJ0pE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lLXNy/ZGMuY29tL2FwaS9h/c3NldHMvMTYyMTU4/NDM0M18xLnNpbmds/ZWJoYXR1cmUxLmpw/Zw",
      description:
        " Renowned for their crispy Bhaturas and flavorful Chole, often topped with a special chutney.",
      connectivity:
        "Nearest airport: Jolly Grant Airport\nNearest station: Haridwar Station",
      airport: "Paharganj",
      station: "Chole Bhature",
    },
    {
      name: "Bhagat Tara Chand",
      image:
        "https://imgs.search.brave.com/Td1nr5LAZO00DMjOUahsyPBkmfmCUXuwWBNiqa3m9LU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/ZGVmX2NvbnRlbnRf/Y2F0ZWdvcnkvYmhh/Z2F0LXRhcmFjaGFu/ZC83ODA5NzEzMC0y/NzAzNDc3ODk2MzY1/OTQ4LTQ3MzU4ODUz/NzQ0MzIyMTUwNDAt/bi1iaGFnYXQtdGFy/YWNoYW5kLTk4OS04/YmR5Zy5qcGc_dz0z/ODQwJnE9NzU",
      description:
        "Bhagat Tarachand is often praised for its authentic taste, especially its Chole Bhature, Dal Makhani, and other Punjabi specialties.",
      connectivity:
        "Nearest airport: Madurai Airport\nNearest station: Madurai Station",
      airport: "Mumbai",
      station: " North Indian, Punjabi",
    },
    {
      name: "Surya Mahal",
      image:
        "https://imgs.search.brave.com/_GejWFIi6IQj0OBUMu2Df1P65ODYLGUTvlkpoBbDIqg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9saWRpZnkuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMDEvRGFs/QmF0aS5qcGc",
      description:
        " Known for its traditional Rajasthani thalis with a wide variety of dishes including Lal Maas, Mohan Maas, and more.",
      connectivity:
        "Nearest airport: Rowriah Airport\nNearest station: Jorhat Station",
      airport: "Jaipur",
      station: "Rajasthani cuisine",
    },
    {
      name: "Gopal ji",
      image:
        "https://imgs.search.brave.com/dvNcL9gHyrJahFVZqi9QwpylfTj7mjxFooDwQo6EJtc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFjYWRlbWllLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNC9ndWphcmF0/aS10cmFkaXRpb25h/bC1jdWlzaW5lLWth/ZGhpLWJhanJhLmpw/Zw",
      description:
        "Known for its elaborate Gujarati thali with an array of dishes like Gujarati Dal, Roti, Sabzi, Farsan, Khichdi, and a variety of sweets.",
      connectivity:
        "Nearest airport: Jubbarhatti Airport\nNearest station: Shimla Station",
      airport: "Ahemdabad",
      station: "Gujarati cuisine",
    },
  ];

  const handleViewDetails = (placeName) => {
    alert(`Details for ${placeName}`);
  };

  return (
    <div className="p-5">
      <h1 className="text-[5rem] font-black text-opacity-50 text-teal-800 text-center mb-10 uppercase">
        indian Cuisine
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white border-2 flex flex-col cursor-pointer shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={place.image}
              className="w-full object-cover h-48"
              alt={place.name}
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="font-bold text-xl text-teal-800 mb-2">
                {place.name}
              </h2>
              <p className="text-sm text-gray-700 mb-4">{place.description}</p>
              <div className="flex flex-col">
                <h3 className="font-bold m-1">Details:</h3>
                {place.airport && (
                  <p className="text-sm flex items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    {place.airport}
                  </p>
                )}
                {place.station && (
                  <p className="text-sm flex items-center">
                    <FontAwesomeIcon icon={faUtensils} className="mr-2" />
                    {place.station}
                  </p>
                )}
              </div>
              <div className="flex justify-center mt-auto">
                <button
                  className="border-2 rounded-2xl w-32 font-bold p-1 text-lg bg-teal-500 hover:bg-teal-300 text-white"
                  onClick={() => handleViewDetails(place.name)}
                >
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cuisine;
