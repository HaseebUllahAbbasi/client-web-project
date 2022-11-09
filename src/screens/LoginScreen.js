import React, { useState } from 'react';
import ExtraScreen from '../Extra';
import Extra_Sc_Two from '../Extra_Sc_Two';
import Screen_3 from '../Screen_3';
import Screen_4 from '../Screen_4';
import Screen_5 from '../Screen_5';
import Screen_6 from '../Screen_6';
import './LoginScreen.css';
import SignupScreen from './SignupScreen.js';

function LoginScreen() {
   const [signin, setSignin] = useState(false);
   return (
      <div className="outer">
         <div className="loginScreen">
         <div className="loginScreen__backgound"></div>
         <img className="loginScreen__logo"
 src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
  
         <button  onClick={() => setSignin(true)}
            className="loginScreen__button btn">Sign In</button>

         <div className="loginScreen__gradient">

         </div>

         <div className="loginScreen__body">
            {signin ?
               <SignupScreen />
               :
               <div>
                  <h1 >Unlimitted films, TV programmes and more.</h1>
                  <h2>Watch anywhere. Cancel at any time.</h2>
                  <h3>Ready to watch? Enter your email to create or restart your membership.</h3><br></br>
                  <div className="loginScreen__input">
                     <form>
                        <input type="email"  style={{height:"3rem"}}   placeholder="Email Address" />
                        <button onClick={() => setSignin(true)} className="loginScreen__getStarted">GET STARTED </button>
                     </form>

                  </div>
               </div>
            }

         </div>
      </div>
      {
         !signin&& <div>  <ExtraScreen></ExtraScreen>  <Extra_Sc_Two></Extra_Sc_Two> <Screen_3></Screen_3> <Screen_4></Screen_4> <Screen_5></Screen_5>  <Screen_6></Screen_6> </div> 
      }

      </div>
   );
}
export default LoginScreen