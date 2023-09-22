import React, { useState } from 'react'
import { Field, formValues, reduxForm } from 'redux-form'
import Profile from './Profile'
import { reducer as formReducer } from 'redux-form'
let ContactForm = props => {
  // console.log(props);
  const { handleSubmit } = props;
const [showProfile,setShowProfile]=useState(false);
//   const handleSubmit=(e,props)=>{
// e.preventDefault();
//     console.log('button clicked');
//     console.log(props);
//   }
  return (
    <form onSubmit={handleSubmit((formValues)=>{
      // console.log(formValues);
      setShowProfile(true);
    })}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
    
      <div>
        <label htmlFor="password">password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Save</button>
      {showProfile?<Profile/>:null}
    </form>
       
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contactform'
})(ContactForm)
export default ContactForm