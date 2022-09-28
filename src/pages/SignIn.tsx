import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { OAuth } from '../ui';
import { useForm } from '../hooks';


const SignIn = () => {
    const [showPass, setShowPass] = useState(false);
    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    });

    return (
        <section>
            <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
                    <img
                        className='w-full rounded-2xl'
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa" alt="key" />
                </div>
                <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                    <form>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                            placeholder='Ingrese su email'
                            onChange={onInputChange}
                        />
                        <div className='mb-6 relative'>
                            <input
                                name="password"
                                type={showPass ? "text" : "password"}
                                value={password}
                                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                                placeholder='Ingrese su contraseña'
                                onChange={onInputChange}
                            />
                            <div
                                className='absolute right-3 top-3 text-xl cursor-pointer'
                                onClick={() => setShowPass(prev => !prev)}
                            >
                                {
                                    showPass
                                        ? <AiFillEye />
                                        : <AiFillEyeInvisible />
                                }
                            </div>
                        </div>
                        <div className='flex justify-between whitespace-nowrap text-xs md:text-sm'>
                            <p className='mb-6'>
                                ¿No tienes una cuenta?
                                <Link
                                    to="/sign-up"
                                    className='ml-1 text-red-500 hover:text-red-700 transition duration-200 ease-in-out'
                                >
                                    Registrate
                                </Link>
                            </p>
                            <Link
                                to="/forgot-password"
                                className='ml-1 text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out'
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                        <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 transition duration-150 ease-in-out' type="submit">Sign In</button>

                    </form>
                    <div className='my-4 before:border-t flex items-center before:flex-1 after:flex-1 after:border-t before:border-gray-300 after:border-gray-300'>
                        <p className='text-center font-semibold mx-4'>OR</p>
                    </div>
                    <OAuth />
                </div>
            </div>
        </section>
    );
};

export default SignIn;