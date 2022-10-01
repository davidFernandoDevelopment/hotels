import { useState } from 'react';
import { FcHome } from 'react-icons/fc';

import { useForm } from '../hooks/useForm';
import { useAuthStore } from '../hooks/useAuthStore';
import { Link } from 'react-router-dom';


const Profile = () => {
    const [edit, setEdit] = useState(false);
    const { startLogout, user, startUpdateProfile } = useAuthStore();
    const { email, name, onInputChange } = useForm({
        name: user?.name,
        email: user?.email
    });

    const handleSignOut = () => {
        startLogout();
    };
    const handleChange = () => {
        if (name) startUpdateProfile(name);
    };

    return (
        <section
            className='max-w-6xl mx-auto flex flex-col justify-center items-center'
        >
            <h1 className='text-3xl text-center mt-6 font-bold'>
                Mi perfil
            </h1>
            <div className='w-full md:w-[50%] mt-6 px-3'>
                <form>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        disabled={!edit}
                        onChange={onInputChange}
                        className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out
                            ${edit && "bg-red-200 focus:bg-red-200"}`}
                    />
                    <input
                        disabled
                        type="email"
                        value={email}
                        className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out`}
                    />
                    <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
                        <p className='flex items-center'>
                            Do you want to change your name ?
                            <span
                                onClick={() => {
                                    setEdit(prev => !prev);
                                    edit && handleChange();
                                }}
                                className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'
                            >{!edit ? 'Edit' : 'Apply changes'}</span>
                        </p>
                        <p
                            onClick={handleSignOut}
                            className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'
                        >
                            Sign Out
                        </p>
                    </div>
                    <button
                        type='submit'
                        className='w-full px-6 py-4 font-medium uppercase rounded-md text-white bg-blue-600 hover:bg-blue-700 transition ease-in-out'
                    >
                        <Link
                            to='/create-listing'
                            className='flex gap-3 items-center justify-center'
                        >
                            <FcHome className='text-3xl bg-red-400 rounded-full p-1 border-2' />
                            Sell or rent your home
                        </Link>
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Profile;