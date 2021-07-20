import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';

const PrivateRoute = (props) => {
  const { path, component: Cmp } = props
  const userStatus = useSelector(state => state.loginReducer.userStatus)
  
  return <Route
    exact path={path}
    render={(props) =>
      userStatus === 'active' ?
        <Cmp {...props} />
        :
        <Redirect to='/login' />
    }
  />
}

export default PrivateRoute
