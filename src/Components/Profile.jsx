import React from 'react'
import {connect} from 'react-redux'
 function Profile(props) {
    // console.log(
    //     props
    // );
  return (
    <div>Profile
  {props.contactform.firstName}
  {/* alt+shift+downkey copy and paste */}
  {props.contactform.password}
  

         </div>
  )
}
const mapStateToProps=(state)=>{
    console.log(state.form.contactform);
    return{
        contactform:state.form.contactform.values
        //initialy contactform doesn'texits
    }
}
export default connect(mapStateToProps)(Profile)