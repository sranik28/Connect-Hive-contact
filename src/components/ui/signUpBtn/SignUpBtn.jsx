import React from "react";
import "./SingnUpBtn.css"

const SignUpBtn = ({name}) => {
  return (
    <div>
      <button className="btn">
       {name}
        <div class="arrow-wrapper">
          <div class="arrow"></div>
        </div>
      </button>
    </div>
  );
};

export default SignUpBtn;
