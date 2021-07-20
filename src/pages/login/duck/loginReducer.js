const { USER_LOGOUT, USER_LOGIN } = require("./actiontypes")

const initialState = {
  userStatus:"inActive"
}

const loginReducer = (state=initialState,actions)=>{
  switch(actions.type){
    case USER_LOGIN:
      return {userStatus:"active"}
    case USER_LOGOUT:
      return {userStatus:"inActive"}
    default:
      return state
  }
}

export default loginReducer