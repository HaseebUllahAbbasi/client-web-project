import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUser } from "./userSlice";
import imageCompression from "browser-image-compression";
import { ToastContainer, toast } from 'react-toastify';

const EditProfile = () => {
    const user = useSelector(selectUser)
    const [userName, setUserName] = useState("");
    const [newPass, setNewPass] = useState("");
    const [dp, setDp] = useState(null);
    const notify = () => toast("Data Updated of user");


    const history = useHistory()

    return (
        <div id="doc3" className="outer custom" style={{ backgroundColor: "black" }}>
            <div className="custom_1">
                <div className="container" style={{ backgroundColor: "black" }}>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div >
                                <p className="display-1"> Edit Profile</p>
                                {/* <h2>{user?.email}</h2> */}

                            </div>
                            <div >
                                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" style={{ height: "10rem", borderRadius:"5rem" }} alt="avatar_logo" />
                            </div>
                            <hr>
                            </hr>
                            <div className="inputs" >
                                <input className="form-control" onChange={(e) => setUserName(e.target.value)} placeholder="User Name"></input>
                                <input className="form-control" onChange={(e) => setNewPass(e.target.value)} type="password" placeholder="New  Password" ></input>

                                <div class="input-group mb-3">
                                    <label class="input-group-text" for="inputGroupFile01" style={{ marginRight: "1rem" }}>Upload The Picture </label>
                                    <input type="file" class="form-control" id="inputGroupFile01" accept="image/png, image/gif, image/jpeg"  onChange={(e) => {
                                        setDp(e.target.value);
                                        const imageFile = e.target.files[0];
                                        console.log(imageFile.size / 1024 / 1024);
                                        const options = {
                                            maxSizeMB: 0.5,
                                            maxWidthOrHeight: 200,
                                            useWebWorker: true
                                        };
                                        if (imageFile.size / 1024 / 1024 <= 10) {
                                            imageCompression(imageFile, options).then(x => {
                                                console.log(x.size / 1024 / 1024);
                                                setDp({
                                                    compressedLink: URL.createObjectURL(x),
                                                    compressedBlob: x,
                                                });
                                            })
                                        } else {
                                            toast.error('Select Image upto 10 Mb', { position: toast.POSITION.TOP_RIGHT });
                                            return 0;
                                        }

                                    }} />
                                </div>
                            </div>
                            <div className="buttons_1 row">
                                <button className="btn btn-danger"
                                    onClick={() => {
                                        history.push('/Profile')
                                    }}
                                >
                                    Cancel
                                </button>
                                <button className="btn btn-danger" onClick={(e) => {
                                    if (userName === "" || newPass === "" || dp === null) {
                                        alert("please enter all the values")

                                    }
                                    else {
                                        fetch('http://localhost:4000/User',
                                            {
                                                method: 'PUT',
                                                headers: new Headers({
                                                    "Content-Type": "application/json"
                                                }),
                                                body: JSON.stringify({
                                                    email: user?.email,
                                                    password: newPass,
                                                    source: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
                                                    userName: userName
                                                })
                                            })
                                        console.log("done the upload ")
                                        notify();
                                        alert("data has been updated of the user "+user?.email)

                                        // if (dp?.compressedBlob) {
                                        //     console.log(dp.compressedBlob)
                                        //     const data = new FormData()
                                        //     data.append("file", dp.compressedBlob)
                                        //     data.append("upload_preset", "social-web-app")
                                        //     data.append("cloud_name", "doidlafka")

                                        // fetch("https://api.cloudinary.com/v1_1/dot-pic/image/upload", {
                                        //     method: "post",
                                        //     body: data
                                        // }).then(res => res.json()).then((data) => {
                                        //     console.log(data)

                                        //         fetch('/dp', {
                                        //             method: "PUT",
                                        //             headers: {
                                        //                 "Content-Type": "application/json",
                                        //             },
                                        //             body: JSON.stringify({
                                        //                 email: user.email,
                                        //                 source: data.url
                                        //             })
                                        //         }).then(res => res.json()).then(result => console.log(result))

                                        //     }).catch(err => console.log(err));
                                        // }

                                    }
                                }} >
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )

}
export default EditProfile;