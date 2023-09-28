// ----------------------------------------------------------------------
import {   getResFromLocalStorage} from "../service/localStorage";

const user  = getResFromLocalStorage();
console.log("This is user in account -->" , user)
const account = {
  displayName: user?.data.name,
  email: user?.data.email,
  photoURL: '/assets/images/avatars/avatar_default.jpg',
};

export default account;
