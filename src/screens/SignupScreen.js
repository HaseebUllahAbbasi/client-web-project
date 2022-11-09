import React, { useRef, useState } from 'react';
import firebase, { auth } from '../firebase.js';
import './SignupScreen.css';

function SignupScreen(){
 
    const emailRef= useRef(null);
    const [email_state,setEmail] = useState("");
    
    const [pass_state,setPass] = useState("");
    const passwordRef= useRef(null);

     const register =(e)=>{
      e.preventDefault();

      auth.createUserWithEmailAndPassword(
         emailRef.current.value,
         passwordRef.current.value).then((authUser)=>{
             alert( emailRef.current.value+" new acount has been created ");}).catch((error)=>{
                 alert(error.message);
        
         });


         fetch('http://localhost:4000/add', 
         { method: 'POST',
         headers: new Headers({
             "Content-Type":"application/json"
         }),
         body: JSON.stringify({ 
             email: email_state,
             password: pass_state
            }) 
             })

     };
     const signIn =(e)=>{
        e.preventDefault();
         auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            ).then((authUser)=>{
                alert(emailRef.current.value+" Has Signed in");
            }).catch((error)=> alert(error.message));


            fetch(`http://localhost:4000/${email_state}`).then(data=> data.json()).then(result => console.log(result))



       };


    return ( <div className="signupScreen">
    <form>
        <h1>Sign In</h1>
        <input ref={ emailRef} onChange={(e)=> {setEmail(e.target.value)}} type="Email" placeholder="email"/>
        <input ref={ passwordRef} onChange={(e)=> {setPass(e.target.value)}} type="Password" placeholder="password"/>
        <button   type="Submit" onClick={signIn}>Sign In </button>
        <h4> 
            <span className="signupScreen__gray">New to Netflix?</span>
             <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
        </h4>
    </form>

    </div>


    )
}

export default SignupScreen