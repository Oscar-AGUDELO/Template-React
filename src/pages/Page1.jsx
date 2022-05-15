import React from "react";
import "../assets/Page1.css";
import RandomApi from "../components_Children/RandomApi";
// import NameOfComponent from "../components_Fathers/NameOfComponent";
// import NameOfComponent from "../components_Fathers/NameOfComponent";
// import NameOfComponent from "../components_Fathers/NameOfComponent";

const Page1 = () => {
  return (

    <div className="Page1DivContainer">
      <h2>Page 1</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum nobis animi harum exercitationem corrupti quis est adipisci, dolorum ratione culpa pariatur non odit vel quaerat dignissimos, voluptate cupiditate natus!Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <RandomApi />
    </div>

  );
};

export default Page1;
