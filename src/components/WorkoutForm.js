import './WorkoutFormSection.css';
import React, {useState} from 'react';
function WorkoutForm({onWorkoutCreated}) {
    const [workout, setWorkout] = useState({
        type: '',
        numberOfSets: 0,
        numberOfRepetitions: 0,
        dateOfWorkout: ''
    });

    const [error, setError] = useState(null);
    const [succesMessage, setSuccessMessage] = useState(null);

    const handleChange = (event) => {
        setWorkout({ ...workout, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccessMessage(null);


        try {
            const response = await fetch('http://localhost:8080/api/workouts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(workout)
            });

            if(response.ok) {
                const newWorkout = await response.json();
                onWorkoutCreated(newWorkout);
                setWorkout({
                    type: '',
                    numberOfSets: 0,
                    numberOfRepetitions: 0,
                    dateOfWorkout: ''
                });
                setSuccessMessage('Antenamentul a fost adaugat cu succes!');
            }
            else {
                const errorData = await response.json();
                setError(errorData.message || 'Eroare la crearea antrenamentului!');
            }

        } catch(error) {
            console.error('Eroare la crearea workout-ului: ', error);
            setError("A aparut o eroare neasteptataaaa!");
        }
    };

    return (
        <form className='addWorkoutForm' onSubmit = {handleSubmit}>
            <div>
                <label htmlFor="type">Type of workout:</label>
                <input type="text" id="type" name="type" value={workout.type} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="numberOfSets">Number of sets:</label>
                <input type="number" id="numberOfSets" name="numberOfSets" value={workout.numberOfSets} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="numberOfRepetitions">Number of repetitions:</label>
                <input type="number" id="numberOfRepetitions" name="numberOfRepetitions" value={workout.numberOfRepetitions} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="dateOfWorkout">Date of the workout:</label>
                <input type="date" id="dateOfWorkout" name="dateOfWorkout" value={workout.dateOfWorkout} onChange={handleChange} />
            </div>
            <button className="addWorkoutButton" type="submit">Add workout</button>
        </form>
    );
}

export default WorkoutForm;