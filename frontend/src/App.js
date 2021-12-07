import Header from "./components/Header/Header";
import Alert from "./components/Alert/Alert";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {getPosts} from './actions/postAction'

function App() {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if(auth.token) {
      dispatch(getPosts())
      // dispatch(getSuggestions(auth.token))
      // dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token])

  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
         <div className='App'>
        <div className="main">
          {auth.token && <Header />}
          <Route exact path="/" component={auth.token ? Home : Login} />
          
          <Route exact path="/register" component={Register} />
        </div>
      </div>
    </Router>
   
  );
}

export default App;
