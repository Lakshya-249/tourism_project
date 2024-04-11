import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "./features/user";
import { useNavigate } from "react-router-dom";
import { register } from "./Service/signup";

const Signintemplate = () => {
  const [formdata, setdata] = useState({
    username: "",
    password: "",
  });
  const [field, setfield] = useState(false);
  const [isusername, setusername] = useState(true);

  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const change = () => {
      for (let i in formdata) {
        // console.log(i);
        if (formdata[i].trim() === "") {
          setfield(false);
          return;
        }
      }
      setfield(true);
    };
    change();
  }, [formdata]);

  const handleClick = async () => {
    if (field) {
      const data = await register(formdata, "login");
      if (data == null) {
        setusername(false);
        return;
      }
      navigate("/layout/home");
    }
  };

  const handleChange = (e) => {
    setdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-sans w-[80%] text-left space-y-[1.5rem] font-extrabold max-sm:w-full">
      <p className="font-bold text-md text-right text-gray-500">
        Not a member?{" "}
        <span
          onClick={() => navigate("/")}
          className="text-purple-600 hover:cursor-pointer"
        >
          Sign up
        </span>
      </p>
      <div>
        <p className="text-[3rem] mb-10">Sign in to NamasteNomad</p>
        <p
          id="errorPara"
          className={`text-red-400 text-md font-semibold ${
            isusername ? "hidden" : ""
          }`}
        >
          &nbsp;
          <span className="text-[1.6rem]">.</span> Username/Password Incorrect
        </p>
      </div>
      <div className="space-y-[2rem] w-[71.6%] max-sm:w-full">
        <div>
          <p className="text-md">
            <span className={`${isusername ? "hidden" : ""}`}>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                style={{ color: "#ee6d6d" }}
              />
            </span>
            &nbsp; Username
          </p>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="User_234"
            className={`rounded-xl py-2 outline-none px-5 font-medium ${
              isusername ? "bg-gray-100" : "bg-red-100 placeholder-red-400"
            } w-full`}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <p className="text-md">
            <span className={`${isusername ? "hidden" : ""}`}>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                style={{ color: "#ee6d6d" }}
              />
            </span>
            &nbsp; Password
          </p>
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="6+ characters"
            className="bg-gray-100 rounded-xl py-2 outline-none px-5 font-medium w-full mb-5"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <button
            onClick={handleClick}
            className={`px-12 py-2 ${
              field ? "bg-teal-500" : "bg-teal-200"
            } font-semibold text-white rounded-xl mb-4`}
          >
            Sign In
          </button>
          <p className="text-gray-400 text-sm font-medium">
            This is protected by the CAPTCHA and the Google <br />
            <span className="text-purple-600">Privacy Policy</span> and{" "}
            <span className="text-purple-600">Terms of Conditions</span> apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signintemplate;
