import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import http from '../../utils/axios';
import './login.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch({ type: 'LOGIN_START' });

        try {
            const response = await http.post('/auth/login', {
                username,
                password
            });

            if (response.data) {
                dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
            }
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE' });
        }
    };

    return (
        <div className='app'>
            <div className='login-wrapper'>
                <div className='login'>
                    <div className='login-container'>
                        <h1 className='login-title'>Login</h1>
                        <form className='login-form' onSubmit={handleSubmit}>
                            <div className='input-group'>
                                <label>Username</label>
                                <input
                                    type='text'
                                    placeholder='Enter your username...'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className='input-group'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    placeholder='Enter your password...'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type='submit'
                                disabled={isFetching}
                                className='login-button'
                            >
                                Login
                            </button>
                        </form>
                        <div className='login-register'>
                            <Link to='/register'>Don't have an account? Register</Link>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='footer'>
                <p>&copy; 2025 Your Website. All Rights Reserved.</p>
            </footer>
        </div>
    );
}