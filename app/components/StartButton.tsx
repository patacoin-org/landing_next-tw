import React from "react";

function _StartButton() {
  return (
    <>
      <div className="circle" onClick={() => {
                    const element = document.getElementById("how-buy");
                    element!.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                }}>
        ¡Empieza Ya!
        <div className="wave-1"></div>
        <div className="wave-2"></div>
        <div className="wave-3"></div>
      </div>
    </>
  );
}

const StartButton = React.memo(_StartButton);
export default StartButton;
