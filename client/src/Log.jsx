
import React, { useState } from 'react';
import './Log.css';
import axios from 'axios'

const Log = ({log,change}) => {
 
const [fullname,setfullname]=useState('')
const [password,setpassword]=useState('')

const handlesign =()=>{
    if(fullname && password){
    const obj={
        fullname:fullname,
        password:password
    }
    console.log(obj);
    axios.post(`http://127.0.0.1:8080/users/up`,obj)
    .then((res)=>{
        change('main'); // Navigate to MainPage
}).catch((err)=>{console.log(err);})
    }
    else{
        alert('fill the boxes')
    }
}


    // const handleLogin = () => {
    //     if(fullname && password)
    //     axios.get(`http://127.0.0.1:8080/users/${fullname}`)
    //     .then((res)=>{
    //             change('main'); // Navigate to MainPage
    //     }).catch((err)=>{console.log(err);})
    // };
    const handleLogin = () => {
        if (fullname && password) {
            axios.get(`http://127.0.0.1:8080/users/${fullname}`)
                .then((res) => {
                    const user = res.data;
                    if (user && user.fullname === fullname) {
                        change('main'); 
                    } else {
                        alert('incorrect')
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            alert('fill boxes')
        }
    };
    

    return (
        <div className="log-container">
            <div className = 'title'style={{position:'absolute',color: 'white'}}>
                <h1>VIBEHUB</h1>
                </div>
                <div class="loader" style={{position:'absolute'}}>
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__bar"></div>
                    <div className="loader__ball"></div>
                </div>
            <input onChange={(e)=>{setfullname(e.target.value)}} type="text" name="text" className="input" placeholder="Enter your fullname!"></input>
            <input  onChange={(e)=>{setpassword(e.target.value)}}type="password" name="text" className="input" placeholder="Enter your password!"></input>
            {/* <button className="sign-in">SIGN IN</button> */}
            <div className = 'fless' style={{display:'flex',position:'absolute'}}>
            <button className='h'onClick={handlesign}>SIGN UP</button>
            <button className = 'h'onClick={handleLogin}>LOG IN</button>
            </div>
            {/* <button className="log-in" onClick={handleLogin}>LOG IN</button> */}
            <footer className="footer">
                <p>Connect with your favorite tracks. Join our community and share the vibe!</p>
                <p>&copy; 2024 VibeHub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Log;