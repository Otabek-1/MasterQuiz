import React, { useState } from 'react';
import "./app.css";
import img from "./img/logo1.png";
import { Link } from 'react-router-dom';

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        if (isDarkMode) {
            // Activate Dark Mode
            document.documentElement.style.setProperty('--primary-color', '#BB86FC');
            document.documentElement.style.setProperty('--background-color', '#121212');
            document.documentElement.style.setProperty('--accent-color', '#FFEA00');
            document.documentElement.style.setProperty('--text-color', '#E0E0E0');
            document.documentElement.style.setProperty('--divider-color', '#BB86FC');
        } else {
            // Activate Light Mode
            document.documentElement.style.setProperty('--primary-color', '#673AB7');
            document.documentElement.style.setProperty('--background-color', '#EDE7F6');
            document.documentElement.style.setProperty('--accent-color', '#FFC107');
            document.documentElement.style.setProperty('--text-color', '#37474F');
            document.documentElement.style.setProperty('--divider-color', '#03A9F4');
        }
    };

    return (
        <div>
            <div className="background">
                <img src={img} alt="" />
            </div>

            <nav className='navv'>
                <img src={img} alt="" className="logo" />
                <ul className="navv-list">
                    <li className="navv-item">
                        <a href="#" className="navv-link">Home</a>
                    </li>
                    <li className="navv-item">
                        <a href="#about" className="navv-link">About</a>
                    </li>
                    <li className="navv-item">
                        <a href="#contact" className="navv-link">Contact</a>
                    </li>
                    <li className="navv-item buttons">
                        <Link to="/login" className='login-btn'>Login</Link>
                        <Link to="/signup" className='signup-btn'>Signup</Link>

                        <div class="toggle">
                            <input className='toggleinput' type="checkbox" id="btn" onClick={toggleDarkMode} />
                                <label for="btn">
                                    <span class="track">
                                        <span class="txt"></span>
                                    </span>
                                    <span class="thumb">|||</span>
                                </label>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className="entrance-text">
                <h1>Empower yourself, Work yourself,<br /> Build yourself</h1>
            </div>

            <section className="about-us" id='about'>
                <div className="container">
                    <h2>Biz haqimizda</h2>
                    <span>Yangi platformamizga xush kelibsiz! Bizning maqsadimiz — ta'limni zamonaviy usullar bilan rivojlantirish va foydalanuvchilarga bilim olishda qo'llab-quvvatlashdir.</span>

                    <span>Platformamizda har kim o'z qobiliyatlarini namoyon etishi va bilimlarini baham ko'rishi uchun imkoniyatlar yaratilgan. Foydalanuvchilar test savollarini tuzish, o'quvchilar uchun qiziqarli va interaktiv o'qitish tajribalarini yaratish imkoniyatiga ega bo'lishadi. Har bir foydalanuvchi o'z guruhini tashkil qilishi va boshqa foydalanuvchilar bilan bilim almashishi mumkin.</span>

                    <span> Shuningdek, platformada boshqa turdagi savol-javob tizimlari ham yaratilishi va tarqatilishi mumkin. Bu orqali foydalanuvchilar bir-biriga yordam berishlari, yangi narsalarni o'rganishlari va o'z bilimlarini yanada kengaytirishlari mumkin.</span>

                    <span> Bizning platformamiz — ta'lim va o'qitish jarayonini yanada samarali, qiziqarli va oson qiladigan joy. Keling, birgalikda ta'limni yangi bosqichga olib chiqaylik!</span>
                </div>
            </section>

            <section className="features" id='features'>
                <div className="container">
                    <h2>Qulayliklar</h2>

                    <div className="features-cards">
                        <div className="feature-card">
                            <h3>Tezkor test yaratish</h3>
                            <p>O'qituvchilar tezda test savollarini yaratish va o'quvchilarga tarqatish imkoniyatiga ega.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Yutuqlarni ko'rsatish</h3>
                            <p>O'quvchilar o'z yutuqlarini kuzatish va baholashlari mumkin.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Statistika va tahlil</h3>
                            <p>O'quvchilar o'z bilimlarini tahlil qilish va kuchli va zaif tomonlarini aniqlash imkoniyatiga ega.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Guruh yaratish</h3>
                            <p>O'qituvchilar o'z guruhlarini yaratib, o'quvchilar bilan birga ishlashlari mumkin.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Qo'shimcha resurslar</h3>
                            <p>O'quvchilar o'z bilimlarini oshirish uchun qo'shimcha resurslarga kirish imkoniyatiga ega.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id='contact'>
                <div className="container">
                    <h2>Aloqa</h2>
                    <p>Biz bilan bog'laning:</p>
                    <form className="contact-form">
                        <input type="text" placeholder="Ismingiz" required />
                        <input type="email" placeholder="Email manzilingiz" required />
                        <textarea placeholder="Xabar" required></textarea>
                        <button type="submit" className="submit-btn">Yuborish</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
