import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../hooks';
import { useAuthStore } from '../hooks/useAuthStore';


const ForgotPassword = () => {

    const { startResetPassword } = useAuthStore();
    const { email, onInputChange } = useForm({
        email: ''
    });


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        startResetPassword(email);
    };

    return (
        <section>
            <h1 className='text-3xl text-center mt-6 font-bold'>Reset your password</h1>
            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
                    <img
                        className='w-full rounded-2xl'
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa" alt="key" />
                </div>
                <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                    <form onSubmit={handleSubmit}>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                            placeholder='Ingrese su email'
                            onChange={onInputChange}
                        />
                        <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 transition duration-150 ease-in-out' type="submit">Send confirmation</button>
                        <div className='mt-4 flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                            <Link
                                to="/sign-in"
                                className='w-full text-center ml-1 text-red-500 hover:text-red-700 transition duration-200 ease-in-out'
                            >
                                Volver
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;