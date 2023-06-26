import { useEffect, useState } from "react";
import Task from "./Task";
import axios from "axios";

const Goals = () => {
    const [goals, setGoals] = useState([]);

    useEffect(()=>{
        axios.get('/api/list')
        .then(response => setGoals(response.data))
        .catch(error => console.log(error));
    })

    return(
        <>
        <h1 className="goals-Header">Your Goals</h1>
        <div className="yourgoals">
          {goals.map((item) => (
                    <Task key={item._id} id={item._id} title={item.title} description={item.description}
                    />
                )
                )}
                </div>
        </>
    )
}

export default Goals;