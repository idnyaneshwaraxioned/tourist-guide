import { USER_LOGIN, USER_LOGOUT } from "./actiontypes"


export const userLogin=()=>({
  type:USER_LOGIN
})

export const userLogout=()=>({
  type:USER_LOGOUT
})