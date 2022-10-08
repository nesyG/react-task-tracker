import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add Task')
            return
        }
        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className="form-container" onSubmit={onSubmit}>
        <div className="add-task-container">
            <label className="label-container">Task:</label>
            <input type='text' placeholder='Name your task' value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className="add-task-container">
            <label className="label-container">Day and Time:</label>
            <input type='text' placeholder='Add day and time' value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className="add-task-container">
            <label className="label-container">Reminder:</label>
            <input type='checkbox'checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>
        <input className="submit-form" type='submit' value='Save Task'></input>
    </form>
  )
}

export default AddTask
