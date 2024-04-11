import React, { useEffect } from "react";
import Logintemplate from "./register";
import { istoken } from "./Service/signup";

const SignUp = () => {
  useEffect(() => {
    const check = () => {
      const val = istoken();
      if (val) {
        window.location.href = "/layout/home";
      }
      return;
    };
    check();
  }, []);
  return (
    <div className="flex flex-wrap w-full h-full max-sm:space-y-0">
      <div className="w-[35%] max-sm:w-full max-sm:bg-cover max-sm:h-auto text-left h-full p-10 bg-[url('./assets/Kerala.jpg')] bg-cover bg-no-repeat">
        <h1 className="text-white text-opacity-50 font-sans text-[4rem] max-sm:text-[3rem] font-extrabold">
          Discover the world's Top Desitinations and places
        </h1>
      </div>
      <div className="flex justify-end w-[65%] max-sm:w-full max-sm:h-auto h-full px-8 py-5">
        <Logintemplate />
      </div>
    </div>
  );
};

export default SignUp;
