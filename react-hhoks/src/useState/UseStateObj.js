import { useState } from "react";

const UseStateObj = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <lable>First Name: </lable>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => {
            console.log(name);
            setName({...name, firstName: e.target.value });
        }}
      />
      <label>Last Name: </label>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => {
            console.log(name);
            setName({ ...name, lastName: e.target.value });
        }}
      />
      <h1>Your First Name is = {name.firstName}</h1>
      <h1>Your Last Name is = {name.lastName}</h1>
    </div>
  );
};

export default UseStateObj;
