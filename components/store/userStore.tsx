import axios from "axios";

import { User } from "../../models/adduser";

class UserStore {
  userList: User[] = [];

  addUserToApi = async (user: User) => {
    try {
      const apiUrl = "https://dummyjson.com/auth/login";
      await axios.post(apiUrl, user);
      console.log("User added successfully.");
    } catch (error) {
      console.error(`error ${error}`);
    }
  };
}

const userStore = new UserStore();
export default userStore;
