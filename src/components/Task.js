
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className='task-container'>
    <div className={`${task.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3 className='task-text'>{task.text} <FaTimes onClick={()=> onDelete(task.id)}/> </h3>
        <p>{task.day} </p>
    </div>
    </div>
  )
}

export default Task