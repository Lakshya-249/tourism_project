import React, { useRef, useState } from "react";

import ReactDatamaps from "react-india-states-map";
import { getEvents } from "./Service/signup";

const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?",
    },
  },
};

const Map = () => {
  const [info, setinfo] = useState("");
  const ref = useRef("");
  const [activeState, setactiveState] = useState({
    data: STATES.Maharashtra,
    name: "India",
  });

  const [stateLists, setStateLists] = useState(STATES);

  const stateOnClick = async (data, name) => {
    console.log(ref.current);
    // console.log(data);
    const response = await getEvents(ref.current);
    console.log(response);
    setinfo(response.data);
    setactiveState({ data, name });
  };

  return (
    <div className="flex items-stretch flex-col">
      <div className="w-[20rem] h-auto p-5 bg-black text-white text-md font-semibold rounded-xl shadow-lg self-end">
        {/* {ref.current} */}
        {info}
      </div>
      <ReactDatamaps
        regionData={["Maharashtra"]}
        mapLayout={{
          hoverTitle: "Count",
          noDataColor: "pink",
          borderColor: "#ffffff",
          hoverBorderColor: "pink",
          hoverColor: "green",
          postion: "static",
        }}
        hoverComponent={({ value }) => {
          return (
            <>
              {/* <p className="m-5">{value.name}</p> */}
              <p className="hidden">{(ref.current = value.name)}</p>
            </>
          );
        }}
        onClick={stateOnClick}
        activeState={activeState}
      />
    </div>
  );
};
export default Map;
