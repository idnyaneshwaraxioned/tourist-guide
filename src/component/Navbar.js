
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { userLogout } from '../pages/login/duck/actions'

const Navbar = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const useStatus = useSelector(state => state.loginReducer.userStatus)

  const logOutUser = () => {
    dispatch(userLogout())
    history.push('/login')
  }

  return (
    <header>
      <div className="wrapper">
        <h1 className="logo">
          <Link to="/" className="logo-text">TOURIST GUIDE</Link>
        </h1>
        <nav>
          <ul className='menu'>
            <li><Link to='/' className='menu-item'>Home</Link></li>
            {
              useStatus==="active"?
              <li><button className='logout-btn' onClick={logOutUser}>Logout</button></li>:
              <li><Link to='/login' className='menu-item'>Login</Link></li>
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar