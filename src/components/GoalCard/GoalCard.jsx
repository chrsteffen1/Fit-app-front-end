import { useState } from "react"


const GoalCard = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [form, setForm] = useState({content: ''})


  const handleDelete = (e) => {
    e.preventDefault()
    props.handleDeleteGoal(props.id, props.goal._id)
    const newGoals = props.profile.goals.filter(goal => goal._id !== props.goal._id)
    props.setProfile({...props.profile, goals: newGoals})
  }

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    //backend
    // props.handleUpdateGoal(props.goal._id, form)
    //state
    if (form.content) {
      props.handleUpdateGoal(props.goal._id, form)
      const idx = props.profile.goals.indexOf(props.goal)
      props.profile.goals[idx] = form
      const newGoals = props.profile.goals
      props.setProfile({...props.profile, goals: newGoals})
    }
  }


  return ( 
    <>
      <form onSubmit={handleUpdate}>
        {!isEditing ? <h2>{props.goal.content}</h2> 

        : <textarea 
          name='content'
          value={form.content}
          placeholder={props.goal.content}
          onChange={handleChange}
        ></textarea>}

        {isEditing ? <button onClick={() => setIsEditing(false)}type='submit'>Save</button> 
        : <button onClick={() => setIsEditing(true)}>Edit</button>}
      </form>

      <form onSubmit={handleDelete}>
        <button type='submit'>Delete</button>
      </form>
    </>
  );
}

export default GoalCard;