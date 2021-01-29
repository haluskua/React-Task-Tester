import { useState } from 'react';
//component level state
const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')
    
    return (
        <form className='add-form'>
           <div className='form-control'>
            <label>
             Task
            </label>
            <input type='text' placeholder='Add Task' />
           </div> 
           <div className='form-control'>
            <label>
             Day & Time
            </label>
            <input type='text' placeholder='Add Dau' />
           </div> 
           <div className='form-control'>
            <label>
             Set Reminder
            </label>
            <input type='checkbox form-control-check' />
            <input type='submit' value=' Save Task' className='btn btn-block'/>
           </div> 
          </form> 
    )

};

export default AddTask;