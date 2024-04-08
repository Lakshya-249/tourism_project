import React from "react";
import image from "./assets/facebook.png";
import image2 from "./assets/instagram.png";
import image3 from "./assets/twitter.png";

function Footer() {
  const handleFacebookClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61557288390655",
      "_blank"
    );
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/integrelearn/", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/integrelea55908", "_blank");
  };

  return (
    <div className="flex items-center w-full bg-[#8B8589] rounded-md justify-around flex-wrap p-10">
      <div>
        <b>Stay Connected</b>
        <p>Follow us on social media for updates, tips, and more!</p>
        <div className="flex mt-2 justify-center">
          <img
            src={image}
            alt="facebook"
            className="h-8 w-8 cursor-pointer"
            onClick={handleFacebookClick}
          />
          <img
            src={image2}
            alt="instagram"
            className="h-8 w-8 cursor-pointer ml-2"
            onClick={handleInstagramClick}
          />
          <img
            src={image3}
            alt="twitter"
            className="h-8 w-8 cursor-pointer ml-2"
            onClick={handleTwitterClick}
          />
        </div>
      </div>
      <div className="border-gray-350 pl-4 ml-4">
        <div>
          <h3>
            <b>Quick Links</b>
          </h3>
          <ol style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Contact Us</li>
          </ol>
        </div>
      </div>
      <div className="border-gray-350 pl-4 ml-4">
        <div>
          <h3>
            <b>Address</b>
          </h3>
          IntegreLearn, <br />
          1/4 Saraswati Bhawan, Lalita Park, <br />
          Laxmi Nagar, New Delhi, Delhi 110092
        </div>
      </div>
      <div className="border-gray-350 pl-4 ml-4">
        <div>
          <h3>
            <b>Contact Us</b>
          </h3>
          <p>
            Email:{" "}
            <a
              href="mailto:Integrelearn@gmail.com "
              className="hover:underline"
            >
              Integrelearn@gmail.com
            </a>
          </p>
          <p>
            Phone: <span className="cursor-pointer">+91 8595695XXX</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
