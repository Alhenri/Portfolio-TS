import React from "react";
import ReactLoading from "react-loading";

const Loading: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactLoading type="spin" color="#eec9ff" />
    </div>
  );
};

export default Loading;
