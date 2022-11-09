import React, { useEffect, useState } from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import { auth } from "../firebase";
import { useHistory } from "react-router";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [adder,setAdder] = useState(0);
  const [user_data,setData] = useState(null)  

  const history = useHistory()

  useEffect( async()=>
  {
    fetch(`http://localhost:4000/${user.email}`).then(data=> data.json()).then(result => setData(result[0]))
  },[adder])
  return (


    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <div className="profileScreen_contents">
          <div className="profileScreen_editProfile">
            <h1> Profile</h1>
          </div>
          <div className="profileScreen_info">
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="avatar_logo" />

            <div className="profileScreen_email">
              <div className="profileScreen_details">
                <h2>{user?.email}</h2>

                <div className="profileScreen_plans">
                  <h6>Plans (Current Plan: {user_data?.basic ==1  ? "Basic": user_data?.standard==1 ? "Standard" : "Premium"     } )</h6>
                </div></div>
            </div>
          </div>
          <div className="profileScreen_plans_and_subscriptions">
            <div className="profileScreen_subscriptions">
              <div className="profileScreen_renewalDate">
                <h6>Renewal date: 04/03/2021</h6>
              </div>
              <div className="profileScreen_planPackages">
                <div className="profileScreen_packages">
                  <div className="profileScreen_planPackage">
                    <h5>
                      Netflix Standard
                      <br />
                      <small>1080p</small>
                    </h5>
                    <button onClick={async (e) => {
                      fetch('http://localhost:4000/sub',
                        {
                          method: 'PUT',
                          headers: new Headers({
                            "Content-Type": "application/json"
                          }),
                          body: JSON.stringify(
                            {
                              email: user.email,
                              basic: "0",
                              stand: "1",
                              prem: "0"

                            }
                          )
                        })

                        setAdder(adder+1);
                        

                    }} className={user_data?.standard ? "red btn" : "gray btn"}>{!user_data?.standard ? "Subcribe" : "Current Package"}</button>
                  </div>
                  <div className="profileScreen_planPackage">
                    <h5>
                      Netflix Basic
                      <br />
                      <small>480p</small>
                    </h5>
                    <button onClick={async (e) => {
                      fetch('http://localhost:4000/sub',
                        {
                          method: 'PUT',
                          headers: new Headers({
                            "Content-Type": "application/json"
                          }),
                          body: JSON.stringify(
                            {
                              email: user.email,
                              basic: "1",
                              stand: "0",
                              prem: "0"

                            }
                          )
                        })
                        setAdder(adder+1);



                    }} className={user_data?.basic ? "red btn" : "gray btn"}>{!user_data?.basic ? "Subcribe" : "Current Package"}</button>
                  </div>
                  <div className="profileScreen_planPackage">
                    <h5>
                      Netflix Premium
                      <br />
                      <small>4K+HDR</small>
                    </h5>
                    <button onClick={async (e) => {
                      fetch('http://localhost:4000/sub',
                        {
                          method: 'PUT',
                          headers: new Headers({
                            "Content-Type": "application/json"
                          }),
                          body: JSON.stringify(
                            {
                              email: user.email,
                              basic: "0",
                              stand: "0",
                              prem: "1"

                            }
                          )
                        })
                        setAdder(adder+1);
                        


                    }} className={user_data?.premium ? "red btn" : "gray btn"}>
                      {!user_data?.premium ? "Subcribe" : "Current Package"}
                    </button>
                  </div>
                </div>
                <button className="btn"
                  onClick={() => {
                    auth.signOut();
                    window.location.reload();
                  }}
                >
                  Sign out
                </button>
                <button className="btn"
                  onClick={() => {
                    history.push('/editProfile')
                  }}>
                  Edit Profile
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileScreen;