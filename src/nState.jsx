import React, { useState } from "react";
import StateComponent from "./Statetemplate";
import image1 from "./assets/Radhanagar.jpg";
import image2 from "./assets/Celluarjail.jpg";
import image3 from "./assets/Limestonecave.jpg";
import image4 from "./assets/Tiru.jpg";
import image5 from "./assets/Char.jpeg";
import image6 from "./assets/bor.jpeg";
import image7 from "./assets/Tawang.jpg";
import image8 from "./assets/Ziro.jpg";
import image9 from "./assets/Sela.jpeg";
import image10 from "./assets/Kaziranga.jpg";
import image11 from "./assets/Kamakhya.jpg";
import image12 from "./assets/Maujli.jpeg";
import image13 from "./assets/Mahabodhi.jpg";
import image14 from "./assets/Nalanda.jpg";
import image15 from "./assets/Vikramshila.jpg";
import image16 from "./assets/Rock.jpg";
import image17 from "./assets/Sukhna.jpeg";
import image18 from "./assets/Rose.jpeg";
import image19 from "./assets/Chitrakote.jpg";
import image20 from "./assets/Tirathgarh.jpeg";
import image21 from "./assets/Kanger.jpg";
import image22 from "./assets/Dadra.jpg";
import image23 from "./assets/Diu.jpg";
import image24 from "./assets/Nani.jpg";
import image25 from "./assets/India.jpeg";
import image26 from "./assets/Qutub.jpeg";
import image27 from "./assets/Lotus.jpeg";

const State = () => {
  const [selectedState, setSelectedState] = useState(null);

  const statesData = [
    {
      stateName: "Andaman and Nicobar Islands",
      places: [
        {
          name: "Radhanagar Beach",
          image: image1,
          description:
            "Ranked as the #1 beach in Asia by Time Magazine in 2004",
          speciality:
            "Radhanagar Beach is a beautiful beach in Havelock Island, Andaman. It is famous for its crystal-clear turquoise waters and silky white sand as well as a breathtaking view.",
        },
        {
          name: "Cellular Jail",
          image: image2,
          description: "Symbol of India's struggle for independence",
          speciality:
            "Cellular Jail, also known as Kala Pani, is a colonial prison located in Port Blair, Andaman. It was used by the British to exile political prisoners.",
        },
        {
          name: "Limestone Caves",
          image: image3,
          description: "Accessed by a boat ride through mangrove forests",
          speciality:
            "Limestone Caves, located in Baratang Island, Andaman, are natural caves formed over centuries by the dissolution of limestone rocks. They are home to unique geological formations and stalactites.",
        },
      ],
    },
    {
      stateName: "Andhra Pradesh",
      places: [
        {
          name: "Tirumala Temple",
          image: image4,
          description: "Hindu temple dedicated to Lord Venkateswara",
          speciality:
            "Tirumala Temple, also known as Sri Venkateswara Temple, is a renowned Hindu temple dedicated to Lord Venkateswara located in Tirumala, Andhra Pradesh. It is one of the richest temples in the world and attracts millions of pilgrims annually.",
        },
        {
          name: "Charminar",
          image: image5,
          description: "Iconic monument in Hyderabad",
          speciality:
            "Charminar is an iconic monument and mosque located in the heart of Hyderabad. It was built in 1591 by Sultan Muhammad Quli Qutb Shah to commemorate the end of a deadly plague.",
        },
        {
          name: "Borra Caves",
          image: image6,
          description: "Limestone caves in the Eastern Ghats",
          speciality:
            "Borra Caves are natural limestone caves located in the Ananthagiri Hills of the Eastern Ghats in Andhra Pradesh. They are known for their unique formations, including stalactites and stalagmites, and are a popular tourist attraction.",
        },
      ],
    },
    {
      stateName: "Arunachal Pradesh",
      places: [
        {
          name: "Tawang Monastery",
          image: image7,
          description: "Largest monastery in India",
          speciality:
            "Tawang Monastery, also known as Galden Namgey Lhatse, is a Buddhist monastery in Tawang, Arunachal Pradesh. It is one of the largest monasteries in India and is an important pilgrimage site for Buddhists.",
        },
        {
          name: "Ziro Valley",
          image: image8,
          description: "UNESCO World Heritage Site",
          speciality:
            "Ziro Valley, located in Lower Subansiri district, is famous for its picturesque landscapes, rice fields, and unique Apatani tribal culture. It was designated as a UNESCO World Heritage Site in 2012.",
        },
        {
          name: "Sela Pass",
          image: image9,
          description: "High-altitude mountain pass",
          speciality:
            "Sela Pass is a high-altitude mountain pass located in the Tawang district of Arunachal Pradesh. It offers breathtaking views of snow-capped peaks, lakes, and scenic landscapes. The pass is often covered in snow, making it a popular tourist destination during winters.",
        },
      ],
    },
    {
      stateName: "Assam",
      places: [
        {
          name: "Kaziranga National Park",
          image: image10,
          description:
            "Home to the world's largest population of one-horned rhinoceroses",
          speciality:
            "Kaziranga National Park, located in the Golaghat and Nagaon districts of Assam, is a UNESCO World Heritage Site. It is famous for its rich biodiversity, including the highest density of tigers among protected areas in the world.",
        },
        {
          name: "Kamakhya Temple",
          image: image11,
          description: "Important Hindu pilgrimage site",
          speciality:
            "Kamakhya Temple, situated atop Nilachal Hill in Guwahati, is one of the most revered Hindu shrines in India. Dedicated to the goddess Kamakhya, it attracts thousands of devotees and tourists, especially during the Ambubachi Mela.",
        },
        {
          name: "Majuli",
          image: image12,
          description: "World's largest river island",
          speciality:
            "Majuli, located on the Brahmaputra River in Assam, is the world's largest river island. It is known for its vibrant culture, rich biodiversity, and traditional Vaishnavite monasteries (Satras), which are centers of Assamese art and culture.",
        },
      ],
    },
    {
      stateName: "Bihar",
      places: [
        {
          name: "Mahabodhi Temple",
          image: image13,
          description: "A UNESCO World Heritage Site",
          speciality:
            "Mahabodhi Temple, located in Bodh Gaya, is a UNESCO World Heritage Site and one of the most sacred places for Buddhists. It marks the spot where Gautama Buddha is said to have attained enlightenment under the Bodhi tree.",
        },
        {
          name: "Nalanda University",
          image: image14,
          description: "Ancient center of learning",
          speciality:
            "Nalanda University, located near Patna, was one of the earliest and most renowned centers of learning in the ancient world. It attracted scholars and students from all over the world and played a significant role in the development of Buddhism.",
        },
        {
          name: "Vikramshila",
          image: image15,
          description: "Ancient Buddhist university",
          speciality:
            "Vikramshila was an ancient Buddhist university located in present-day Bihar. It was established during the Pala Empire and was known for its studies in Buddhist philosophy, tantra, and logic. Although now in ruins, it remains an important archaeological site.",
        },
      ],
    },
    {
      stateName: "Chandigarh",
      places: [
        {
          name: "Rock Garden",
          image: image16,
          description: "Sculpture garden made from industrial and home waste",
          speciality:
            "Rock Garden, also known as Nek Chand's Rock Garden, is a unique sculpture garden located in Sector 1 of Chandigarh. It was created by Nek Chand, a government official, using industrial and home waste materials. The garden is a testament to human creativity and environmental conservation, featuring sculptures made from recycled materials such as broken bangles, tiles, and ceramic pots.",
        },
        {
          name: "Sukhna Lake",
          image: image17,
          description: "Artificial lake at the foothills of the Himalayas",
          speciality:
            "Sukhna Lake is an artificial reservoir located at the foothills of the Shivalik range in Chandigarh. It was created in 1958 by damming the Sukhna Choe stream. The lake is a popular spot for recreational activities such as boating, jogging, and picnicking. Visitors can also enjoy stunning views of the surrounding hills and sunset.",
        },
        {
          name: "Rose Garden",
          image: image18,
          description: "Largest rose garden in Asia",
          speciality:
            "Rose Garden, also known as Zakir Hussain Rose Garden, is the largest rose garden in Asia, spanning over 30 acres in Chandigarh's Sector 16. It features thousands of rose bushes representing hundreds of different varieties. The garden hosts an annual rose festival, attracting visitors from around the world to admire the colorful blooms and participate in cultural events.",
        },
      ],
    },
    {
      stateName: "Chattisgarh",
      places: [
        {
          name: "Chitrakote Falls",
          image: image19,
          description: "Widest waterfall in India",
          speciality:
            "Chitrakote Falls, also known as the 'Niagara Falls of India', is located on the Indravati River in Bastar district. It is the widest waterfall in India and offers breathtaking views, especially during the monsoon season.",
        },
        {
          name: "Tirathgarh Falls",
          image: image20,
          description: "Scenic waterfall surrounded by lush greenery",
          speciality:
            "Tirathgarh Falls is a picturesque waterfall located near Jagdalpur in Bastar district. It is surrounded by dense forests and offers a serene environment for nature lovers and photographers.",
        },
        {
          name: "Kanger Valley National Park",
          image: image21,
          description: "Rich biodiversity and limestone caves",
          speciality:
            "Kanger Valley National Park, located in Bastar district, is known for its rich biodiversity, dense forests, and unique limestone caves. It is home to various species of flora and fauna, including the endangered Bastar hill myna.",
        },
      ],
    },
    {
      stateName: "Daman",
      places: [
        {
          name: "Dadra Garden",
          image: image22,
          description:
            "Picturesque garden with a mini zoo and musical fountain",
          speciality:
            "Dadra Garden, also known as Vandhara Garden, is a picturesque garden located in Dadra and Nagar Haveli. It features lush greenery, colorful flower beds, and a mini zoo with various species of birds and animals. Visitors can also enjoy the mesmerizing musical fountain show in the evenings.",
        },
        {
          name: "Diu Fort",
          image: image23,
          description: "Historic Portuguese fort overlooking the Arabian Sea",
          speciality:
            "Diu Fort is a historic fort located on the eastern end of Diu Island in Daman and Diu. Built by the Portuguese in the 16th century, the fort offers panoramic views of the Arabian Sea and the surrounding coastline. Visitors can explore its massive walls, cannons, lighthouse, and ancient churches.",
        },
        {
          name: "Nani Daman Beach",
          image: image24,
          description: "Quaint beach with a tranquil ambiance",
          speciality:
            "Nani Daman Beach is a quaint beach located in the town of Daman in Daman and Diu. It is known for its serene ambiance, golden sands, and gentle waves. Visitors can relax on the beach, enjoy a leisurely stroll along the shore, or indulge in water sports such as swimming and jet skiing.",
        },
      ],
    },
    {
      stateName: "Delhi",
      places: [
        {
          name: "India Gate",
          image: image25,
          description: "War memorial and iconic landmark",
          speciality:
            "India Gate is a war memorial located in the heart of New Delhi. It was built in memory of the Indian soldiers who died in World War I. The monument is surrounded by lush green lawns and serves as a popular spot for picnics and evening strolls.",
        },
        {
          name: "Qutub Minar",
          image: image26,
          description: "Tallest brick minaret in the world",
          speciality:
            "Qutub Minar is a UNESCO World Heritage Site and the tallest brick minaret in the world, located in Mehrauli, Delhi. It was built in the 12th century by Qutb-ud-din Aibak, the founder of the Delhi Sultanate. Visitors can admire its intricate carvings and climb to the top for panoramic views of the city.",
        },
        {
          name: "Lotus Temple",
          image: image27,
          description: "Bahá'í House of Worship known for its lotus-like shape",
          speciality:
            "Lotus Temple, also known as the Bahá'í House of Worship, is a prominent landmark in Delhi. It is renowned for its distinctive lotus-like shape and serves as a place of worship for people of all faiths. The temple's serene ambiance and beautiful architecture make it a must-visit attraction.",
        },
      ],
    },
  ];

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
  };

  return (
    <div>
      {statesData.map((state, index) => (
        <React.Fragment key={index}>
          <button onClick={() => handleStateClick(state.stateName)}>
            {state.stateName}
          </button>
          {index < statesData.length - 1 && <br />}{" "}
          {/* Conditionally render line break */}
        </React.Fragment>
      ))}
      {selectedState && (
        <StateComponent
          stateName={selectedState}
          places={
            statesData.find((state) => state.stateName === selectedState).places
          }
        />
      )}
    </div>
  );
};

export default State;
