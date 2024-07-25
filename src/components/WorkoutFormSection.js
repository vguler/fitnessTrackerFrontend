import React, { useState, useEffect } from 'react';
import WorkoutForm from './WorkoutForm';
import './WorkoutFormSection.css';
import WorkoutList from './WorkoutList';

function WorkoutFormSection() {
  const [workouts, setWorkouts] = useState([]);
  const [visibleWorkouts, setVisibleWorkouts] = useState([]);
  const workoutsPerPage = 6;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/workouts');
        const data = await response.json();
        setWorkouts(data.reverse());
        setVisibleWorkouts(data.slice(0, workoutsPerPage).reverse());
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }finally {
        setIsLoading(false);
      }
    };

    fetchWorkouts();
  }, []); 

  const handleWorkoutCreated = (newWorkout) => {
    setWorkouts([newWorkout, ...workouts]);
    setVisibleWorkouts([newWorkout, ...visibleWorkouts.slice(0, workoutsPerPage - 1)]);
  };

  const loadMoreWorkouts = () => {
    setVisibleWorkouts([...visibleWorkouts, ...workouts.slice(visibleWorkouts.length, visibleWorkouts.length + workoutsPerPage)]);
  };

  return (
    <div className="theWholeWorkoutFormSection">
      <section id="workout-form" className="workout-form-section">
        <h2>Add a new workout!</h2>
        <WorkoutForm onWorkoutCreated={handleWorkoutCreated} />
      </section>
      <section className="show-workouts-section">
        {isLoading ? (
          <p>Loading workouts...</p> 
        ) : (
          <>
            <WorkoutList workouts={visibleWorkouts} />
            {visibleWorkouts.length < workouts.length && (
              <button className="loadMoreButton" onClick={loadMoreWorkouts}>Load More</button>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default WorkoutFormSection;
