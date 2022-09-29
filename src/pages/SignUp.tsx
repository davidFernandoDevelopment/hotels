import { Link } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import { useAuthStore, useForm } from '../hooks';


const SignUp = () => {
    const { startRegister } = useAuthStore();
    const [showPass, setShowPass] = useState(false);
    const { formState, name, email, password, onInputChange } = useForm({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        startRegister(formState);
    };

    return (
        <section>
            <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
                    <img
                        className='w-full rounded-2xl'
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa" alt="key" />
                </div>
                <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                    <form onSubmit={handleSubmit}>
                        <input
                            name="name"
                            type="name"
                            value={name}
                            className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                            placeholder='Ingrese su nombre'
                            onChange={onInputChange}
                        />
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
                                ¿Tienes una cuenta?
                                <Link
                                    to="/sign-in"
                                    className='ml-1 text-red-500 hover:text-red-700 transition duration-200 ease-in-out'
                                >
                                    Logeate
                                </Link>
                            </p>
                        </div>
                        <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 transition duration-150 ease-in-out' type="submit">Sign Up</button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;