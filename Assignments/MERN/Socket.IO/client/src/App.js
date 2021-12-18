import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Router} from '@reach/router';
import io from 'socket.io-client';
import Chat from './components/Chat';
import User from "./components/User";
import './App.css';

function App() {

  //need to set socket in this way with a callback
  // directly invoking io would create a new socket everytime the component rerenders
  const [socket, setSocket] = useState(()=>io(':8000'))




  useEffect(() => {
      // we need to set up all of our event listeners
      // in the useEffect callback function
      console.log("Is this running?");
      socket.on("connect", (data) => console.log("Socket id: " + data));

      // note that we're returning a callback function
      // this ensures that the underlying socket will be closed if App is unmounted
      // this would be more critical if we were creating the socket in a subcomponen



      // return () => socket.disconnect(true);
  }, []);
  




  return (
    <div className="App">
      
      <Router>
        <User path="/"/>
        <Chat socket={socket} path="/chat"/>

      </Router>
      
      {/* <form onSubmit={submitHandler}>
        <input type="text" name="content" value={content} onChange={(e)=>setContent(e.target.value)} />
        <button>Submit</button>
      </form>

      {
        messageList.map((message, index)=>{
          return(
            <div key={index}>
              {message.content}
            </div>
          )
        })
      } */}


    </div>
  );
}

export default App;

