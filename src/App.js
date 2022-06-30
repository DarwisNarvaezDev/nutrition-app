import { useState } from 'react';
import OffCanvasLogin from './components/OffCanvasLogin';

function App() {

  const [showOffcanvas, setShowOffCanvas] = useState(false);

  return (
    <div className="App">
      <OffCanvasLogin props={showOffcanvas} />
    </div >
  );
}

export default App;
