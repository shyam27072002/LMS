
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
/*import Button from './components/Button';*/
import { Button } from 'react-bootstrap';
import {FullScreen, useFullScreenHandle} from "react-full-screen";


function App() {
  const handle = useFullScreenHandle();
  
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    
  });
  document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState === "visible") {
      console.log("tab is active")
    } else {
      alert('tab switching detected')
      console.log("tab is inactive")
      return(
        <div className='Warning'>
          WARNING 
          * MALPRACTICE DETECTED
        </div>
      )
    }
  });
    
  return (

    <div className='App'>

      <NavbarComp />
      <div className='App-headtitle'>
      <h1>SECURITY FEATURES</h1>
      <br></br>
      </div>
    
    <div className='App-decription'>
      <p>Restrict inspect page</p>
      <p>Restrict Copy  action</p>
      <p>Restrict Paste option</p>
      <p>URL authorisation</p>
      <p>Restrict right click</p>
      <p>Restrict print page</p>
      <p>Restrict screen shot or screen share</p>

    </div>
    <div className='App-Button'>
      <Button variant="secondary"  size='lg' onClick={handle.enter} active>
        TAKE TEST
      </Button>
      <FullScreen handle={handle}>
        WELCOME TO FULLSCREEN
      </FullScreen>


    </div>
    </div>
  );
}

export default App;
