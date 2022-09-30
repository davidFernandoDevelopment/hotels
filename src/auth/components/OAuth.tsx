import { FcGoogle } from 'react-icons/fc';

import { useAuthStore } from '../../hooks';

const OAuth = () => {

    const { startGoogleSignIn } = useAuthStore();


    return (
        <button
            type="submit"
            onClick={() => startGoogleSignIn()}
            className='flex justify-center items-center gap-x-3 w-full bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg active:bg-red-800 transition duration-150 ease-in-out'
        >
            <FcGoogle className='text-2xl bg-white rounded-full' />
            Sign In with Google
        </button>
    );
};

export default OAuth;