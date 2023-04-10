import { useState } from "react";
import userStore from "../../../components/store/userStore";
import { User } from "../../../models/adduser";

export default function Test() {
  const [userName, setName] = useState("");
  const [userPassword, setPassword] = useState("");

  const handleInputUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleInputUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAddButtonClick = async () => {
    try {
      const newUser: User = {
        username: userName,
        password: userPassword
      };
      await userStore.addUserToApi(newUser);
    } catch (error) {
      console.error(`error ${error}`);
    }
  };

  return (
    <>
      <input type="text" value={userName} onChange={handleInputUserName} />
      <input type="password" value={userPassword} onChange={handleInputUserPassword} />
      <button onClick={handleAddButtonClick}>Add User</button>
    </>
  );
}
