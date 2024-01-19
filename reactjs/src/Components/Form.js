import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className='Form-wrapper'>
<form className='Forms'>
  <label className='Email'>
    Email
    <input type="text" name="name" />
  </label>
  <label className='Names'>
    First Name
    <input type="text" name="Names" />
  </label>
  <label className='Names'>
    Last Name
    <input type="text" name="Names" />
  </label>
  <input type="submit" value="Sign Up" className="Submit" />


  
</form>
      
    </div>
  )
}

export default Form
