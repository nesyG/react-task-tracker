import Task from './Task'

const Tasks= ({tasks, onDelete, onToggle, className}) => {
  return (
    <>
    {tasks.map((task)=> (<Task  className={className }key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
    </>
  )
}

export default Tasks