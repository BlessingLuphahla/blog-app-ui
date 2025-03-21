import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import http from '../../utils/axios';

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
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
            <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
                <h1 className='text-2xl font-semibold text-center text-gray-700 mb-6'>Login</h1>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <div>
                        <label className='block text-gray-600 text-sm font-medium'>Username</label>
                        <input
                            type='text'
                            placeholder='Enter your username...'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-600 text-sm font-medium'>Password</label>
                        <input
                            type='password'
                            placeholder='Enter your password...'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
                        />
                    </div>
                    <button
                        type='submit'
                        disabled={isFetching}
                        className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-gray-400'
                    >
                        Login
                    </button>
                </form>
                <div className='text-center mt-4'>
                    <Link to='/register' className='text-blue-500 hover:underline'>
                        Don't have an account? Register
                    </Link>
                </div>
            </div>
        </div>
    );
}
