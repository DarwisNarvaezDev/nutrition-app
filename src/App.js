import { useState } from 'react';
import OffCanvasLogin from './components/OffCanvasLogin';
import './sass/components/MainPanel.scss'
import './sass/components/Header.scss'
import { Badge, FloatingLabel, Form } from 'react-bootstrap';

function App() {

  const [showOffcanvas, setShowOffCanvas] = useState(false);

  return (
    <div className="App">
      {/* The first thing you see when you hit the app */}
      <OffCanvasLogin props={showOffcanvas} />
      <section className='appHeader'>
        <h1>Find your recipe!</h1>
        <p>Select youre desired recipe type, give us the main ingredient and get recipes!</p>
      </section>
      <section className='mainAppWrapper'>
        <div className='mainAppStatsWrapper'>
          <div className='filterHeader'>
            <h1>Nutrition App</h1>
            <p>Powered by FatSecret</p>
          </div>
          <div className='filterBody'>
            <div>
              <Badge pill bg='secondary'>Main Course</Badge>
              <Badge pill bg='secondary'>Breakfast</Badge>
              <Badge pill bg='secondary'>Dinner</Badge>
              <Badge pill bg='secondary'>Dinner</Badge>
              <Badge pill bg='secondary'>Dinner</Badge>
              <Badge pill bg='secondary'>Dinner</Badge>
              <Badge pill bg='secondary'>Dinner</Badge>
              <Badge pill bg='secondary'>Dinner</Badge>
              <Badge pill bg='secondary'>Dinner</Badge>
              <Badge pill bg='secondary'>Dinner</Badge>
              <Badge pill bg='secondary'>Dinner</Badge>
              <Badge pill bg='secondary'>Dinner</Badge>
            </div>
          </div>
          <div className='filterFooter'>
            <FloatingLabel
              controlId="floatingInput"
              label="Name your favorite ingredient"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </div>
        </div>
        <div className='mainAppRecipesWrapper'></div>
      </section>
    </div >
  );
}

export default App;
