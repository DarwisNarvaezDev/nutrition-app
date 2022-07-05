import { useState } from 'react';
import MainApp from './components/MainApp';
import './sass/components/MainPanel.scss'
import OffCanvasLogin from './components/OffCanvasLogin';
import AppFooter from './components/AppFooter';
import { gapi } from "gapi-script";

function App() {

  // Hooks
  const [showOffCanvas, setShowOffCanvas] = useState(true);
  const [user, setUser] = useState('');

  // StateObject
  const stateObj = {
    userState: user,
    setUserState: setUser,
    showOffCanvas: showOffCanvas,
    setShowOffCanvas: setShowOffCanvas 
  }

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      plugin_name: "chat",
    });
  });

  return (
    <div className="App">
      {/* The first thing you see when you hit the app */}
      <OffCanvasLogin props={stateObj} />
      <MainApp props={stateObj} />
      <AppFooter />
    </div >
  );
}

export default App;
