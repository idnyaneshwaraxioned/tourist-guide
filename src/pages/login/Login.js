import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "./duck/actions";

const Login = (props) => {
  const [user, setUser] = useState({ username: '', password: '' });
  const { username, password } = user;

  const dispatch = useDispatch()
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const formhandler = (e) => {
    e.preventDefault()
    if (username === "abc" && password === "abc") {
      dispatch(userLogin())
      props.history.push("/")
      alert(`Welcome ${username}`)
    } else {
      alert("Please Enter valid details")
    }
  }
  return (
    <div className='form'>
      <h1 className="form-heading">USER LOGIN</h1>
      <form onSubmit={formhandler} className='login-form'>
        <div className="input-control">
          <input type="text" name="username" value={username} placeholder="username" onChange={inputHandler} />
        </div>
        <div className="input-control">
          <input type="text" name="password" value={password} placeholder="password" onChange={inputHandler} />
        </div>
        <div className="input-control">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}

export default Login