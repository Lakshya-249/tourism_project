import React, { useRef, useState } from "react";

import ReactDatamaps from "react-india-states-map";

const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?",
    },
  },
};

const Map = () => {
  const ref = useRef("");
  const [activeState, setactiveState] = useState({
    data: STATES.Maharashtra,
    name: "India",
  });

  const [stateLists, setStateLists] = useState(STATES);

  const stateOnClick = (data, name) => {
    console.log(ref.current);
    console.log(data);
    setactiveState({ data, name });
  };

  return (
    <>
      <div className=""></div>
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
    </>
  );
};
export default Map;
