import axios from 'axios';
import React, { useState } from 'react';
import Modal from './modal/Modal';  // Import Modal component

export default function Signupinput() {
  const [gender, setGender] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [modalData, setModalData] = useState(null); // State to hold modal data

  const data = {
    FISH: fullName,
    age: age,
    is_admin: false,
    registrated_at: new Date().toISOString().slice(0, 19).replace('T', ' '), // Convert to PostgreSQL-friendly format
    username: username,
    email: email,
    phone: phone,
    password: password
  };
  
  

  const Signup = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/adduser", data, {
      headers: {
        'Content-Type': 'application/json',  // Corrected header
      }
    })
    .then(res => {
      console.log(res);
      if (res.status === 201) {
        setModalData({
          name: "Signup Success",
          message: "You have successfully signed up!",
          status: "success"
        });
      } else {
        setModalData({
          name: "Signup Failed",
          message: "An error occurred during signup.",
          status: "error"
        });
      }
    })
    .catch(error => {
      console.log(error);
      setModalData({
        name: "Signup Error",
        message: "An unexpected error occurred. Please try again later.",
        status: "error"
      });
    });
  };

  return (
    <>
      {modalData && (
        <Modal
          name={modalData.name}
          message={modalData.message}
          status={modalData.status}
        />
      )}
      <form action="" className='signup-form' style={{ "position": "relative" }}>
        <div className="column">
          <div className="inp">
            <label htmlFor="fullname">Enter full name</label>
            <input type="text" name="fullname" id="fullname" placeholder='F.I.SH' onChange={(e) => { setFullName(e.target.value) }} />
          </div>
          <div className="inp">
            <label htmlFor="email">Enter email</label>
            <input type="email" name="email" id="email" placeholder='Email address' onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="inp">
            <label htmlFor="uname">Create username</label>
            <input type="text" name="uname" id="uname" placeholder='@username' onChange={(e) => { setUsername(e.target.value) }} />
          </div>
          <div className="inp">
            <label htmlFor="phone">Enter phone</label>
            <input type="text" name="phone" id="phone" placeholder='E.g: +998991234567' onChange={(e) => { setPhone(e.target.value) }} />
          </div>
        </div>

        <div className="column">
          <div className="inp">
            <label htmlFor="age">Enter age</label>
            <input type="number" name="age" id="age" placeholder='Age' onChange={(e) => { setAge(e.target.value) }} />
          </div>

          <div className="inp" style={{ 'marginTop': "29px" }}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='********' onChange={(e) => { setPassword(e.target.value) }} />
          </div>
        </div>

        <input type="submit" value="Sign up" style={{ "position": "absolute", "bottom": "20px" }} onClick={(e) => { Signup(e) }} />
      </form>
    </>
  );
}
