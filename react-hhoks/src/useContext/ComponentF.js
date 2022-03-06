import React, { useContext } from "react";
import { UserContext, BrandContext } from "../App";

const ComponentF = () => {
  const user = useContext(UserContext);
  const brand = useContext(BrandContext);
  console.log(user);
  return (
    // <UserContext.Consumer>
    //   {(val) => {
    //     return (
    //       <BrandContext.Consumer>
    //         {(brand) => {
    //           return (
    <h1>
      {/* User Name is {val} & brand name is {brand} */}
      User First Name is {user.fName} & User Last Name is {user.lName} and  brand
      name is {brand}
    </h1>
    //           );
    //         }}
    //       </BrandContext.Consumer>
    //     );
    //   }}
    // </UserContext.Consumer>
  );
};

export default ComponentF;
