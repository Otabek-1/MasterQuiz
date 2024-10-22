import React, { useState } from 'react';
import "./login.css";
import { json, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from './modal/Modal';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalData, setModalData] = useState(null);  // Modal ma'lumotlarini saqlash uchun state
    const nav= useNavigate();

    const data = {
        username: email,    // 'username' degan nom bilan 'email' yuborilmoqda
        password: password
    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/user', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res.data);
            if (res.status == 200) {
                setModalData({  // Modalga ko‘rsatiladigan ma'lumotlarni set qilish
                    name: "Login submission",
                    message: "Login successfully",
                    status: "success"
                });
                nav("/dashboard")
            } else {
                setModalData({
                    name: "Login error",
                    message: "Error with login",
                    status: "error"
                });
            }
        })
        .catch(error => {
            console.error(error);
            setModalData({
                name: "Login error",
                message: "Error with login in catch",
                status: "error"
            });
        });
    };

    return (
        <div className='main'>
            <div className="login-box">
                <h3>Welcome back!...</h3>
                <form action="get">
                    <div className="inp">
                        <label htmlFor="name">Enter email or user</label>
                        <input 
                            type="text" 
                            id='name' 
                            placeholder='example@mail.com or @your_username' 
                            onChange={(e) => { setEmail(e.target.value) }} 
                            required 
                        />
                    </div>

                    <div className="inp">
                        <label htmlFor="password">Enter password</label>
                        <input 
                            type="password" 
                            id='password' 
                            placeholder='********' 
                            onChange={(e) => { setPassword(e.target.value) }} 
                            required 
                        />
                    </div>

                    <a href="#!" className="forgot">Forgot password</a>

                    <input type="submit" value="Login" onClick={handleLogin} />
                    <span>or <Link href="#" to="/signup" className='forgot'>Create account</Link></span>
                </form>
            </div>

            {/* Agar modalData bo'lsa, Modalni ko'rsatish */}
            {modalData && (
                <Modal 
                    name={modalData.name} 
                    message={modalData.message} 
                    status={modalData.status} 
                />
            )}
        </div>
    );
}
