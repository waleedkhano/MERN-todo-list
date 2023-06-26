import './task.css';
import deleteIcon from '../icon/delete.png';
import axios from 'axios';
import toast from 'react-hot-toast';

const Task = ({ id, title, description }) => {
  const deleteGoal = async () => {
    try {
      const del = await axios.delete(`/api/list/${id}`);
      if (del) {
        toast.success("Goal has been deleted");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete goal");
    }
  };

  return (
    <>
      <div className="task">
        <p className="tasktitle">{title}</p>
        <span className="taskdes">{description}</span>
        <button className="taskbtn" onClick={deleteGoal}>
          <img src={deleteIcon} alt="delete icon" />
        </button>
      </div>
    </>
  );
};

export default Task;
