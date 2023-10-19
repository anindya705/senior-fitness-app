import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Workout from './components/Workout';
import Mild from './components/WorkoutOptions/Mild';
import Sidebar from './components/Sidebar/Sidebar';
import Stretching from "./components/WorkoutOptions/Stretching"
import Medium from "./components/WorkoutOptions/Medium"
import Intense from "./components/WorkoutOptions/Intense"
import FormChecker from './components/FormChecker/FormChecker';
import MildCardio from './components/AllExercisesList/MildCardio';
import MildStrength from './components/AllExercisesList/MildStrength';
import MildBalance from './components/AllExercisesList/MildBalance';
import IntenseStrength from './components/AllExercisesList/IntenseStrength';
import IntenseBalance from './components/AllExercisesList/IntenseBalance';
import IntenseCardio from './components/AllExercisesList/IntenseCardio';
import CardioStretch from './components/AllExercisesList/CardioStretch';

const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/workout" element={<Workout />} />
          <Route path="/mild" element={<Mild />} />
          <Route path="/stretching" element={<Stretching />} />
          <Route path="/medium" element = {<Medium />} />
          <Route path="/form-checker" element = {<FormChecker />} />
          <Route path="/intense" element={<Intense />} />
          <Route path="/mild/cardio" element={<MildCardio />} />
          <Route path="/mild/strength" element={<MildStrength />} />
          <Route path="/mild/balance" element={<MildBalance />} />
          <Route path="/intense/strength" element={<IntenseStrength />} />
          <Route path="/intense/balance" element={<IntenseBalance />} />
          <Route path="/intense/cardio" element={<IntenseCardio />} />
          <Route path="/stretching" element={<CardioStretch />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
