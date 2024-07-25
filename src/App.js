import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import HomePage from './pages/HomePage';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const handleWorkoutCreated = (newWorkout) => {
    setWorkouts([newWorkout, ...workouts]);
  }

  return(
    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/workouts" element={<WorkoutList workouts={workouts} />} />
      </Routes>
    </Router>
  );
}

export default App;
