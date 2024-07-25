import React, { useEffect } from 'react';
import './WorkoutList.css';

function WorkoutList({ workouts }) {
  return (
    <div className="workout-list-container"> 
      {workouts && workouts.map(workout => (
        <div key={workout.id} className="workout-item"> 
          <h3>{workout.type}</h3>
          <p>Sets: {workout.numberOfSets}</p>
          <p>Repetitions: {workout.numberOfRepetitions}</p>
          <p>Date: {workout.dateOfWorkout}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkoutList;
