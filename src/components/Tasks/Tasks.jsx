import React from "react";
import styles from "./tasks.module.css";

const Tasks = ({el:{id,value,isCompleted},deleteTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [isCompleted,setIsCompleted] = React.useState(isCompleted)
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <div>
          <div>
            <input type="checkbox"
            checked = {isComplete} onChange = {(e)=> {
              setIsCompleted(e.target.checked)
            }}
            />
          </div>
          <div className={isComplete ? style.strike :null}>{value}</div>
          <button onClick={() => deleteTodo(id)} > X </button>
        </div>
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        <h3>Empty List</h3>
        <p>Add a new task above</p>

      </div>
    </>
  );
};

export default Tasks;
