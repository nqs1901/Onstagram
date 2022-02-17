import Header from "./components/Header/Header";
import Alert from "./components/Alert/Alert";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {getPosts} from './actions/postAction'
import { GLOBALTYPES } from "./actions/globalTypes";
import Peer from 'peerjs'
import { verifyToken } from './services/tokenService';
import { isAuthenticated } from './utils/jwtUtil';

function App() {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   // dispatch(refreshToken())
  //   dispatch(verifyToken());


  //   // const socket = io()
  //   // dispatch({type: GLOBALTYPES.SOCKET, payload: socket})
  //   // return () => socket.close()
  // },[dispatch])
  useEffect(() => {
    if(isAuthenticated()) {
      console.log("ok", auth)
      dispatch(getPosts(auth.token))
      // dispatch(getSuggestions(auth.token))
      // dispatch(getNotifies(auth.token))
    }
  }, [dispatch,auth.token])


  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/', secure: true
    })
    
    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
  },[dispatch])
  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
         <div className='App'>
        <div className="main">
          {isAuthenticated() && <Header />}
          <Route exact path="/" component={isAuthenticated() ?Home:Login} />
          {/* <Route exact path="/home" component={Home} /> */}
          
          <Route exact path="/register" component={Register} />
        </div>
      </div>
    </Router>
   
  );
}

export default App;
