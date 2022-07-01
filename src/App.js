import { useState } from 'react';
import './sass/components/Footer.scss'
import MainApp from './components/MainApp';
import './sass/components/MainPanel.scss'
import OffCanvasLogin from './components/OffCanvasLogin';

function App() {

  const [showOffcanvas, setShowOffCanvas] = useState(false);

  return (
    <div className="App">
      {/* The first thing you see when you hit the app */}
      <OffCanvasLogin props={showOffcanvas} />
      <MainApp />
      <footer className='appFooter'>
        <div className=''>
          Developed By: <a href='https://github.com/DarwisNarvaezDev'>@DarwisNarvaezDev</a>
        </div>
      </footer>
    </div >
  );
}

export default App;
