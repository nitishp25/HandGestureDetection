import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Homepage from './pages/homepage/homepage.jsx';
import Spinner from './components/spinner/spinner.component.jsx';
import Gestures from './pages/gestures/gestures';

import './App.scss';

const App = () => (
  <div className="App">
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route exact path="/" element={<Gestures />} />
        {/* <Route path="/gestures" element={<Gestures />} /> */}
        {/* <Route path="/signlanguage" element={<Homepage />} /> */}
      </Routes>
    </Suspense>
  </div>
);

export default App;