import axios from "axios";
import {constants} from "./index";


const changeLogin = (value) => ({
  type: constants.CHANGE_LOGIN,
  value
})

export const login = (accout, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${accout}&password=${password}`).then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin(result))
      } else {
        console.log('faild')
      }
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(changeLogin(false))
  }
}