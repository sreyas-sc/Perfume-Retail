'use client';
import { useState } from 'react';
import styles from './signin.module.css';
import Router from 'next/router';

const SignIn = () => {
    // State variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle login
    const handleLogin = async () => {
        try {
            // Fetch request to login
            const response = await fetch('https://review-38wx.onrender.com/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            // If response is ok, set token, userType and email in local storage and redirect to home page
            if (response.ok) {
                const data = await response.json();
                console.log('Login successful', data);
                localStorage.setItem('token', data.token);
                localStorage.setItem('userType', 'user');
                localStorage.setItem('email', email);

                Router.replace('/');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={styles.backgroundImage}>
            <div className={styles.card}>
                <img src="/assets/img/cross-ash.svg" alt="Close" className={styles.closeIcon} /> {/* Cross icon */}
                <h2 className={styles.heading}>Sign In</h2>
                <div className={styles.inputFieldWrapper}>
                    <p className={styles.inName}>Email or Phone Number</p>
                    <input
                        type="text"
                        placeholder=""
                        className={styles.inputField}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className={styles.inName}>Password</p>
                    <div className={styles.passwordField}>
                        <input
                            type="password"
                            placeholder=""
                            className={styles.inputField}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img src="/assets/img/eye.svg" alt="Show Password" className={styles.eyeIcon} /> {/* Eye icon */}
                    </div>
                    <button className={styles.signUpButton} onClick={handleLogin}>Sign In</button>
                    <p className={styles.signInText}>Already have an account? <a href="/components/Sign-up" className={styles.signInLink}>Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;